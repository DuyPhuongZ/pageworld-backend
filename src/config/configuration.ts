import express, { urlencoded, Express } from "express";

const configurationApp = (app: any) => {
    //req.body config
    app.use(express.json());
    app.use(urlencoded({ extended: true }));
}

export default configurationApp; 