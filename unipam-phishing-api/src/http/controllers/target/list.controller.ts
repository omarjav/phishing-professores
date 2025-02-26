import { FastifyReply, FastifyRequest } from "fastify"

import { TargetService } from "../../../services"

import {
  PrismaTargetRepository,
} from "../../../repositories/prisma"

export async function list(_: FastifyRequest, res: FastifyReply) {

  const targetRepository = new PrismaTargetRepository()

  const targetService = new TargetService(targetRepository)

  const targets = await targetService.findAll()

  return await res.status(200).send(
    targets
  )
}

