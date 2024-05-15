import prismaClient from "../../prisma";

interface CharIdRequest {
    id: string;
}

class DeleteCharService {
    async execute({ id }: CharIdRequest) {
        try {

            await prismaClient.$transaction([
                prismaClient.charClass.deleteMany({
                    where: {
                        charId: id
                    }
                })
            ])
            const char = await prismaClient.char.delete({
                where: {
                    id: id
                }
            })

            console.log(`Personagem ${id} deletado`)
            return char;


        } catch (err) {
            throw new Error(`Erro ao excluir personagem ${id}`)

        }




    }
}

export { DeleteCharService }