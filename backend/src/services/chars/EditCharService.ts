import prismaClient from "../../prisma";

interface CharRequest {
    id: string,
    title: string,
    con: string,
    str: string,
    dex: string,
    int: string,
    wis: string,
    cha: string,
    ideals: string,
    bonds: string,
    flaws: string,
    features: string,
    traits: string,
    allies: string,
    personality_traits: string,
    languages: string,
    Initiative: string,
    cantrips: string,
}

class EditCharService {
    async execute({ id, title, con, str, dex, int, wis, cha, ideals, bonds, flaws, features, traits, allies, personality_traits, languages, Initiative, cantrips }: CharRequest) {

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
                bonds,
                flaws,
                features,
                traits,
                allies,
                personality_traits,
                languages,
                Initiative,
                cantrips,
            }
        })

        console.log(char);

        return char;

    }
}

export { EditCharService }