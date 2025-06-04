import { FastifyReply, FastifyRequest } from "fastify"

import { TestCategoryService } from "../../../services"

import {
  PrismaTestCategoryRepository,
} from "../../../repositories/prisma"

export async function list(_: FastifyRequest, res: FastifyReply) {
  const testCategoryRepository = new PrismaTestCategoryRepository()

  const testCategoryService = new TestCategoryService(testCategoryRepository)

  const categories = await testCategoryService.findAll()

  return await res.status(200).send(
    categories
  )
}

export async function listActive(_: FastifyRequest, res: FastifyReply) {
  const testCategoryRepository = new PrismaTestCategoryRepository()

  const testCategoryService = new TestCategoryService(testCategoryRepository)

  const category = await testCategoryService.findLastActive()

  return await res.status(200).send(
    category
  )
}