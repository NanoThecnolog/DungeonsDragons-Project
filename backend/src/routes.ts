import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCharController } from "./controllers/chars/CreateCharController";
import { EditCharController } from "./controllers/chars/EditCharController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteCharController } from "./controllers/chars/DeleteCharController";
import { DetailCharController } from "./controllers/chars/DetailCharController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { ListCharController } from "./controllers/chars/ListCharController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Rotas do usuario
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/update', isAuthenticated, new UpdateUserController().handle)
router.delete('/remove/user', isAuthenticated, new RemoveUserController().handle)

//Rotas do personagem
router.post('/char', isAuthenticated, new CreateCharController().handle)
router.get('/char/detail', isAuthenticated, new DetailCharController().handle)
router.put('/char', isAuthenticated, new EditCharController().handle)//colocar upload.single(file) após criar a lógica de envio de imagem
router.get('/char/list', isAuthenticated, new ListCharController().handle)
router.delete('/char', isAuthenticated, new DeleteCharController().handle)//passa o id como parametro no user_id



export { router };