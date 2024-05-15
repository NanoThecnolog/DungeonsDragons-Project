import { Request, Response } from "express";
import { DetailCharService } from "../../services/chars/DetailCharService";

class DetailCharController {
    async handle(req: Request, res: Response) {

        try {
            const char_id = req.query.char_id as string;

            if (!char_id) {
                return res.status(400).json({ error: "Nenhum personagem foi informado" });
            }

            console.log(char_id);

            const detailCharService = new DetailCharService();

            const char = await detailCharService.execute({
                char_id
            });

            return res.json(char)

        } catch (err) {
            console.log("Erro ao obter dados do personagem", err);
            return res.status(500).json({ error: "Erro ao obter dados do personagem" })

        }


    }
}

export { DetailCharController }
