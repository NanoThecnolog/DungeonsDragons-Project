import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    user_id: string,
    password: string,
    avatar: string

}


class UpdateUserService {
    async execute({ user_id, password, avatar }: UserRequest) {

        if (!password || !avatar) {
            throw new Error("dados vazios")
        }



        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                password: passwordHash,
                avatar: avatar
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        console.log(user_id)
        return user;

    }


}

export { UpdateUserService }