"use server";
import "server-only";

import { AccessLogServices, TargetServices } from "@/services/unipam-phishing-test";
import { ExpectedTargetServices } from "@/services/unipam-phishing-test/requests/expected-target";


export async function getData() {
  const { targets } = await TargetServices.getTargets();
  const { accessLog } = await AccessLogServices.getAccessLog();
  const { expectedTarget } = await ExpectedTargetServices.getExpectedTarget();

  return {
    targets,
    accessLog,
    expectedTarget
  }
}
