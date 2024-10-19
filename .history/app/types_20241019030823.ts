import { UserRole } from '@prisma/client'

export interface RegisterData {
  email: string
  password: string
  role: UserRole
}