import { Request, Response } from "express";
import { EditCharService } from "../../services/chars/EditCharService";


class EditCharController {
    async handle(req: Request, res: Response) {
        try {
            const {
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
                cantrips,
                spells,
                char_class
            } = req.body;

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
                cantrips,
                spells,
                char_class
            });

            console.log(`dados do personagem: ${id} editados`)

            return res.json(editChar);

        } catch (err) {
            console.log("ocorreu um erro", err);
            return res.status(500).json({ error: "Ocorreu um erro ao editar o personagem" });
        }






    }

}

export { EditCharController };