import { FastifyReply, FastifyRequest } from "fastify"

import {
  PrismaExpectedTargetRepository,
} from "@app/repositories/prisma"
import { ExpectedTargetService } from "@app/services/expected-target.services"

export async function list(_: FastifyRequest, res: FastifyReply) {
  const expectedTargetRepositry = new PrismaExpectedTargetRepository()

  const expectedTargetService = new ExpectedTargetService(expectedTargetRepositry)

  const accessLog = await expectedTargetService.findAll()

  return await res.status(200).send(
    accessLog
  )
}

