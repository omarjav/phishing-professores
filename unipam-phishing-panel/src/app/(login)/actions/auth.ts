"use server";
import "server-only";

import { AuthServices } from "@/services/unipam-phishing-test/requests/auth";
import { COOKIES_NAME } from "@/utils/constants/cookies";
import { SignInFormSchema } from "@/utils/validations/zod";
import { cookies } from "next/headers";

type FormState = {
  success: boolean;
  fields?: Record<string, string>;
  errors?: Record<string, string[]>;
};

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  const { username, password } = Object.fromEntries(formData.entries()) as { username: string, password: string };

  const validatedFields = SignInFormSchema.safeParse({ username, password });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    const { token, user } = await AuthServices.login(username, password);
    const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const cookieStore = await cookies();

    cookieStore.set({
      name: COOKIES_NAME.username,
      value: user.username,
      path: "/",
      expires: expiresAt,
    });

    cookieStore.set({
      name: COOKIES_NAME.token,
      value: token,
      path: "/",
      expires: expiresAt,
    });

    return {
      success: true,
    }
  } catch {
    return {
      success: false,
      errors: { general: ['Login failed'] },
    };
  }
}
