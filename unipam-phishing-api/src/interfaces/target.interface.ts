import { Prisma, Target } from "@prisma/client"

export interface TargetServiceRequest {
  username: string;
  email: string;
  logId?: string;
  hash?: string;
}

export interface TargetRepository {
  findById(targetId: string): Promise<Target | null>;
  findByUsername(username: string): Promise<Target | null>;
  findByUsernameAndCategoryId(username: string, categoryId: string): Promise<Target | null>;
  findAll(): Promise<Target[]>;
  findAllByCategoryId(categoryId: string): Promise<Target[]>;
  create(data: Prisma.TargetCreateInput): Promise<Target>;
  update(targetId: string, data: Prisma.TargetUpdateInput): Promise<Target>;
}
