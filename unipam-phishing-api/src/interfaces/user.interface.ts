import { Prisma, User } from "@prisma/client"

export interface UserServiceRequest {
  username: string;
  password: string;

}

export interface UserRepository {
  findByUsername(username: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
}