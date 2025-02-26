
export async function unipamPhishingTestApi<T = unknown>(
  input: RequestInfo | URL,
  options?: RequestInit
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${input}`,
    {
      ...options,
      headers: {
        ...options?.headers,
      },
    }
  )

  const result = await data.json()

  return result as T
}
