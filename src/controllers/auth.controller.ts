import { NextFunction, Request, Response } from "express";
import authServices from "../services/auth.service";
import RestResponseBody from "../model/restResponseBody";

const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const result = await authServices.login({ email, password });
        return res.status(200).json(new RestResponseBody({
            success: true,
            message: "LOGIN SUCCESSFULLY",
            data: result,
            error: null
        }));
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

        res.status(201).json(new RestResponseBody({
            success: true,
            message: "REGISTER SUCCESSFULLY",
            data: result,
            error: null
        }));
    } catch (error) {
        next(error);
    }
}

export {
    loginController,
    LogoutController,
    registerController
}