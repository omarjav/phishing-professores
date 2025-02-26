import { z } from "zod"

export const authUserBody = z.object({
	username: z.string().max(100),
	password: z.string().max(30),
})
