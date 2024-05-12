import { Request, Response } from "express";
import { EditCharService } from "../../services/chars/EditCharService";


class EditCharController {
    async handle(req: Request, res: Response) {
        try {
            const { id, title, con, str, dex, int, wis, cha, ideals, bonds, flaws, features, traits, allies, personality_traits, languages, Initiative, cantrips } = req.body;

            const editCharService = new EditCharService();

            const editChar = await editCharService.execute({
                id,
                title,
                con,
                str,
                dex,
                int,
                wis,
                cha,
                ideals,
                bonds,
                flaws,
                features,
                traits,
                allies,
                personality_traits,
                languages,
                Initiative,
                cantrips
            });

            console.log("ok")

            return res.json(editChar);

        } catch (err) {
            console.log("ocorreu um erro", err);
        }






    }

}

export { EditCharController };