import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';

import cors from "cors";

import { router } from "./routes";


const app = express();

app.use(express.json())
//para permitir qualquer url fazer requisição ao server.
app.use(cors());

app.use(router);

//middleware para tratativas de erros

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {

        //se for instancia tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error!'
    })
})

app.listen(3333, () => console.log("Servidor D&D online"))