import { FastifyInstance } from "fastify"

import { list } from "./list.controller"
import { verifyJwt } from "../../../http/middlewares"

export async function expectedTargetRoutes(app: FastifyInstance) {
  app.get("/expected-target", { onRequest: [verifyJwt] }, list)
}
