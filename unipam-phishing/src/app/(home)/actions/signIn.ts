'use server'

import { AccessLogServices } from "@app/services/unipam-phishing-test";
import { cookies, headers } from "next/headers";

export async function signIn() {
  const headersList = await headers();
  const cookieStore = await cookies()

  const userLogId = cookieStore.get('userLogId')

  if (userLogId) {
    return
  }

  const forwardedFor = headersList.get("x-forwarded-for");
  const userAgent = headersList.get("user-agent") ?? "Desconhecido";

  const realIp = forwardedFor
    ? forwardedFor.split(",")[0]
    : headersList.get("x-real-ip");
  const deviceMatch = userAgent.match(
    /(Mobile|Tablet|iPad|iPhone|Android)/i
  );
  const device = deviceMatch ? deviceMatch[0] : "Desktop";
  const ip = realIp?.includes("::ffff:")
    ? realIp.split("::ffff:")[1]
    : realIp ?? "Desconhecido";

  const log = await AccessLogServices.saveLog({
    ip,
    device,
  });

  cookieStore.set({
    name: 'userLogId',
    value: log.accessLog.logId,
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14) // 14 days
  })
}