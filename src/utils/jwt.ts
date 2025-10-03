import jwt from 'jsonwebtoken';

const signToken = (payload: any) => {
    const expiresIn = payload.token_type === "access_token" ? "15m" : "7d";
    return jwt.sign(payload, "duyphuongz", { algorithm: 'HS256', expiresIn });
}

const verifyToken = (token: string) => {
    return jwt.verify(token, "duyphuongz");
}

export {
    signToken,
    verifyToken
}