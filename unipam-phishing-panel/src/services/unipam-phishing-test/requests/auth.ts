import { AuthResponse } from '../@types/auth'
import { unipamPhishingTestApi } from '../api'

export const AuthServices = {
  login: (username: string, password: string) => {
    return unipamPhishingTestApi<AuthResponse>('user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
  }
}
