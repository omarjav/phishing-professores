-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Target" (
    "targetId" TEXT NOT NULL,
    "username" VARCHAR(150) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("targetId")
);

-- CreateTable
CREATE TABLE "AccessLog" (
    "logId" TEXT NOT NULL,
    "ip" VARCHAR(100) NOT NULL,
    "device" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "targetId" TEXT,
    "hash" TEXT,

    CONSTRAINT "AccessLog_pkey" PRIMARY KEY ("logId")
);

-- CreateTable
CREATE TABLE "ExpectedTarget" (
    "hash" VARCHAR(20) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExpectedTarget_pkey" PRIMARY KEY ("hash")
);

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Target"("targetId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_hash_fkey" FOREIGN KEY ("hash") REFERENCES "ExpectedTarget"("hash") ON DELETE SET NULL ON UPDATE CASCADE;
