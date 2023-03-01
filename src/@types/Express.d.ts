import 'express'
interface AuthenticatedRequest {
  user?: { id?: string; is_admin?: boolean; email?: string }
}
declare module 'express' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Request extends AuthenticatedRequest {}
}
