import {
  TargetRepository,
  TargetServiceRequest,

} from "../interfaces/target.interface"

import { TargetNotFoundError } from "./errors"
import { AccessLogRepository } from "../interfaces/access-log.interface"
import { AcessLogNotFoundError } from "./errors/access-log.error"

export class TargetService {
  constructor(
    private targetRepository: TargetRepository,
    private accessLogRepository?: AccessLogRepository
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
    const verifyTargetAlreadyRegistred = await this.targetRepository.findByUsername(username)

    let target

    if (verifyTargetAlreadyRegistred) {
      await this.targetRepository.update(verifyTargetAlreadyRegistred.targetId, { email })
      target = verifyTargetAlreadyRegistred
    } else {
      target = await this.targetRepository.create({
        username,
        email,
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
}
