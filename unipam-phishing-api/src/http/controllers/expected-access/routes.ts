import { FastifyInstance } from "fastify"

import { list } from "./list.controller"
import { verifyJwt } from "@app/http/middlewares"

export async function expectedTargetRoutes(app: FastifyInstance) {
  app.get("/expected-target", { onRequest: [verifyJwt] }, list)
}
