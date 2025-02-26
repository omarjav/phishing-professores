import { User } from "@prisma/client"

export interface AuthenticateServiceRequest {
  username: string;
  password: string;
}

export interface AuthenticateServiceResponse {
  user: User
}
