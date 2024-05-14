import prismaClient from "../../prisma";

class RemoveUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.delete({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return user
    }
}
export { RemoveUserService }