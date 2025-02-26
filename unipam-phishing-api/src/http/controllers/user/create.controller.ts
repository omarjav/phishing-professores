import { FastifyReply, FastifyRequest } from "fastify"

import { UserService } from "@app/services"

import {
  PrismaUsersRepository,
} from "@app/repositories/prisma"
import { UserAlreadyRegistredError } from "@app/services/errors"
import { createUserBody } from "@app/services/validations"

export async function create(req: FastifyRequest, res: FastifyReply) {
  const { username, password } = createUserBody.parse(req.body)

  try {
    const usersRepository = new PrismaUsersRepository()

    const userService = new UserService(usersRepository)

    await userService.create({
      username,
      password,
    })
  } catch (err) {
    if (err instanceof UserAlreadyRegistredError) {
      return res.status(409).send({
        message: err.message,
      })
    }

    throw err
  }

  return await res.status(201).send({
    message: "Saved successfully"
  })
}

