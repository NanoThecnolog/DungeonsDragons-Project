import { Request, Response } from "express";
import { CreateCharService } from "../../services/chars/CreateCharService";

class CreateCharController {
    async handle(req: Request, res: Response) {
        try {
            const {
                name,
                race,
                char_class,
                userId,
                image


            } = req.body;

            if (!Array.isArray(char_class) || char_class.some(item => typeof item !== 'object' || !item.level || !item.name)) {
                throw new Error('O campo char_class deve ser uma matriz de objetos com propriedades level e name');
            }


            const createCharService = new CreateCharService();
            const char = await createCharService.execute({
                name,
                race,
                char_class,
                userId,
                image
            });

            return res.json(char);

        } catch (err) {
            console.error("Erro ao criar personagem:", err);
            return res.status(400).json({ error: "Erro ao criar personagem" });
        }


    }

}

export { CreateCharController }