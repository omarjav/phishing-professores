import { AccessLogRepository } from "../../interfaces/access-log.interface"
import { prisma } from "../../lib/prisma"

import { Prisma } from "@prisma/client"

export class PrismaAccessLogRepository implements AccessLogRepository {
  async findAll() {
    const access = await prisma.accessLog.findMany({
      include: {
        target: true,
        expectedTarget: true,
      }
    })

    return access
  }

  async findByLogId(logId: string) {
    const access = await prisma.accessLog.findFirst({
      where: { logId },
    })

    return access
  }

  async findByIpAndDevice(params: Prisma.AccessLogWhereInput) {
    const access = await prisma.accessLog.findFirst({
      where: { ...params },
    })

    return access
  }

  async create(data: Prisma.AccessLogCreateInput) {
    const target = await prisma.accessLog.create({
      data,
    })

    return target
  }

  async update(logId: string, data: Prisma.AccessLogUpdateInput) {
    const access = await prisma.accessLog.update({
      where: { logId },
      data,
    })

    return access
  }
}
