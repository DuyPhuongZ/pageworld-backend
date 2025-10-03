import bcrypt from "bcrypt";

const getTimeNow = () => {
    return new Date().toISOString();
}

const hashPassword = async (plainPassword: string) => {
    const saltRounds = 10;
    const result = await bcrypt.hash(plainPassword, saltRounds);
    return result;
}

const verifyPassword = async (plainPassword: string, passwordEncrypted: string) => {
    return await bcrypt.compare(plainPassword, passwordEncrypted);
}

export {
    getTimeNow,
    hashPassword,
    verifyPassword
}