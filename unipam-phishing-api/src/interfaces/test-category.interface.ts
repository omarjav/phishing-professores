import { Prisma, TestCategory } from "@prisma/client"

export interface TestCategoryRepository {
  findLastActive(): Promise<TestCategory | null>;
  findAll(): Promise<TestCategory[]>;
  create(data: Prisma.TestCategoryCreateInput): Promise<TestCategory>;
  update(categoryId: string, data: Prisma.TestCategoryUpdateInput): Promise<TestCategory>;
}
