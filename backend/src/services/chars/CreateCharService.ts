import prismaClient from "../../prisma";

interface CharClass {
    index: string;
    level: string;
    name: string;
}
//alterar o charRequest pra receber os novos dados e adicionar ? aos antigos
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
                        data: char_class.map(({ index, level, name }) => ({ index, level, name }))
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
        console.log(`Personagem ${name} Criado`)


        return char;


    }
}

export { CreateCharService };