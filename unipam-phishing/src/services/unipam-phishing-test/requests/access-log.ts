import { AccessLogResponse, AccessLogRequest } from '../@types'
import { unipamPhishingTestApi } from '../api'

export const AccessLogServices = {
  saveLog(data: AccessLogRequest) {
    return unipamPhishingTestApi<AccessLogResponse>('access-log', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
