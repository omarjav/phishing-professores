export class AcessLogNotFoundError extends Error {
	constructor() {
		super("Log de acesso não encontrado!")
	}
}