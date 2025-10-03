import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../model/error";
import RestResponseBody from "../model/restResponseBody";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorWithStatus) {
        res.status(err.status).json(new RestResponseBody({
            success: false,
            message: err.message,
            data: null,
            error: err
        }));
    }
}

export default errorHandler