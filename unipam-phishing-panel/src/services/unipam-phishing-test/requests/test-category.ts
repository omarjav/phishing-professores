import { TestCategoryResponse } from "../@types"
import { unipamPhishingTestApi } from "../api"

export const TestCategoryServices = {
  getAll() {
    return unipamPhishingTestApi<TestCategoryResponse>('test-category')
  }
}
