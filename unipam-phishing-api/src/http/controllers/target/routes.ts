import { FastifyInstance } from "fastify"

import { create } from "./create.controller"
import { list } from "./list.controller"
import { verifyJwt } from "../../../http/middlewares"


export async function targetRoutes(app: FastifyInstance) {
  app.post("/target", create)
  app.get("/target", { onRequest: [verifyJwt] }, list)
}
