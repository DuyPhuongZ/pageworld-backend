import { NextFunction, Request, Response } from "express";
import userServices from "../services/user.service";

const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("here");
        const users = await userServices.getListUsers();
        res.status(200).json({
            success: true,
            data: users,
        })
    } catch (error) {
        next(error);
    }
}

const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await userServices.getUserById(+id);
        if (user) {
            res.status(200).json({
                success: true,
                data: user
            })
        } else {
            res.status(404).json({
                success: false,
                error: "User is not found"
            })
        }
    } catch (error) {
        next(error);
    }
}

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, fullName, phone, roleCode } = req.body;
        const data = { email, password, fullName, phone, roleCode };

        const result = await userServices.createUser(data);
        if (result) {
            res.status(201).json({
                success: true,
                data: result
            })
        }
    } catch (error: any) {
        next(error)
    }
    return;
}

const deleteUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const result = await userServices.deleteUserById(+id);
        if (result) {
            const { email, fullName } = result;
            res.status(200).json({
                success: true,
                data: {
                    email,
                    fullName
                }
            })
        }
    } catch (error) {
        next(error)
    }
}

const deactiveUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await userServices.deactiveUserById(+id);
        res.status(200).json({
            success: true,
            message: "Deactive successfully",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };
        const result = await userServices.updateUserById(+id, updatedData);
        res.status(200).json({
            success: true,
            message: "Updated successfully",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

export {
    getUsersController,
    getUserByIdController,
    createUserController,
    deleteUserByIdController,
    updateUserById,
    deactiveUserByIdController
}