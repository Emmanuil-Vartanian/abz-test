import React, { HTMLInputTypeAttribute } from 'react'
import { Field } from "react-final-form";
import { TextField, Typography } from "@mui/material";
import { FileDataState } from "../../../pages/Home/components/SignUp/SignUp.tsx";
import { InputBlock } from "./style.tsx";

interface InputFieldProps {
  name: string
  label: string
  type?: HTMLInputTypeAttribute
  validation?: (value: string) => string | undefined
  helperText?: string
  onHandleChange?: (data: FileDataState) => void
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  validation,
  helperText,
  onHandleChange,
  type = 'text',
  ...prev
}) => {
  const handleChange = (onChange: any) => (event: any) => {
    onChange(event)

    if (typeof onHandleChange === "function") {
      onHandleChange(event.target.value)
    }
  }

  return (
    <Field name={name} validate={validation}>
      {({ input, meta }) => {
        const fieldError = meta.error && meta.touched

        return (
          <InputBlock {...prev}>
            <TextField
              name={input.name}
              label={label}
              value={input.value}
              onChange={handleChange(input.onChange)}
              variant="outlined"
              type={type}
              error={fieldError}
              helperText={!fieldError && helperText}
            />
            {fieldError ?
              <Typography variant={'h6'} color={'#CB3D40'} margin={'4px 16px'}>
                {meta.error}
              </Typography>
              : null}
          </InputBlock>
        )
      }}
    </Field>
  )
}

export default InputField