-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chars" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level_class" INTEGER NOT NULL,
    "background" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "spells" TEXT NOT NULL,
    "con" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "wis" INTEGER NOT NULL,
    "cha" INTEGER NOT NULL,
    "wealth" INTEGER NOT NULL,
    "max_hp" INTEGER NOT NULL,
    "current_hp" INTEGER NOT NULL,
    "temporary_hp" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "armor_class" INTEGER NOT NULL,
    "ideals" TEXT NOT NULL,
    "bonds" TEXT NOT NULL,
    "flaws" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "traits" TEXT NOT NULL,
    "death_saving_throws" INTEGER NOT NULL,
    "allies" TEXT NOT NULL,
    "proficiency_bonus" INTEGER NOT NULL,
    "death_resistance" BOOLEAN NOT NULL,
    "personality_traits" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "Initiative" INTEGER NOT NULL,
    "cantrips" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "chars" ADD CONSTRAINT "chars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
