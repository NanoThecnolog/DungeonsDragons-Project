import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //verificar o token e autenticar o usuario
    const authToken = req.headers.authorization;

    if (!authToken) {
        console.log("Middleware acusando que Token não fornecido.")
        return res.status(401).end();

    }

    const [, token] = authToken.split(" ")

    try {
        //validando o token extraido acima com metodo js split
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        //aqui recupera o id do token e coloca dentro da variavel user_id dentro do req.        
        req.user_id = sub.toString();
        return next();
    } catch (err) {
        console.log('erro no try do middleware. verificação do token com problema: ', err)
        // return res.status(401).end();
        return res.status(401).json({ error: "Token inválido" })
    }


}