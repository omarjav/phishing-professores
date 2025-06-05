import { TestCategoryRepository } from "../interfaces"
import { AccessLogRepository, AccessLogServiceRequest } from "../interfaces/access-log.interface"
import { ExpectedTargetRepository } from "../interfaces/expected-target.interface"
import { TestCategoryNotFoundActiveError } from "./errors"

export class AccessLogService {
  constructor(
    private accessLogRepository: AccessLogRepository,
    private expectedTargetRepository?: ExpectedTargetRepository,
    private testCategoryRepository?: TestCategoryRepository
  ) { }

  async findAll() {
    const accessLog = await this.accessLogRepository.findAll()

    return { accessLog }
  }

  async findByTargetCategoryId(categoryId: string) {
    const accessLog = await this.accessLogRepository.findAllByTargetCategoryId(categoryId)

    return { accessLog }
  }

  async create({ device, ip, hash }: AccessLogServiceRequest) {
    const currentTestCategory = await this.testCategoryRepository?.findLastActive()

    if (!currentTestCategory) {
      throw new TestCategoryNotFoundActiveError()
    }

    const { categoryId } = currentTestCategory

    let expectedTarget

    if (this.expectedTargetRepository && hash) {
      expectedTarget = await this.expectedTargetRepository.findByHash(hash)
    }

    const accessLog = await this.accessLogRepository.create({
      device,
      ip,
      testCategory: {
        connect: {
          categoryId,
        }
      },
      ...(expectedTarget && {
        expectedTarget: {
          connect: {
            hash: expectedTarget.hash,
          }
        }
      }),
    })

    return {
      accessLog,
    }
  }
}
