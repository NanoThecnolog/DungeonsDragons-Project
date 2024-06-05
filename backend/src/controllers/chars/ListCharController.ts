import { Request, Response } from "express";
import { ListCharService } from "../../services/chars/ListCharService";


class ListCharController {
    async handle(req: Request, res: Response) {

        const userId = req.user_id

        const listCharService = new ListCharService();

        const chars = await listCharService.execute(userId);

        console.log(`Listando personagens do userId ${userId}`)
        return res.json(chars)


    }
}

export { ListCharController }