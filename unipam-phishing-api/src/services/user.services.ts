import {
	UserRepository,
	UserServiceRequest,
} from "@app/interfaces/user.interface"

import { hash } from "bcryptjs"
import { UserAlreadyRegistredError } from "./errors"

export class UserService {
	constructor(private userRepository: UserRepository) {}

	async create({ username, password }: UserServiceRequest) {
		const password_hash = await hash(password, 6)

		const verifyUsernameAlreadyRegistred = await this.userRepository.findByUsername(username)

		if (verifyUsernameAlreadyRegistred) {
			throw new UserAlreadyRegistredError()
		}

		const user = await this.userRepository.create({
			username,
			password: password_hash,
		})

		return {
			user,
		}
	}
}