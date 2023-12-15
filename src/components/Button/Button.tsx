import React from 'react'

import { Button as ButtonMui, ButtonProps as ButtonMuiProps } from '@mui/material'

interface ButtonProps {
  text: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps & ButtonMuiProps> = ({
  text,
  disabled,
  onClick,
  variant = 'contained',
  ...prev
}) => {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <ButtonMui
      variant={variant}
      disabled={disabled}
      onClick={handleOnClick}
      {...prev}
    >
      {text}
    </ButtonMui>
  )
}

export default Button