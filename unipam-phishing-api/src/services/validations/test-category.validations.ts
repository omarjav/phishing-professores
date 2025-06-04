import { z } from "zod"

export const testCategoryBody = z.object({
  name: z.string().min(3).max(100),
})
