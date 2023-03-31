import express, { Router } from "express"
import AdminController from "../../../adapters/controllers/adminControllers"
import { redisClient } from "../../../app"
import { adminDbRepository } from "../../../applications/repositories/adminDbRepository"
import { cacheRepositoryInterface } from "../../../applications/repositories/cacheRepositoryInterface"
import { DepartmentRepository } from "../../../applications/repositories/departmentDbRepository"
import { StudentRepository } from "../../../applications/repositories/studentRepository"
import { RegisterNumber } from "../../../applications/services/generateRegisterNumber"
import { AdminRepositoryMongoDB } from "../../database/mongoDB/repository/adminRepositoryMongoDB"
import { DepartmentdRepositoryMongoDb } from "../../database/mongoDB/repository/departmentReposirtoryMongoDb"
import { studentRepositoryMongoDB } from "../../database/mongoDB/repository/studentsRepositoryMongoDB"
import { redisRepository } from "../../database/redis/setCache"
import { RegistrationNumber } from "../../services/GenerateRegisteration"
import { FacultyRepositoryMongoDb } from "../../database/mongoDB/repository/FacultyRepositoryMongoDb"
import { FacultyRepository } from "../../../applications/repositories/FacultyRepository"
import adminAuthMiddleware from "../middlewares/AdminAuthMiddleware"

export default function adminRouter() {
    const router = express.Router()

    const controller = AdminController(DepartmentRepository,
        DepartmentdRepositoryMongoDb,
        adminDbRepository,
        AdminRepositoryMongoDB,
        cacheRepositoryInterface,
        redisRepository,
        redisClient,
        StudentRepository,
        studentRepositoryMongoDB,
        RegisterNumber,
        RegistrationNumber,
        FacultyRepositoryMongoDb,
        FacultyRepository,
    );

    router.post('/add-department', adminAuthMiddleware, controller.AddDepartment)

    router.get('/departments', adminAuthMiddleware, controller.getDepartment)

    router.post('/add-student', adminAuthMiddleware, controller.AddStudent)

    router.get('/home', adminAuthMiddleware, controller.AdminHomeData)

    router.get('/students/:id', adminAuthMiddleware, controller.getStudentsWithDept)

    router.post('/add-faculty', controller.addFaculty)

    router.post('/add-subject', controller.addSubject)


    return router
}