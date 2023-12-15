import React, { RefObject, useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import { Form } from "react-final-form";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { CircularProgress } from "@mui/material";

import { ButtonBlock, FormFields, InputFieldStyled, PositionsBlock, SignUpContainer } from "./style.tsx";

import InputField from 'components/FormFields/InputField/InputField.tsx';
import RadioField from "components/FormFields/RadioField";
import { composeValidators, emailValidation, lengthValidation, phoneValidation, requiredValidation } from "validations"
import Button from "components/Button";
import FileInputField from "components/FormFields/FileInputField";
import { GetUsers, getUsersInitialState } from "../../Home.tsx";
import SuccessfullyRegisteredSvg from "assets/svg/SuccessfullyRegisteredSvg.tsx";
import { CREATE_USER, GET_POSITIONS, GET_TOKEN } from "api";

interface PositionsState {
  error: string | null
  positions: [{ id: number, name: string }] | []
}

export interface FileDataState {
  file: Record<string, any> | null,
  maxSize: number
}

interface SignUpProps {
  handleGetUsers: (page: number) => void
  setGetUsers: (data: GetUsers) => void
  navigationRef: RefObject<HTMLDivElement>
}

const SignUp: React.FC<SignUpProps> = ({ handleGetUsers, setGetUsers, navigationRef }) => {
  const [token, setToken] = useState<string>('')
  const [positionsData, setPositionsData] = useState<PositionsState>({ error: null, positions: [] });
  const [fileData, setFileData] = useState<FileDataState>({ file: null, maxSize: 5000000 })
  const [successfullyRegistered, setSuccessfullyRegistered] = useState({ loading: false, success: false })

  useEffect(() => {
    getToken()
    getPositions()
  }, [])

  useEffect(() => {
    if (successfullyRegistered.success) {
      setTimeout(() => {
        setSuccessfullyRegistered(prev => ({ ...prev, success: false }))
      }, 5000)
    }
  }, [successfullyRegistered]);

  const getPositions = async (): Promise<void> => {
    try {
      const { data } = await axios.get(GET_POSITIONS)
      setPositionsData(prev => ({ ...prev, positions: data.positions }));
    } catch (e) {
      setPositionsData(prev => ({ ...prev, error: 'Server error' }));
    }
  }

  const getToken = async () => {
    try {
      const { data } = await axios.get(GET_TOKEN)
      setToken(data.token)
    } catch (e) {
      setPositionsData(prev => ({ ...prev, error: 'Server error' }));
    }
  }

  const createUser = async (sendData: Record<string, any>, formReset: () => void) => {
    setSuccessfullyRegistered(prev => ({ ...prev, loading: true }))

    try {
      const formData = new FormData();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      formData.append('photo', fileData.file);
      formData.append('name', sendData.name)
      formData.append('email', sendData.email)
      formData.append('phone', sendData.phone)
      formData.append('position_id', sendData.position_id)

      const { data } = await axios.post(CREATE_USER, formData,
        {
          headers: {
            'Token': token,
            'Content-Type': 'multipart/form-data'
          }
        })
      if (data.success) {
        setGetUsers(getUsersInitialState)
        handleGetUsers(1)
        setSuccessfullyRegistered({ loading: false, success: true })
        formReset()
      }
    } catch (e) {
      setPositionsData(prev => ({ ...prev, error: 'Server error' }));
      setSuccessfullyRegistered(prev => ({ ...prev, loading: true }))
    }
  }

  const handleFormSubmit = (values: Record<string, any>, form: Record<string, any>) => {
    createUser(values, form.reset)
  }

  const handleChangeFile = (submitForm: () => void, errors: ValidationErrors) =>
    (data: FileDataState) => {
      setFileData(data)
      if (errors && Object.keys(errors).length > 1) {
        submitForm()
      }
    }

  const handleChangeField = (submitForm: () => void, errors: ValidationErrors) =>
    () => {
      if (errors && Object.keys(errors).length > 1) {
        submitForm()
      }
    }

  return (
    <SignUpContainer ref={navigationRef}>
      <Typography variant={'h1'}>
        {successfullyRegistered.success
          ? 'User successfully registered'
          : 'Working with POST request'}
      </Typography>
      <Form
        onSubmit={handleFormSubmit}
        validate={values => {
          const errors: Record<string, any> = {}
          if (values.photo && fileData?.file?.size > fileData.maxSize) {
            errors['photo'] = 'The photo size must not be greater than 5 Mb.'
          }
          return errors
        }}
        render={(data) => {
          const { handleSubmit, valid, form, errors } = data
          return (
            <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
              <FormFields>
                {!successfullyRegistered.success ?
                  <>
                    <InputFieldStyled
                      name={'name'}
                      label={'Your name'}
                      validation={composeValidators(requiredValidation, lengthValidation(2, 60))}
                      onHandleChange={handleChangeField(form.submit, errors)}
                    />
                    <InputFieldStyled
                      name={'email'}
                      label={'Email'}
                      type={'email'}
                      validation={composeValidators(requiredValidation, emailValidation, lengthValidation(2, 100))}
                      onHandleChange={handleChangeField(form.submit, errors)}
                    />
                    <InputField
                      name={'phone'}
                      label={'Phone'}
                      type={'tel'}
                      validation={composeValidators(requiredValidation, phoneValidation)}
                      helperText={'+38 (XXX) XXX - XX - XX'}
                      onHandleChange={handleChangeField(form.submit, errors)}
                    />
                    <PositionsBlock>
                      <Typography variant={'h5'}>Select your position</Typography>
                      <RadioField name={'position_id'} options={positionsData.positions} initialValue={'1'} />
                    </PositionsBlock>
                    <FileInputField
                      name={'photo'}
                      validation={requiredValidation}
                      onHandleChange={handleChangeFile(form.submit, errors)}
                    />
                  </> : <SuccessfullyRegisteredSvg />}
              </FormFields>
              {!successfullyRegistered.success
                ? positionsData.error ||
                <ButtonBlock>
                  {!successfullyRegistered.loading
                    ? <Button text={'Sign up'} type={'submit'} disabled={!valid} />
                    : <CircularProgress />}
                </ButtonBlock>
                : null}
            </form>
          )
        }}
      />
    </SignUpContainer>
  )
}

export default SignUp