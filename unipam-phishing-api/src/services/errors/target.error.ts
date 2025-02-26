export class TargetNotFoundError extends Error {
	constructor() {
		super("Alvo não encontrado!")
	}
}