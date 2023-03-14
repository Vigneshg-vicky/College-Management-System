import { AuthServiceReturn } from "../../frameworks/services/authServices";

export const authServiceInterface = (service:AuthServiceReturn) => {
    const encryptPassword = (password:string) => service.encryptPassword(password);
    const verifyToken = (password:string) => service.verifyToken(password);
    const comparePassword = (password:string,hashedPassword:string) => service.comparePassword(password,hashedPassword);
    const generateToken = (payload:string) => service.generateToken(payload)

    return {
        encryptPassword,
        verifyToken,
        comparePassword,
        generateToken,
    }

}

export type AuthServiceInterface = typeof authServiceInterface;