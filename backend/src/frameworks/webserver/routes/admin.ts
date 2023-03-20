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
    );

    router.post('/add-department', controller.AddDepartment)

    router.get('/departments', controller.getDepartment)

    router.post('/add-student', controller.AddStudent)





    return router
}