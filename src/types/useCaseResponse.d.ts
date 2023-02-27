export interface UseCaseResponse<T> {
  success: boolean
  error?: number
  message?: string
  data?: T
}
