import { AccessLogRepository, AccessLogServiceRequest } from "@app/interfaces/access-log.interface"
import { ExpectedTargetRepository } from "@app/interfaces/expected-target.interface"

export class AccessLogService {
  constructor(
    private accessLogRepository: AccessLogRepository,
    private expectedTargetRepository?: ExpectedTargetRepository
  ) { }

  async findAll() {
    const accessLog = await this.accessLogRepository.findAll()

    return { accessLog }
  }

  async create({ device, ip, hash }: AccessLogServiceRequest) {

    let expectedTarget

    if (this.expectedTargetRepository && hash) {
      expectedTarget = await this.expectedTargetRepository.findByHash(hash)
    }

    const accessLog = await this.accessLogRepository.create({
      device,
      ip,
      ...(expectedTarget && {
        expectedTarget: {
          connect: {
            hash: expectedTarget.hash
          }
        }
      }),
    })

    return {
      accessLog,
    }
  }
}
