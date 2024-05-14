import prismaClient from "../../prisma";

interface CharIdRequest {
    id: string;
}

class DeleteCharService {
    async execute({ id }: CharIdRequest) {

        const char = await prismaClient.char.delete({
            where: {
                id: id
            }
        })
        return char;


    }
}

export { DeleteCharService }