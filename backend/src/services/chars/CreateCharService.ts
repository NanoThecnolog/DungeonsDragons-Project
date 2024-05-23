import prismaClient from "../../prisma";

interface CharClass {
    level: string;
    name: string;
}

interface CharRequest {
    name: string;
    race: string;
    char_class: CharClass[];
    userId: string;
    image: string;

}

class CreateCharService {
    async execute({
        name,
        race,
        char_class,
        userId,
        image,
    }: CharRequest) {

        if (!name || !race) {
            throw new Error('Campos vazios')
        }
        if (!char_class || !Array.isArray(char_class)) {
            throw new Error('Invalid char_class data');
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
                userId: userId,
                image: image,

            },
            select: {
                id: true,
                name: true,
                race: true,
                char_class: true,
                image: true,

            }
        })


        return char;


    }
}

export { CreateCharService };