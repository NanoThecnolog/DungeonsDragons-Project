import { Request, Response } from "express";
import { CreateCharService } from "../../services/chars/CreateCharService";

class CreateCharController {
    async handle(req: Request, res: Response) {

        const {
            name,
            race,
            char_class,
            level_class,
            background,
            story,
            userId


        } = req.body;


        const createCharService = new CreateCharService();
        const char = await createCharService.execute({
            name,
            race,
            char_class,
            level_class,
            background,
            story,
            userId
        });

        return res.json(char);
    }

}

export { CreateCharController }