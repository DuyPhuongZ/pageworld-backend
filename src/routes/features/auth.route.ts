import express from 'express'
import { loginController, LogoutController, registerController } from '../../controllers/auth.controller';

const authRouter = express.Router();

authRouter.post("/login", loginController);
// authRouter.post("/logout", LogoutController);
authRouter.post("/register", registerController);
// authRouter.post("/reset-password");
// authRouter.post("/forgot-password");


export default authRouter