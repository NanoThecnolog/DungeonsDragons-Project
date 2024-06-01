-- AlterTable
ALTER TABLE "chars" ADD COLUMN     "skills" TEXT[];

-- CreateTable
CREATE TABLE "char_notes" (
    "note_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "char_note_id" TEXT NOT NULL,

    CONSTRAINT "char_notes_pkey" PRIMARY KEY ("note_id")
);

-- AddForeignKey
ALTER TABLE "char_notes" ADD CONSTRAINT "char_notes_char_note_id_fkey" FOREIGN KEY ("char_note_id") REFERENCES "chars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
