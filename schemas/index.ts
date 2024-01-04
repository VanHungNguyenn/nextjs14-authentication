import * as z from 'zod'

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(100),
})

export const RegisterSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(100),
	name: z.string().min(2).max(100),
})
