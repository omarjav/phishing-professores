
import { ExpectedTargetRepository } from "../interfaces/expected-target.interface"

export class ExpectedTargetService {
  constructor(
    private expectedTargetRepositry: ExpectedTargetRepository,
  ) { }

  async findAll() {
    const expectedTarget = await this.expectedTargetRepositry.findAll()

    return {
      expectedTarget,
    }
  }
}
