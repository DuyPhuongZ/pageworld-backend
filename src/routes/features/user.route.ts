import express from 'express'
import { createUserController, deactiveUserByIdController, deleteUserByIdController, getUserByIdController, getUsersController, updateUserById } from '../../controllers/user.controller';

const userRouter = express.Router();

userRouter.get("/", getUsersController);

userRouter.post("/", createUserController);

userRouter.get("/:id", getUserByIdController);

userRouter.delete("/:id", deleteUserByIdController);

userRouter.put("/:id", updateUserById);

userRouter.put("/user/:id/deactive", deactiveUserByIdController);


export default userRouter