import { AccessLog, Prisma } from "@prisma/client"

export interface AccessLogServiceRequest {
  ip: string;
  device: string;
  hash?: string;
}

export interface AccessLogRepository {
  findAll(): Promise<AccessLog[]>;
  findByLogId(logId: string): Promise<AccessLog | null>;
  findByIpAndDevice(accessLogRequest: Prisma.AccessLogWhereInput): Promise<AccessLog | null>;
  create(data: Prisma.AccessLogCreateInput): Promise<AccessLog>;
  update(targetId: string, data: Prisma.AccessLogUpdateInput): Promise<AccessLog>;
}