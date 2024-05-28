import prismaClient from "../../prisma";

interface CharClass {
    id?: string;
    level: string;
    name: string;
}

interface CharRequest {
    id: string
    title?: string
    con?: string
    str?: string
    dex?: string
    int?: string
    wis?: string
    cha?: string
    ideals?: string
    bonds?: string[]
    flaws?: string[]
    features?: string[]
    traits?: string[]
    allies?: string[]
    personality_traits?: string[]
    languages?: string[]
    Initiative?: string
    cantrips?: string[]
    spells?: string[]
    char_class?: CharClass[]
    background?: string
    story?: string
}

class EditCharService {
    async execute({
        id,
        title,
        con,
        str,
        dex,
        int,
        wis,
        cha,
        ideals,
        bonds,
        flaws,
        features,
        traits,
        allies,
        personality_traits,
        languages,
        Initiative,
        cantrips,
        spells,
        char_class,
        background,
        story
    }: CharRequest) {
        await prismaClient.$transaction(async (prisma) => {

            const char = await prisma.char.update({
                where: {
                    id: id
                },
                data: {
                    title,
                    con,
                    str,
                    dex,
                    int,
                    wis,
                    cha,
                    ideals,
                    bonds: bonds && {
                        set: bonds
                    },
                    flaws: flaws && {
                        set: flaws
                    },
                    features: features && {
                        set: features
                    },
                    traits: traits && {
                        set: traits
                    },
                    allies: allies && {
                        set: allies
                    },
                    personality_traits: personality_traits && {
                        set: personality_traits
                    },
                    languages: languages && {
                        set: languages
                    },
                    Initiative,
                    cantrips: cantrips && {
                        set: cantrips
                    },
                    spells: spells && {
                        set: spells
                    },
                    background,
                    story

                }
            });

            if (char_class) {
                for (const charClass of char_class) {
                    if (charClass.id) {
                        // Atualizar entrada existente
                        await prisma.charClass.update({
                            where: { id: charClass.id },
                            data: {
                                level: charClass.level,
                                name: charClass.name,
                            },
                        });
                    } else {
                        // Criar nova entrada
                        await prisma.charClass.create({
                            data: {
                                level: charClass.level,
                                name: charClass.name,
                                charId: id,
                            },
                        });
                    }
                }
            }
            //console.log(char);
            return char;
        });


    }
}

export { EditCharService }