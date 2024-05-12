/*
  Warnings:

  - You are about to drop the column `class` on the `chars` table. All the data in the column will be lost.
  - Added the required column `char_class` to the `chars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "class",
ADD COLUMN     "char_class" TEXT NOT NULL;
