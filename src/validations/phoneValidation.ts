export const phoneValidation = (value: string) => {
  const phonePatter = /^\+380\d{9}$/

  if (value) {
    return phonePatter.test(value) ? undefined : 'Number should start with code of Ukraine +380'
  } else {
    return undefined
  }
}
