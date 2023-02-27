export const normalizePort = (value: string): number | string | boolean => {
  const port: number = parseInt(value, 10)
  if (isNaN(port)) {
    return value
  }
  if (port >= 0) {
    return port
  }
  return false
}
