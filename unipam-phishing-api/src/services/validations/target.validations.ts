import { z } from "zod"

export const createTargetBody = z.object({
  username: z.string().min(3).max(150),
  email: z.string().email(),
  logId: z.string().uuid().optional(),
})