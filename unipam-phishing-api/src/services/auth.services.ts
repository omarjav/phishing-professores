import { AuthenticateServiceRequest, AuthenticateServiceResponse } from "@app/interfaces"
import { InvalidCredentialsError } from "./errors"
import { compare } from "bcryptjs"
import { UserRepository } from "@app/interfaces/user.interface"

export class AuthService {
	constructor(private usersRepository: UserRepository) {}

	async auth({
		username,
		password,
	}: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
		const user = await this.usersRepository.findByUsername(username)

		if (!user) {
			throw new InvalidCredentialsError()
		}

		const isPasswordMatch = await compare(password, user.password)

		if (!isPasswordMatch) {
			throw new InvalidCredentialsError()
		}

		return {
			user
		}

	}
}