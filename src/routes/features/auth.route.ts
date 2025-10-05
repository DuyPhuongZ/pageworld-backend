import express from 'express'
import { loginController, registerController } from '../../controllers/auth.controller';
import { loginValidator, registerValidator } from '../../middlewares/auth.middleware';

const authRouter = express.Router();

authRouter.post("/login", loginValidator, loginController);
// authRouter.post("/logout", LogoutController);
authRouter.post("/register", registerValidator, registerController);
authRouter.post("/reset-password");
// authRouter.post("/forgot-password");


export default authRouter