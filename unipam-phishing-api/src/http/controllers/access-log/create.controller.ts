import { FastifyReply, FastifyRequest } from "fastify"

import {
  PrismaAccessLogRepository,
  PrismaExpectedTargetRepository,
} from "../../../repositories/prisma"
import { createAccessLogBody } from "../../../services/validations/access-log.validations"
import { AccessLogService } from "../../../services/access-log.services"

export async function create(req: FastifyRequest, res: FastifyReply) {
  const { device, ip, hash } = createAccessLogBody.parse(req.body)

  const accessLogRepository = new PrismaAccessLogRepository()
  const expectedTargetRepository = new PrismaExpectedTargetRepository()
  const accessLogService = new AccessLogService(accessLogRepository, expectedTargetRepository)

  const accessLog = await accessLogService.create({
    device,
    ip,
    hash
  })

  return await res.status(201).send(accessLog)
}

