import React from 'react'
import { Field } from "react-final-form";

import { InputFile } from "./style.tsx";

import { FileDataState } from "pages/Home/components/SignUp/SignUp.tsx";
import { Typography } from "@mui/material";

interface FileInputFieldProps {
  name: string
  validation?: (value: string) => string | undefined
  onHandleChange?: (data: FileDataState) => void
}

const FileInputField: React.FC<FileInputFieldProps> = ({ name, validation, onHandleChange }) => {
  const handleChange = (onChange: any) => (event: any) => {
    const file = event.target.files[0]

    onChange(file.name)

    if (typeof onHandleChange === "function") {
      onHandleChange({ file, maxSize: event.target.size })
    }
  }

  return (
    <Field name={name} validate={validation}>
      {({ input, meta }) => {
        const fieldError = meta.error && meta.touched

        return (
          <div>
            <InputFile htmlFor="file-upload" error={fieldError}>
              <div>Upload</div>
              <div>{input.value || 'Upload your photo'}</div>
            </InputFile>
            <input
              id="file-upload"
              type="file"
              accept={'.jpeg, .jpg'}
              onChange={handleChange(input.onChange)}
              style={{ display: 'none' }}
              size={5000000}
            />
            {fieldError ?
              <Typography variant={'h6'} color={'#CB3D40'} margin={'4px 16px'}>
                {meta.error}
              </Typography>
              : null}
          </div>
        )
      }}
    </Field>
  )
}

export default FileInputField