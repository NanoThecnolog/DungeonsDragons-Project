import { Request, Response } from "express";
import { DeleteCharService } from "../../services/chars/DeleteCharService";

class DeleteCharController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const removeCharService = new DeleteCharService();

        const char = await removeCharService.execute({
            id
        })
        return res.json(char)

    }
}

export { DeleteCharController }