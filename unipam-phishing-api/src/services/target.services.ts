import {
  TargetRepository,
  TargetServiceRequest,

} from "../interfaces/target.interface"

import { AcessLogNotFoundError, TargetNotFoundError, TestCategoryNotFoundActiveError } from "./errors"

import { AccessLogRepository, TestCategoryRepository } from "../interfaces"


export class TargetService {
  constructor(
    private targetRepository: TargetRepository,
    private accessLogRepository?: AccessLogRepository,
    private testCategoryRepository?: TestCategoryRepository
  ) { }

  async findById(targetId: string) {
    const target = await this.targetRepository.findById(targetId)

    if (!target) {
      throw new TargetNotFoundError()
    }

    return {
      target,
    }
  }

  async createOrUpdate({ username, email, logId }: TargetServiceRequest) {
    const currentTestCategory = await this.testCategoryRepository?.findLastActive()

    if (!currentTestCategory) {
      throw new TestCategoryNotFoundActiveError()
    }

    const { categoryId } = currentTestCategory

    const verifyTargetAlreadyRegistred = await this.targetRepository.findByUsernameAndCategoryId(username, categoryId)

    let target

    if (verifyTargetAlreadyRegistred) {
      await this.targetRepository.update(verifyTargetAlreadyRegistred.targetId, { email })
      target = verifyTargetAlreadyRegistred
    } else {
      target = await this.targetRepository.create({
        username,
        email,
        category: {
          connect: {
            categoryId
          }
        }
      })
    }

    if (this.accessLogRepository && logId) {
      const accessLog = await this.accessLogRepository.findByLogId(logId);

      if (!accessLog) {
        throw new AcessLogNotFoundError()
      }

      await this.accessLogRepository.update(logId, {
        target: {
          connect: {
            targetId: target.targetId
          }
        }
      });
    }

    return {
      target,
    }
  }

  async findAll() {
    const targets = await this.targetRepository.findAll()

    return {
      targets,
    }
  }

  async findAllByCategoryId(username: string) {
    const targets = await this.targetRepository.findAllByCategoryId(username)

    return {
      targets,
    }
  }

}
