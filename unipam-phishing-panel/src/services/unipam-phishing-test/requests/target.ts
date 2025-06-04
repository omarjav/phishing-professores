import { TargetResponse } from '../@types/target'
import { unipamPhishingTestApi } from '../api'

export const TargetServices = {
  getTargets() {
    return unipamPhishingTestApi<TargetResponse>('target')
  },
  getTargetByCategoryId(categoryId: string) {
    return unipamPhishingTestApi<TargetResponse>(`target/category/${categoryId}`)
  }
}
