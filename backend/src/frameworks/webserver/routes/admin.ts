import express, { Router } from "express"
import DepartmentController from "../../../adapters/controllers/departmentController"
import { DepartmentRepository } from "../../../applications/repositories/departmentDbRepository"
import { DepartmentdRepositoryMongoDb } from "../../database/mongoDB/repository/departmentReposirtoryMongoDb"

export default function adminRouter() {
    const router = express.Router()

    const controller = DepartmentController(DepartmentRepository, DepartmentdRepositoryMongoDb);

    router.post('/add-department', controller.AddDepartment)






    return router
}