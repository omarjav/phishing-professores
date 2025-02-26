import { FastifyReply, FastifyRequest } from "fastify"

import {
  PrismaAccessLogRepository,
} from "../../../repositories/prisma"
import { AccessLogService } from "../../../services/access-log.services"

export async function list(_: FastifyRequest, res: FastifyReply) {
  const accessLogRepository = new PrismaAccessLogRepository()

  const accessLogService = new AccessLogService(accessLogRepository)

  const accessLog = await accessLogService.findAll()

  return await res.status(200).send(
    accessLog
  )
}

