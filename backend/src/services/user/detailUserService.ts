import prismaClient from "../../prisma";


class DetailUserService {
    async execute(user_id: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                char_limit: true
            }
        })
        //console.log(user_id);

        return user

    }
}

export { DetailUserService }