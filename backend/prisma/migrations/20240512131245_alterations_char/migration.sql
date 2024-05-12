-- AlterTable
ALTER TABLE "chars" ALTER COLUMN "level_class" SET DATA TYPE TEXT,
ALTER COLUMN "spells" DROP NOT NULL,
ALTER COLUMN "con" SET DEFAULT '0',
ALTER COLUMN "con" SET DATA TYPE TEXT,
ALTER COLUMN "str" SET DEFAULT '0',
ALTER COLUMN "str" SET DATA TYPE TEXT,
ALTER COLUMN "dex" SET DEFAULT '0',
ALTER COLUMN "dex" SET DATA TYPE TEXT,
ALTER COLUMN "int" SET DEFAULT '0',
ALTER COLUMN "int" SET DATA TYPE TEXT,
ALTER COLUMN "wis" SET DEFAULT '0',
ALTER COLUMN "wis" SET DATA TYPE TEXT,
ALTER COLUMN "cha" SET DEFAULT '0',
ALTER COLUMN "cha" SET DATA TYPE TEXT,
ALTER COLUMN "wealth" SET DEFAULT '-',
ALTER COLUMN "wealth" SET DATA TYPE TEXT,
ALTER COLUMN "max_hp" SET DEFAULT '-',
ALTER COLUMN "max_hp" SET DATA TYPE TEXT,
ALTER COLUMN "current_hp" SET DEFAULT '-',
ALTER COLUMN "current_hp" SET DATA TYPE TEXT,
ALTER COLUMN "temporary_hp" SET DEFAULT '-',
ALTER COLUMN "temporary_hp" SET DATA TYPE TEXT,
ALTER COLUMN "experience" DROP NOT NULL,
ALTER COLUMN "experience" SET DATA TYPE TEXT,
ALTER COLUMN "armor_class" SET DEFAULT '10',
ALTER COLUMN "armor_class" SET DATA TYPE TEXT,
ALTER COLUMN "ideals" SET DEFAULT '0',
ALTER COLUMN "bonds" DROP NOT NULL,
ALTER COLUMN "flaws" DROP NOT NULL,
ALTER COLUMN "features" DROP NOT NULL,
ALTER COLUMN "traits" DROP NOT NULL,
ALTER COLUMN "death_saving_throws" DROP NOT NULL,
ALTER COLUMN "death_saving_throws" SET DATA TYPE TEXT,
ALTER COLUMN "allies" DROP NOT NULL,
ALTER COLUMN "proficiency_bonus" DROP NOT NULL,
ALTER COLUMN "proficiency_bonus" SET DATA TYPE TEXT,
ALTER COLUMN "personality_traits" DROP NOT NULL,
ALTER COLUMN "languages" DROP NOT NULL,
ALTER COLUMN "Initiative" SET DEFAULT '-',
ALTER COLUMN "Initiative" SET DATA TYPE TEXT,
ALTER COLUMN "cantrips" DROP NOT NULL;
