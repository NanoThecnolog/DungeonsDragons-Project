/*
  Warnings:

  - The primary key for the `chars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `chars` table. All the data in the column will be lost.
  - The required column `char_id` was added to the `chars` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "chars" DROP CONSTRAINT "chars_pkey",
DROP COLUMN "id",
ADD COLUMN     "char_id" TEXT NOT NULL,
ADD CONSTRAINT "chars_pkey" PRIMARY KEY ("char_id");
