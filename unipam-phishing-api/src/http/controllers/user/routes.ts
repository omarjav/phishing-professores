import { FastifyInstance } from "fastify"
import { create } from "./create.controller"
import { authentication } from "./auth.controller"
import { verifyApiToken } from "@app/http/middlewares/verify-api-token"

export async function userRoutes(app: FastifyInstance) {
	app.post("/user", { onRequest: [verifyApiToken] }, create)
	app.post("/user/auth", authentication)
}