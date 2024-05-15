/*
  Warnings:

  - The `bonds` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `flaws` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `features` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `traits` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `allies` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `personality_traits` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `languages` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `char_class` column on the `chars` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "bonds",
ADD COLUMN     "bonds" TEXT[],
DROP COLUMN "flaws",
ADD COLUMN     "flaws" TEXT[],
DROP COLUMN "features",
ADD COLUMN     "features" TEXT[],
DROP COLUMN "traits",
ADD COLUMN     "traits" TEXT[],
DROP COLUMN "allies",
ADD COLUMN     "allies" TEXT[],
DROP COLUMN "personality_traits",
ADD COLUMN     "personality_traits" TEXT[],
DROP COLUMN "languages",
ADD COLUMN     "languages" TEXT[],
DROP COLUMN "char_class",
ADD COLUMN     "char_class" TEXT[];
