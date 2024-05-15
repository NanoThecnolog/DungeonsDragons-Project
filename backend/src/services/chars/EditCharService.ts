import prismaClient from "../../prisma";

interface CharClass {
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
        char_class
    }: CharRequest) {

        const char = await prismaClient.char.update({
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
                char_class: char_class && {
                    createMany: {
                        data: char_class.map(({ level, name }) => ({ level, name }))
                    }
                }

            }
        })

        console.log(char);

        return char;

    }
}

export { EditCharService }