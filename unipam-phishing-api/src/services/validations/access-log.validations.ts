import { z } from "zod"

export const createAccessLogBody = z.object({
  device: z.string().max(20),
  ip: z.string().ip(),
  hash: z.string().max(20).optional(),
})
