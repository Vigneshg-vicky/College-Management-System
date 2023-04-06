import express, { Router } from "express";
import { redisClient } from "../../../app";
import StudentAuthMiddleware from "../middlewares/StudentAuthMiddleware";
import { DepartmentRepository } from "../../../applications/repositories/departmentDbRepository";
import { DepartmentdRepositoryMongoDb } from "../../database/mongoDB/repository/departmentReposirtoryMongoDb";
import { adminDbRepository } from "../../../applications/repositories/adminDbRepository";
import { AdminRepositoryMongoDB } from "../../database/mongoDB/repository/adminRepositoryMongoDB";
import { cacheRepositoryInterface } from "../../../applications/repositories/cacheRepositoryInterface";
import { redisRepository } from "../../database/redis/setCache";
import { StudentRepository } from "../../../applications/repositories/studentRepository";
import { studentRepositoryMongoDB } from "../../database/mongoDB/repository/studentsRepositoryMongoDB";
import { FacultyRepositoryMongoDb } from "../../database/mongoDB/repository/FacultyRepositoryMongoDb";
import { FacultyRepository } from "../../../applications/repositories/FacultyRepository";
import StudentController from "../../../adapters/controllers/studentController";

export default function studentRouter(redisClient: redisClient) {
    const router = express.Router();

    const controller = StudentController(DepartmentRepository,
        DepartmentdRepositoryMongoDb,
        adminDbRepository,
        AdminRepositoryMongoDB,
        cacheRepositoryInterface,
        redisRepository,
        redisClient,
        StudentRepository,
        studentRepositoryMongoDB,
        FacultyRepositoryMongoDb,
        FacultyRepository,
    );

    router.get('/details', StudentAuthMiddleware, controller.getStudentData)
    router.patch('/edit-student',StudentAuthMiddleware,controller.EditStudent)



    return router
}