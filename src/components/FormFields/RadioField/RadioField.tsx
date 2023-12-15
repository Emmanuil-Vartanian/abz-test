import React from 'react'
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import { Field } from 'react-final-form'
import { FormControlLabel } from '@mui/material'

interface RadioFieldProps {
  name: string
  options: [{ id: number, name: string }] | []
  initialValue?: any
}

const RadioField: React.FC<RadioFieldProps & RadioGroupProps> = props => {
  const { id, name, initialValue, options, ...rest } = props

  const handleChange = (onChange: any) => (event: any) => {
    onChange(event)
  }

  return (
    <div style={{ width: 'fit-content' }}>
      {options.map(option => (
        <Field
          key={option.id}
          initialValue={initialValue}
          name={name}
          type={'radio'}
          value={String(option.id)}
        >
          {({ input }) => {
            return (
              <RadioGroup id={id} name={input.name} value={String(option.id)} {...rest}>
                <FormControlLabel
                  className={'radio-button'}
                  value={String(option.id)}
                  label={option.name}
                  onChange={handleChange(input.onChange)}
                  control={<Radio checked={input.checked} />}
                />
              </RadioGroup>
            )
          }}
        </Field>
      ))}
    </div>
  )
}

export default RadioField