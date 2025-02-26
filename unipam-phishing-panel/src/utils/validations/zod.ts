import { z } from "zod";

export const SignInFormSchema = z.object({
  username: z.string().nonempty("O usuário é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória"),
});
