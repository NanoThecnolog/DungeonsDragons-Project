/*
  Warnings:

  - The `level_class` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "level_class",
ADD COLUMN     "level_class" TEXT[];
