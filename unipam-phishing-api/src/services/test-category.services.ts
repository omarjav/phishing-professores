
import { TestCategoryRepository } from "../interfaces"
import { TestCategoryNotFoundActiveError } from "./errors"

export class TestCategoryService {
  constructor(
    private testCategoryRepository: TestCategoryRepository,
  ) { }

  async findAll() {
    const categories = await this.testCategoryRepository.findAll()

    return {
      categories
    }
  }

  async findLastActive() {
    const category = await this.testCategoryRepository.findLastActive()

    if (!category) {
      throw new TestCategoryNotFoundActiveError()
    }

    return {
      category
    }
  }

  async create(data: { name: string }) {
    const category = await this.testCategoryRepository.create({
      name: data.name,
      active: true,
    })

    return {
      category
    }
  }

  async update(categoryId: string, data: { name?: string; active?: boolean }) {
    const category = await this.testCategoryRepository.update(categoryId, data)

    return {
      category
    }
  }
}
