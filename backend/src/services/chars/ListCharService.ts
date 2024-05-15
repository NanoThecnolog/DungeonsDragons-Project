import prismaClient from "../../prisma";


class ListCharService {
    async execute(userid: string) {

        const listCharsByUser = await prismaClient.char.findMany({
            where: {
                userId: userid
            },
            select: {
                id: true,
                name: true,
                title: true,
                race: true,
                char_class: true,
                level_class: true,
                image: true
            }
        })
        return listCharsByUser;

    }
}

export { ListCharService }
