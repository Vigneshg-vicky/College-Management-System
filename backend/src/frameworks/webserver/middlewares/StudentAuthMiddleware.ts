import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { authService } from "../../services/authServices";

const StudentAuthMiddleware = async (req: any, res: Response, next: NextFunction) => {
    let token: string | null = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        throw new AppError('Token not found', HttpStatus.UNAUTHORIZED)
    }
    try {
        const decodedToken: any = await authService().verifyToken(token)
        console.log(decodedToken)
        const payload = decodedToken.payload;
        console.log(payload)
        req.student = payload;
        next();
    } catch (err) {
        throw new AppError('Token Expired', HttpStatus.UNAUTHORIZED)
    }
}

export default StudentAuthMiddleware;