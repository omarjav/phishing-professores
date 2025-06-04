"use server";
import "server-only";

import { AccessLogServices, TargetServices, TestCategoryServices } from "@/services/unipam-phishing-test";
import { ExpectedTargetServices } from "@/services/unipam-phishing-test/requests/expected-target";


export async function getData(categoryId: string) {

  const { targets } = await TargetServices.getTargetByCategoryId(categoryId);
  const { accessLog } = await AccessLogServices.getAccessLogByCategoryId(categoryId);
  const { expectedTarget } = await ExpectedTargetServices.getExpectedTargetByCategoryId(categoryId);

  return {
    targets,
    accessLog,
    expectedTarget,
    lastUpdated: new Date(),
  }
}

export async function getCategories() {
  const { categories } = await TestCategoryServices.getAll();
  
  return categories;
}
