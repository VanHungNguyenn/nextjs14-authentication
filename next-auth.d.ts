import { UserRole } from '@prisma/client'
import { Console } from 'console'
import NextAuth, { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: DefaultSession['user'] & {
			role: UserRole
		}
	}
}
