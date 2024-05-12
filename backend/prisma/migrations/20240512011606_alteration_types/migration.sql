/*
  Warnings:

  - The primary key for the `chars` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "chars" DROP CONSTRAINT "chars_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "chars_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "chars_id_seq";
