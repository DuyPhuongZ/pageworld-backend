import { NextFunction, Request, Response } from "express";
import z, { string } from 'zod';
import { registerValidation } from "../validation/zod";
import RestResponseBody from "../model/restResponseBody";
import { checkSchema } from "../utils/validation";


const registerValidator = checkSchema(registerValidation);

const loginValidator = checkSchema(registerValidation);

export {
    registerValidator
}