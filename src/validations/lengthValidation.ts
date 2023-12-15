export const lengthValidation = (min: number, max: number) => (value: string) => {
  if (value && (min > value.length || max < value.length)) {
    return `min length: ${min} - max length: ${max}`
  } else {
    return undefined
  }
}
