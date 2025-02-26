export type AccessLogRequest = {
  device: string
  ip: string
  hash?: string
}

export type AccessLogResponse = {
  accessLog: {
    logId: string
  }
}