import { AccessLogResponse } from '../@types'
import { unipamPhishingTestApi } from '../api'

export const AccessLogServices = {
  getAccessLog() {
    return unipamPhishingTestApi<AccessLogResponse>('access-log')
  }
}
