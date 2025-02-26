import { ExpectedTargetResponse } from '../@types/expected-target-log'
import { unipamPhishingTestApi } from '../api'

export const ExpectedTargetServices = {
  getExpectedTarget() {
    return unipamPhishingTestApi<ExpectedTargetResponse>('expected-target')
  }
}
