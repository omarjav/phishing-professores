import { FastifyReply, FastifyRequest } from "fastify"

import {
  PrismaExpectedTargetRepository,
} from "../../../repositories/prisma"
import { ExpectedTargetService } from "../../../services/expected-target.services"

export async function list(_: FastifyRequest, res: FastifyReply) {
  const expectedTargetRepositry = new PrismaExpectedTargetRepository()

  const expectedTargetService = new ExpectedTargetService(expectedTargetRepositry)

  const accessLog = await expectedTargetService.findAll()

  return await res.status(200).send(
    accessLog
  )
}

export async function listByCategoryId(req: FastifyRequest, res: FastifyReply) {
  const { categoryId } = req.params as { categoryId: string }

  const expectedTargetRepositry = new PrismaExpectedTargetRepository()

  const expectedTargetService = new ExpectedTargetService(expectedTargetRepositry)

  const accessLog = await expectedTargetService.findAllByCategoryId(categoryId)

  return await res.status(200).send(
    accessLog
  )
}

