import { NextFunction, Request, Response } from "express";
import authServices from "../services/auth.service";

const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const result = await authServices.login({ email, password });
        return res.status(200).json({
            success: true,
            ...result
        })
    } catch (error) {
        next(error);
    }
}

const LogoutController = (req: Request, res: Response) => {

}

const registerController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;
        const result = await authServices.register({
            fullName,
            email,
            password,
            confirmPassword,
        });
        res.status(201).json({
            success: true,
            message: "Register successfully",
            ...result
        });
    } catch (error) {
        next(error);
    }
}

export {
    loginController,
    LogoutController,
    registerController
}