import { AccessLog } from "./access-log"

export type ExpectedTarget = {
  hash: string
  name: string
  email: string
  accessLog: AccessLog[]
}

export type ExpectedTargetResponse = {
  expectedTarget: ExpectedTarget[]
}


