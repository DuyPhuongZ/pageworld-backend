import { prisma } from "../config/prismaClient";
import { getTimeNow } from "../utils/utils";


class UserServices {

    async getListUsers() {
        try {
            const users = await prisma.user.findMany();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id: number) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: id
                },
                include: {
                    role: true
                }
            })
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(data: any) {
        try {
            const { email, password, fullName, phone, roleCode } = data;
            const role = await prisma.role.findUnique({
                where: {
                    code: roleCode
                }
            });

            const result = await prisma.user.create({
                data: {
                    email: email,
                    password: password,
                    fullName: fullName,
                    phone: phone,
                    status: "active",
                    createdAt: getTimeNow(),
                    updatedAt: getTimeNow()
                }
            })
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    async deleteUserById(id: number) {
        try {
            const result = await prisma.user.delete({
                where: {
                    id: id
                }
            })
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateUserById(id: number, updatedDate: any) {
        try {
            const result = await prisma.user.update({
                where: {
                    id: id
                },
                data: {
                    ...updatedDate
                }
            })
            return result;
        } catch (error) {
            throw new Error("Updated user failed");
        }
    }

    async deactiveUserById(id: number) {
        try {
            const result = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    status: 'deactive'
                }
            })
            return result;
        } catch (error) {
            throw new Error("");
        }

    }
}

const userServices = new UserServices();
export default userServices