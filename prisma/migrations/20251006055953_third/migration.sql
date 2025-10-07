/*
  Warnings:

  - You are about to drop the column `email` on the `jobs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."jobs_email_key";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "email";
