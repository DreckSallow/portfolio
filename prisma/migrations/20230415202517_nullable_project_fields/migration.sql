/*
  Warnings:

  - You are about to drop the column `admin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `writer` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIND');

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "video" DROP NOT NULL,
ALTER COLUMN "repository" DROP NOT NULL,
ALTER COLUMN "demo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "admin",
DROP COLUMN "writer",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
