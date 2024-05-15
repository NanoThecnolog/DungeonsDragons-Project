import { Request, Response } from "express";
import { DeleteCharService } from "../../services/chars/DeleteCharService";

class DeleteCharController {
    async handle(req: Request, res: Response) {
        try {
            const id = req.query.id as string;

            const removeCharService = new DeleteCharService();

            const char = await removeCharService.execute({
                id
            })
            return res.json(char)

        } catch (err) {
            console.log("erro ao deletar o personagem")
            return res.status(500).json({ error: "Ocorreu um erro ao deletar o personagem" });
        }


    }
}

export { DeleteCharController }