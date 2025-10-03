import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import RestResponseBody from '../model/restResponseBody';

const checkSchema = (zodSchema: z.ZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await zodSchema.parse(req.body);
            next();
        } catch (e) {
            if (e instanceof z.ZodError) {
                const zodErrors = e.issues;
                const result = zodErrors.map((error) => {
                    const path = String(error.path[0]);
                    const errorMessage = String(error.message.split(":")[1].trim());
                    return `${path}: ${errorMessage}`;
                })
                res.status(422).json(new RestResponseBody({
                    success: false,
                    message: "VALIDATION FAILED",
                    data: null,
                    error: result
                }));
            }
        }
    }
}

export {
    checkSchema
}