/*
  Warnings:

  - You are about to drop the `spells` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_charId_fkey";

-- AlterTable
ALTER TABLE "chars" ADD COLUMN     "spells" TEXT[];

-- DropTable
DROP TABLE "spells";
