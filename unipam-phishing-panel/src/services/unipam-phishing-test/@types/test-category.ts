export type TestCategory = {
  categoryId: string;
  name: string;
  active: boolean;
  createdAt: string;
}

export type TestCategoryResponse = {
  categories: TestCategory[];
}