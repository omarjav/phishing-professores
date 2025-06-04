import { FastifyInstance } from "fastify"

import { list, listByCategoryId } from "./list.controller"
import { verifyJwt } from "../../../http/middlewares"

export async function expectedTargetRoutes(app: FastifyInstance) {
  app.get("/expected-target", { onRequest: [verifyJwt] }, list)
  app.get(
    "/expected-target/category/:categoryId",
    { onRequest: [verifyJwt] },
    listByCategoryId
  )
}
