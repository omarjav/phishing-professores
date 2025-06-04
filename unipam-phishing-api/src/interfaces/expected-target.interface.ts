import { ExpectedTarget } from "@prisma/client"

export interface ExpectedTargetRepository {
  findAll(): Promise<ExpectedTarget[]>;
  findAllByCategoryId(categoryId: string): Promise<ExpectedTarget[]>;
  findByHash(hash: string): Promise<ExpectedTarget | null>;
}