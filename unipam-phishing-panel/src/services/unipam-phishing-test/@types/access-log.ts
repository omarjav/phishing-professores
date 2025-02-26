import { ExpectedTarget } from "./expected-target-log"
import { Target } from "./target"

export type AccessLogRequest = {
  device: string
  ip: string
}

export type AccessLog = {
  logId: string
  device: string
  ip: string
  createdAt: string
  target?: Target
  expectedTarget?: ExpectedTarget
}

export type AccessLogResponse = {
  accessLog: AccessLog[]
}