import prismaClient from "../../prisma";

interface CharClassRequest {
    charClassId: string
}


class DeleteCharClassService {
    async execute({ charClassId }: CharClassRequest) {

        const charClass = await prismaClient.charClass.delete({
            where: {
                id: charClassId
            }

        })

        return charClass

    }
}

export { DeleteCharClassService }