import { Request, Response } from "express";
import { EditCharService } from "../../services/chars/EditCharService";


class EditCharController {
    async handle(req: Request, res: Response) {
        try {
            const {
                id,
                name,
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
                char_class,
                background,
                story,
                current_hp,
                max_hp,
                experience,
                notes
            } = req.body;

            const editCharService = new EditCharService();

            const editChar = await editCharService.execute({
                id,
                name,
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
                char_class,
                background,
                story,
                current_hp,
                max_hp,
                experience,
                notes
            });

            console.log(`dados do personagem do id ${id} editados`)

            return res.json(editChar);

        } catch (err) {
            console.log("ocorreu um erro", err);
            return res.status(500).json({ error: "Ocorreu um erro ao editar o personagem" });
        }






    }

}

export { EditCharController };