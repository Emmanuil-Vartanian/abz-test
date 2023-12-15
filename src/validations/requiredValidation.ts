export const requiredValidation = (value: string): string | undefined => {
  if (!value) {
    return 'Fill in this field'
  } else {
    return undefined
  }
}