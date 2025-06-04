import { TestCategoryRepository } from "../../interfaces"
import { prisma } from "../../lib/prisma"

import { Prisma, TestCategory } from "@prisma/client"

export class PrismaTestCategoryRepository implements TestCategoryRepository {
  async findLastActive(): Promise<TestCategory | null> {
    const category = await prisma.testCategory.findFirst({
      where: {
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return category
  }

  async findAll(): Promise<TestCategory[]> {
    const categories = await prisma.testCategory.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return categories
  }

  async create(data: Prisma.TestCategoryCreateInput) {
    const category = await prisma.testCategory.create({
      data,
    })

    return category
  }

  async update(categoryId: string, data: Prisma.TestCategoryUpdateInput): Promise<TestCategory> {
    const category = await prisma.testCategory.update({
      where: { categoryId },
      data,
    })

    return category
  }

}
