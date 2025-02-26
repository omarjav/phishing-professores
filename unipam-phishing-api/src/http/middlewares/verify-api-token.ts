import { FastifyReply, FastifyRequest } from "fastify"

export async function verifyApiToken(request: FastifyRequest, reply: FastifyReply) {
	const token = request.headers["authorization"]

	if (!token || token !== `Bearer ${process.env.API_SECRET_TOKEN}`) {
		return reply.status(401).send({ message: "Acesso negado. Token inválido." })
	}
}