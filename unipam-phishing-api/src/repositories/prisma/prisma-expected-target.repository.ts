import { ExpectedTargetRepository } from "../../interfaces/expected-target.interface"
import { prisma } from "../../lib/prisma"

export class PrismaExpectedTargetRepository implements ExpectedTargetRepository {
  async findAll() {
    const expectedTargets = await prisma.expectedTarget.findMany({
      include: {
        accessLog: {
          include: {
            target: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      }
    })

    return expectedTargets
  }

  async findByHash(hash: string) {
    const access = await prisma.expectedTarget.findFirst({
      where: { hash },
    })

    return access
  }
}
