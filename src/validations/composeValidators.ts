export const composeValidators = (...validators: any[]) => (value: any) => {
  return validators.reduce((error, validator) => error || validator(value), undefined)
}
