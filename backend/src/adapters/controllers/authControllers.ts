import { Request, Response } from "express";
import adminLogin from "../../applications/useCases/Auth/adminAuth";
import asyncHandler from 'express-async-handler'
import { AdminDbInterface, adminDbRepository } from "../../applications/repositories/adminDbRepository";
import { AuthServiceInterface } from "../../applications/services/AuthServiceInterface";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { StudentDbInterface } from "../../applications/repositories/studentRepositoryInterface";
import StudentLogin from "../../applications/useCases/Auth/StudentAuth";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import { AuthService } from "../../frameworks/services/authServices";

const authController = (adminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDB,
    authServiceImpl: AuthService,
    authServiceInterface: AuthServiceInterface,
    StudentDbRepository: StudentDbInterface,
    StudentDbRepositoryImpl: studentRepositoryMongoDB) => {
    const dbRepositoryStudent = StudentDbRepository(StudentDbRepositoryImpl());
    const dbRepositoryAdmin = adminDbRepository(adminDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());

    const LoginAdmin = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string, password: string } = req.body;
        const token = await adminLogin(email, password, dbRepositoryAdmin, authService)
        res.json({
            status: 'success',
            message: 'admin verified',
            token,
        })
    })

    const LoginStudent = asyncHandler(async (req: Request, res: Response) => {
        const { Reg_No, password }: { Reg_No: string, password: string } = req.body;
        const token = await StudentLogin(Reg_No, password, dbRepositoryStudent, authService)
        res.json({
            status: 'success',
            message: 'Student verified',
            token
        })
    })

    return {
        LoginStudent,
        LoginAdmin,
    }

}

export default authController