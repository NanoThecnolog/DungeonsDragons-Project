import { Request, Response } from "express";
import { DeleteCharService } from "../../services/chars/DeleteCharService";

class DeleteCharController {
    async handle(req: Request, res: Response) {
        try {
            const id = req.query.id as string;

            if (!id) {
                return res.status(400).json({ error: "Nenhum personagem foi informado" });
            }

            const removeCharService = new DeleteCharService();

            const char = await removeCharService.execute({
                id
            })
            console.log(`Deletando personagem id ${id}`)
            return res.json(char)

        } catch (err) {
            console.log("erro ao deletar o personagem")
            return res.status(500).json({ error: "Ocorreu um erro ao deletar o personagem" });
        }


    }
}

export { DeleteCharController }