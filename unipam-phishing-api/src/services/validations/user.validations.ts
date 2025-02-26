import { z } from "zod"

export const createUserBody = z.object({
	username: z.string().min(6).max(100),
	password: z.string().min(6).max(30),
})
