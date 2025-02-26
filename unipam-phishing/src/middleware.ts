import { AccessLogRequest, AccessLogServices } from '@app/services/unipam-phishing-test';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from './utils/constants/cookies';

const expirationTime = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14) // 14 days

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const searchParams = request.nextUrl.searchParams;

  if (request.nextUrl.pathname === '/') {
    const userLogId = request.cookies.get(cookies.userLogId)?.value
    const userCupom = searchParams.get('token')
    const userPreviuosCupom = request.cookies.get(cookies.userCupom)?.value

    if (userLogId && userCupom === userPreviuosCupom || userLogId && !userCupom) {
      return response
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const userAgent = request.headers.get("user-agent") ?? "Desconhecido";

    const realIp = forwardedFor
      ? forwardedFor.split(",")[0]
      : request.headers.get("x-real-ip");
    const deviceMatch = userAgent.match(
      /(Mobile|Tablet|iPad|iPhone|Android)/i
    );
    const device = deviceMatch ? deviceMatch[0] : "Desktop";
    const ip = realIp?.includes("::ffff:")
      ? realIp.split("::ffff:")[1]
      : realIp ?? "Desconhecido";

    const logData: AccessLogRequest = {
      ip,
      device
    };

    if (userCupom) {
      logData.hash = userCupom;

      response.cookies.set({
        name: cookies.userCupom,
        value: userCupom,
        expires: expirationTime
      });

    }

    const log = await AccessLogServices.saveLog(logData)

    response.cookies.set({
      name: cookies.userLogId,
      value: log.accessLog.logId,
      path: '/',
      expires: expirationTime
    })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}