/*
  Warnings:

  - Added the required column `categoryId` to the `ExpectedTarget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpectedTarget" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Target" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TestCategory" (
    "categoryId" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TestCategory_pkey" PRIMARY KEY ("categoryId")
);

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TestCategory"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpectedTarget" ADD CONSTRAINT "ExpectedTarget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TestCategory"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
