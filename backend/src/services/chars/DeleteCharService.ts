import prismaClient from "../../prisma";
import fs from 'fs';
import path from 'path'

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
            if (char.image) {

                const imagePath = path.resolve(__dirname, '..', '..', '..', 'tmp', char.image);
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.error(`Erro ao deletar o arquivo de imagem ${char.image}:`, err);
                    } else {
                        console.log(`Arquivo de imagem ${char.image} deletado com sucesso`);
                    }
                });
            }

            console.log(`Personagem ${id} deletado`)
            return char;


        } catch (err) {
            throw new Error(`Erro ao excluir personagem ${id}`)

        }




    }
}

export { DeleteCharService }