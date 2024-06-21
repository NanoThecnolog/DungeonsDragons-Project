import prismaClient from "../../prisma";

interface CharClass {
    id?: string;
    index: string;
    level: string;
    name: string;
}
interface NoteRequest {
    id?: string;
    text: string;
    date?: Date;
}

interface CharRequest {
    id: string
    name?: string
    title?: string
    con?: string
    str?: string
    dex?: string
    int?: string
    wis?: string
    cha?: string
    ideals?: string
    bonds?: string[]
    flaws?: string[]
    features?: string[]
    traits?: string[]
    allies?: string[]
    personality_traits?: string[]
    languages?: string[]
    Initiative?: string
    cantrips?: string[]
    spells?: string[]
    char_class?: CharClass[]
    background?: string
    story?: string
    current_hp?: string
    max_hp?: string
    experience?: string
    notes?: NoteRequest[]
}

class EditCharService {
    async execute({
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
    }: CharRequest) {
        await prismaClient.$transaction(async (prisma) => {

            const char = await prisma.char.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    title,
                    con,
                    str,
                    dex,
                    int,
                    wis,
                    cha,
                    ideals,
                    bonds: bonds && {
                        set: bonds
                    },
                    flaws: flaws && {
                        set: flaws
                    },
                    features: features && {
                        set: features
                    },
                    traits: traits && {
                        set: traits
                    },
                    allies: allies && {
                        set: allies
                    },
                    personality_traits: personality_traits && {
                        set: personality_traits
                    },
                    languages: languages && {
                        set: languages
                    },
                    Initiative,
                    cantrips: cantrips && {
                        set: cantrips
                    },
                    spells: spells && {
                        set: spells
                    },
                    background,
                    story,
                    current_hp,
                    max_hp,
                    experience,


                }
            });

            if (char_class) {
                for (const charClass of char_class) {
                    if (charClass.id) {

                        await prisma.charClass.update({
                            where: { id: charClass.id },
                            data: {
                                index: charClass.index,
                                level: charClass.level,
                                name: charClass.name,
                            },
                        });
                    } else {

                        await prisma.charClass.create({
                            data: {
                                index: charClass.index,
                                level: charClass.level,
                                name: charClass.name,
                                charId: id,
                            },
                        });
                    }
                }
            }
            if (notes) {
                for (const note of notes) {
                    if (note.id) {
                        await prisma.note.update({
                            where: { note_id: note.id },
                            data: {
                                text: note.text,
                                date: note.date || new Date(),
                                char_note_id: id,
                            },
                        });
                    } else {
                        await prisma.note.create({
                            data: {
                                text: note.text,
                                date: note.date || new Date(),
                                char_note_id: id,
                            },
                        });
                    }
                }
            }
            //console.log(char);
            return char;
        });


    }
}

export { EditCharService }