import express from 'express'
import authController from '../../../adapters/controllers/authControllers';
import { adminDbRepository } from '../../../applications/repositories/adminDbRepository';
import { StudentRepository } from '../../../applications/repositories/studentRepositoryInterface';
import { AuthServiceInterface } from '../../../applications/services/AuthServiceInterface';
import { AdminRepositoryMongoDB } from '../../database/mongoDB/repository/adminRepositoryMongoDB';
import { studentRepositoryMongoDB } from '../../database/mongoDB/repository/studentsRepositoryMongoDB';
import { authService } from '../../services/authServices';

const authRouter = () => {
    const router = express.Router();

    const controller = authController(
        adminDbRepository,
        AdminRepositoryMongoDB,
        authService,
        AuthServiceInterface,
        StudentRepository,
        studentRepositoryMongoDB,
    );

    router.post('/admin-login',controller.LoginAdmin)

    router.post('/user-login',controller.LoginStudent)

    return router
}

export default authRouter;