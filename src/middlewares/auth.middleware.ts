import { NextFunction, Request, Response } from "express";
import z, { string } from 'zod';
import { loginValidation, registerValidation } from "../validation/zod";
import RestResponseBody from "../model/restResponseBody";
import { checkSchema } from "../utils/zodValidator";


const registerValidator = checkSchema(registerValidation);

const loginValidator = checkSchema(loginValidation);

export {
    registerValidator,
    loginValidator
}