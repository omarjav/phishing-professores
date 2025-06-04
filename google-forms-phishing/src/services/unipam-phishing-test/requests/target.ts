import { TargetRequest } from '../@types/target'
import { unipamPhishingTestApi } from '../api'

export const TargetServices = {
  saveTarget: async (data: TargetRequest) => {
    unipamPhishingTestApi('target', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
