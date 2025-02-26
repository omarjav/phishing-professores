
import { UserRepository } from "@app/interfaces/user.interface"
import { prisma } from "@app/lib/prisma"

import { Prisma } from "@prisma/client"

export class PrismaUsersRepository implements UserRepository {
	async findByUsername(username: string) {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		})

		return user
	}
	async create(data: Prisma.UserCreateInput) {
		const user = await prisma.user.create({
			data,
		})

		return user
	}
}