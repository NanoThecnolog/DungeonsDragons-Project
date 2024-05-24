import prismaClient from "../../prisma";

interface CharRequest {
    char_id: string
}


class DetailCharService {
    async execute({ char_id }: CharRequest) {

        const char = await prismaClient.char.findFirst({
            where: {
                id: char_id
            }

        })
        const charClass = await prismaClient.charClass.findMany({
            where: {
                charId: char_id
            }
        })

        return { char, charClass }

    }
}

export { DetailCharService }