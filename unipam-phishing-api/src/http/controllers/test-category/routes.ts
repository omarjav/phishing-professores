import { FastifyInstance } from "fastify"

import { create } from "./create.controller"
import { list, listActive } from "./list.controller"
import { verifyJwt } from "../../../http/middlewares"

export async function testCategoryRoutes(app: FastifyInstance) {
  app.post("/test-category", { onRequest: [verifyJwt] }, create)
  app.get("/test-category", { onRequest: [verifyJwt] }, list)
  app.get("/test-category/last-active", { onRequest: [verifyJwt] }, listActive)
}
