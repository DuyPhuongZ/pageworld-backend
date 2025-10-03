import { prisma } from "../config/prismaClient";
import { signToken } from "../utils/jwt";
import { getTimeNow, hashPassword, verifyPassword } from "../utils/utils";

class AuthServices {
    async signAccessToken(data: any) {
        const payload = {
            data: data,
            token_type: "access_token"
        }
        return signToken(payload);
    }

    async signRefreshToken(data: any) {
        const payload = {
            data: data,
            token_type: "refresh_token"
        }
        return signToken(payload);
    }

    async login({ email, password }: { email: string, password: string }) {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("Login Failed");
        }

        if (!(await verifyPassword(password, user.password))) {
            return new Error("Login failed");
        }

        const payload = {
            email: user.email,
            roleId: user.roleId
        }

        const [access_token, refresh_token] = await Promise.all([this.signAccessToken(payload), this.signRefreshToken(payload)]);
        return {
            user: payload,
            access_token,
            refresh_token
        }
    };

    async register(data: any) {
        const { fullName, email, password, confirmPassword } = data;

        const isEmailExist = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (isEmailExist) {
            throw new Error("Email is already used");
        }

        if (password !== confirmPassword) {
            throw new Error("Password and Confirm Password is not matched");
        }

        const passwordEncrypted = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                email: email,
                password: passwordEncrypted,
                fullName: fullName,
                roleId: 3,
                status: "active",
                createdAt: getTimeNow(),
                updatedAt: getTimeNow()
            },
            select: {
                id: true,
                email: true,
                roleId: true
            }
        })

        const payload = {
            ...user
        }

        const [access_token, refresh_token] = await Promise.all([this.signAccessToken(payload), this.signRefreshToken(payload)]);
        console.log(access_token);
        console.log(refresh_token);

        return {
            user,
            access_token,
            refresh_token
        };
    }
}

const authServices = new AuthServices();
export default authServices;

