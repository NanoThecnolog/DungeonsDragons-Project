import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"; //geração do token

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //verificar se o email existe

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Usuário ou senha incorreto, tente novamente.')
        }

        //verificar a senha

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('Usuário ou senha incorreto, tente novamente')
        }

        //gerar token JWT
        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )
        console.log("Autenticando usuário.")
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
            char_limit: user.char_limit
        }


    }
}

export { AuthUserService }