import { cookies } from "next/headers";

export async function unipamPhishingTestApi<T = unknown>(
  input: RequestInfo | URL,
  options?: RequestInit
) {
  const token = (await cookies()).get('token')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
    ...options,
    headers: {
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const errorResponse = await response.json().catch(() => ({}));
    throw new Error(`HTTP ${response.status}: ${response.statusText} - ${JSON.stringify(errorResponse)}`);
  }

  return response.json() as Promise<T>;
}
