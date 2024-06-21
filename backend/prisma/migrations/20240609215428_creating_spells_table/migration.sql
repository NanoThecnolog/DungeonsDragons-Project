/*
  Warnings:

  - You are about to drop the column `spells` on the `chars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "chars" DROP COLUMN "spells";

-- CreateTable
CREATE TABLE "spells" (
    "id" TEXT NOT NULL,
    "areaOfEffect" JSONB,
    "castingTime" TEXT NOT NULL DEFAULT '-',
    "components" TEXT[],
    "concentration" BOOLEAN NOT NULL,
    "description" TEXT[],
    "duration" TEXT,
    "higherLevel" TEXT[],
    "spellIndex" TEXT,
    "level" INTEGER NOT NULL,
    "material" TEXT,
    "name" TEXT,
    "spellRange" TEXT,
    "ritual" BOOLEAN,
    "schoolIndex" TEXT,
    "spellSubclasses" TEXT[],
    "url" TEXT,
    "charId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spells_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_charId_fkey" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
