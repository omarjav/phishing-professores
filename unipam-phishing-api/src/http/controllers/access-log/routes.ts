import { FastifyInstance } from "fastify"

import { create } from "./create.controller"
import { list } from "./list.controller"
import { verifyJwt } from "@app/http/middlewares"

export async function accessLogRoutes(app: FastifyInstance) {
  app.post("/access-log", create)
  app.get("/access-log", { onRequest: [verifyJwt] }, list)
}
