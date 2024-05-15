import prismaClient from "../../prisma";

interface CharClass {
    level: string;
    name: string;
}

interface CharRequest {
    name: string;
    race: string;
    char_class: CharClass[];
    level_class: string[];
    background: string;
    story: string;
    userId: string;

}

class CreateCharService {
    async execute({
        name,
        race,
        char_class,
        level_class,
        background,
        story,
        userId,
    }: CharRequest) {

        if (!name || !race || !char_class.length || !level_class.length || !background || !story) {
            throw new Error('Campos vazios')
        }

        const char = await prismaClient.char.create({
            data: {
                name: name,
                race: race,
                char_class: {
                    createMany: {
                        data: char_class.map(({ level, name }) => ({ level, name }))
                    }
                },
                level_class: {
                    set: level_class
                },
                background: background,
                story: story,
                userId: userId

            },
            select: {
                id: true,
                name: true,
                race: true,
                char_class: true,
                level_class: true,
            }
        })


        return char;


    }
}

export { CreateCharService };