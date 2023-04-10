import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { authService } from "../../services/authServices";

const FacultyAuthMiddleware = async (req: any, res: Response, next: NextFunction) => {
    console.log('token with edit faculty')
    let token: string | null = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        throw new AppError('Token not found', HttpStatus.UNAUTHORIZED)
    }
    try {
        const decodedToken: any = await authService().verifyToken(token)
        const payload = decodedToken.payload;
        console.log(payload)
        req.faculty = payload;
        next();
    } catch (err) {
        throw new AppError('Token Expired', HttpStatus.UNAUTHORIZED)
    }
}

export default FacultyAuthMiddleware;