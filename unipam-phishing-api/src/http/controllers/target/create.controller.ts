import { FastifyReply, FastifyRequest } from "fastify"

import { TargetService } from "@app/services"

import {
  PrismaAccessLogRepository,
  PrismaTargetRepository,
} from "@app/repositories/prisma"
import { createTargetBody } from "@app/services/validations"

import { AcessLogNotFoundError } from "@app/services/errors/access-log.error"

export async function create(req: FastifyRequest, res: FastifyReply) {
  const { username, email, logId } = createTargetBody.parse(req.body)

  try {
    const targetRepository = new PrismaTargetRepository()
    const accessLogRepository = new PrismaAccessLogRepository()

    const targetService = new TargetService(targetRepository, accessLogRepository)

    await targetService.createOrUpdate({
      username,
      email,
      logId
    })
  } catch (err) {
    if (err instanceof AcessLogNotFoundError) {
      return res.status(400).send({
        message: err.message
      })
    }

    throw err
  }

  return await res.status(201).send({
    message: "Saved successfully"
  })
}

