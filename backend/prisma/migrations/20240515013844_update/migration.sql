/*
  Warnings:

  - The `spells` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantrips` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "spells",
ADD COLUMN     "spells" TEXT[],
DROP COLUMN "cantrips",
ADD COLUMN     "cantrips" TEXT[];
