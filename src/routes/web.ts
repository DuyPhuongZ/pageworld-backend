import express, { Express } from 'express'
import userRouter from './features/user.route';
import authRouter from './features/auth.route';

const router = express.Router();


const webRoutes = (app: Express) => {
    app.use("/users", userRouter);
    app.use("/auth", authRouter);
}

export default webRoutes; 