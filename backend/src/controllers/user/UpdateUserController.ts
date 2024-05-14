import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";


class UpdateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { id, password, avatar } = req.body;
            const user_id = req.user_id;

            const updateUserService = new UpdateUserService();

            const updateUser = await updateUserService.execute({
                user_id,
                password,
                avatar

            })

            console.log(`Dados do usuario ${user_id} atualizados.`)

            return res.json(updateUser);


        } catch (err) {
            console.log("erro ao atualizar dados.")
        }

    }
}

export { UpdateUserController }