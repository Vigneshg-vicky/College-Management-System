import { Request, Response } from "express";
import adminLogin from "../../applications/useCases/Auth/adminAuth";
import asyncHandler from 'express-async-handler'
import { AdminDbInterface, adminDbRepository } from "../../applications/repositories/adminDbRepository";
import { AuthServiceInterface } from "../../applications/services/AuthServiceInterface";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { StudentDbInterface } from "../../applications/repositories/studentRepository";
import { StudentLogin } from "../../applications/useCases/Auth/StudentAuth";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import { AuthService } from "../../frameworks/services/authServices";
import { FacultyLogin } from "../../applications/useCases/Auth/FacultyAuth";
import { FacultyDbInterface } from "../../applications/repositories/FacultyRepository";
import { FacultyRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";

const authController = (adminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDB,
    facultyDbRepository: FacultyDbInterface,
    facultyDbRepositoryImpl: FacultyRepositoryMongoDb,
    authServiceImpl: AuthService,
    authServiceInterface: AuthServiceInterface,
    StudentDbRepository: StudentDbInterface,
    StudentDbRepositoryImpl: studentRepositoryMongoDB) => {
    const dbRepositoryStudent = StudentDbRepository(StudentDbRepositoryImpl());
    const dbRepositoryAdmin = adminDbRepository(adminDbRepositoryImpl());
    const dbRepositoryFaculty = facultyDbRepository(facultyDbRepositoryImpl());
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
        const { email, password }: { email: string, password: string } = req.body;
        const token = await StudentLogin(email, password, dbRepositoryStudent, authService)
        res.json({
            status: 'success',
            message: 'Student verified',
            token
        })
    })

    const LoginFaculty = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string, password: string } = req.body;
        const token = await FacultyLogin(email, password, dbRepositoryFaculty, authService);
        res.json(
            {
                status: 'success',
                message: 'Faculty Verified',
                token
            }
        )
    })

    return {
        LoginStudent,
        LoginAdmin,
        LoginFaculty,
    }

}

export default authController