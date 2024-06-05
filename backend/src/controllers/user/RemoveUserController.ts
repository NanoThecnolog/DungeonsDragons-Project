import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {
    async handle(req: Request, res: Response) {

        const userId = req.query.user_id as string

        const removeUserService = new RemoveUserService();

        const user = await removeUserService.execute(userId)

        console.log("Removendo usuário")
        return res.json(user);


    }
}

export { RemoveUserController }