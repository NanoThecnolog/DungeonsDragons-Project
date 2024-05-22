-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "race" TEXT NOT NULL,
    "background" TEXT,
    "story" TEXT,
    "image" TEXT,
    "spells" TEXT[],
    "con" TEXT NOT NULL DEFAULT '0',
    "str" TEXT NOT NULL DEFAULT '0',
    "dex" TEXT NOT NULL DEFAULT '0',
    "int" TEXT NOT NULL DEFAULT '0',
    "wis" TEXT NOT NULL DEFAULT '0',
    "cha" TEXT NOT NULL DEFAULT '0',
    "wealth" TEXT NOT NULL DEFAULT '-',
    "max_hp" TEXT NOT NULL DEFAULT '-',
    "current_hp" TEXT NOT NULL DEFAULT '-',
    "temporary_hp" TEXT NOT NULL DEFAULT '-',
    "experience" TEXT NOT NULL DEFAULT '0',
    "armor_class" TEXT NOT NULL DEFAULT '10',
    "ideals" TEXT NOT NULL DEFAULT '0',
    "bonds" TEXT[],
    "flaws" TEXT[],
    "features" TEXT[],
    "traits" TEXT[],
    "death_saving_throws" TEXT,
    "allies" TEXT[],
    "proficiency_bonus" TEXT,
    "death_resistance" BOOLEAN NOT NULL DEFAULT false,
    "personality_traits" TEXT[],
    "languages" TEXT[],
    "Initiative" TEXT NOT NULL DEFAULT '-',
    "cantrips" TEXT[],
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "char_classes" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "charId" TEXT NOT NULL,

    CONSTRAINT "char_classes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "chars" ADD CONSTRAINT "chars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "char_classes" ADD CONSTRAINT "char_classes_charId_fkey" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
