import { Request, Response } from "express";
import { DetailCharService } from "../../services/chars/DetailCharService";

class DetailCharController {
    async handle(req: Request, res: Response) {

        const char_id = req.query.char_id as string;

        console.log(char_id);

        const detailCharService = new DetailCharService();

        const char = await detailCharService.execute({
            char_id
        });

        return res.json(char)
    }
}

export { DetailCharController }
