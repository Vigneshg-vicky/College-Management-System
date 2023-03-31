import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { authService } from "../../services/authServices";

const adminAuthMiddleware = async(req: any, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization)
    let token: string | null = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // console.log(token)
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
        req.admin = payload;
        next();
    } catch (err) {
        throw new AppError('Token Expired', HttpStatus.UNAUTHORIZED)
    }
}

export default adminAuthMiddleware;