import { TargetRepository } from "../../interfaces"
import { prisma } from "../../lib/prisma"

import { Prisma, Target } from "@prisma/client"

export class PrismaTargetRepository implements TargetRepository {
  async findAll() {
    const targets = await prisma.target.findMany()

    return targets
  }

  async findById(targetId: string) {
    const target = await prisma.target.findUnique({
      where: { targetId },

    })

    return target
  }

  async findByUsername(username: string) {
    const target = await prisma.target.findFirst({
      where: { username },
    })

    return target
  }


  async create(data: Prisma.TargetCreateInput) {
    const target = await prisma.target.create({
      data,
    })

    return target
  }

  async update(targetId: string, data: Prisma.TargetUpdateInput): Promise<Target> {
    const target = await prisma.target.update({
      where: { targetId },
      data,
    })

    return target
  }

}
