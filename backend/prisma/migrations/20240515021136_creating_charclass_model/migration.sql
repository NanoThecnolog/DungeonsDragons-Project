/*
  Warnings:

  - You are about to drop the column `char_class` on the `chars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "char_class";

-- CreateTable
CREATE TABLE "char_classes" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "charId" TEXT NOT NULL,

    CONSTRAINT "char_classes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "char_classes" ADD CONSTRAINT "char_classes_charId_fkey" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
