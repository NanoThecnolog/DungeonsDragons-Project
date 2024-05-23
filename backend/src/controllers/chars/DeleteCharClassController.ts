import { Request, Response } from "express";
import { DeleteCharClassService } from "../../services/chars/DeleteCharClassService";

class DeleteCharClassController {
    async handle(req: Request, res: Response) {
        const charClassId = req.query.charClassId as string;

        const deleteCharClassService = new DeleteCharClassService();

        const charClass = await deleteCharClassService.execute({
            charClassId
        })
        return res.json(charClass);
    }
}

export { DeleteCharClassController };