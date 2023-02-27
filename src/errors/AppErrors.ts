export const AppError = (message: string, error = 400) => {
  return {
    success: false,
    error,
    message,
  }
}
