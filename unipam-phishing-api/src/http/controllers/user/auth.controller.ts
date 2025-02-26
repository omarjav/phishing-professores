import { FastifyReply, FastifyRequest } from "fastify"
import { PrismaUsersRepository } from "../../../repositories/prisma"
import { InvalidCredentialsError } from "../../../services/errors"
import { AuthService } from "../../../services"
import { authUserBody } from "../../../services/validations"

export async function authentication(req: FastifyRequest, res: FastifyReply) {
	const { username, password } = authUserBody.parse(req.body)

	try {
		const usersRepository = new PrismaUsersRepository()

		const authenticationService = new AuthService(usersRepository)

		const { user } = await authenticationService.auth({
			username,
			password,
		})

		const token = await res.jwtSign(
			{},
			{
				sign: {
					sub: String(user.userId),
					expiresIn: "4h",
				},
			}
		)

		return await res.status(200).send({
			user: {
				username: user.username,
			},
			token,
		})
	} catch (err) {
		if (err instanceof InvalidCredentialsError) {
			return res.status(400).send({
				message: err.message,
			})
		}

		throw err
	}
}