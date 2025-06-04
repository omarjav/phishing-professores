-- AlterTable
ALTER TABLE "AccessLog" ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TestCategory"("categoryId") ON DELETE SET NULL ON UPDATE CASCADE;
