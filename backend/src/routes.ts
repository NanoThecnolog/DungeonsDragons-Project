import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCharController } from "./controllers/chars/CreateCharController";
import { EditCharController } from "./controllers/chars/EditCharController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Rotas do usuario
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/me', isAuthenticated, new UpdateUserController().handle)

//Rotas do personagem
router.post('/char', isAuthenticated, new CreateCharController().handle)
//editar
router.put('/char', isAuthenticated, new EditCharController().handle)
//excluir?


export { router };