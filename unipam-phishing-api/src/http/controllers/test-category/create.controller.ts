import { FastifyReply, FastifyRequest } from "fastify"

import { TestCategoryService } from "../../../services"

import {
  PrismaTestCategoryRepository,
} from "../../../repositories/prisma"
import { testCategoryBody } from "../../../services/validations"


export async function create(req: FastifyRequest, res: FastifyReply) {
  const { name } = testCategoryBody.parse(req.body)

  const testCategoryRepository = new PrismaTestCategoryRepository()

  const testCategoryService = new TestCategoryService(testCategoryRepository)

  await testCategoryService.create({
    name,
  })

  return await res.status(201).send({
    message: "Saved successfully"
  })
}

