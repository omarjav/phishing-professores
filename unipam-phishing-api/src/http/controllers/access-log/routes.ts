import { FastifyInstance } from "fastify"

import { create } from "./create.controller"
import { list, listByTargetCategoryId } from "./list.controller"
import { verifyJwt } from "../../../http/middlewares"

export async function accessLogRoutes(app: FastifyInstance) {
  app.post("/access-log", create)
  app.get("/access-log", { onRequest: [verifyJwt] }, list)
  app.get(
    "/access-log/category/:categoryId",
    { onRequest: [verifyJwt] },
    listByTargetCategoryId
  )
}
