import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { DepartmentDbInterface, DepartmentRepository } from "../../applications/repositories/departmentDbRepository"
import { DepartmentdRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb"
import { addDepartment } from "../../applications/useCases/Department/addDepartment";
import { AdminDbInterface } from "../../applications/repositories/adminDbRepository";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import { cacheRepositoryInterface } from "../../applications/repositories/cacheRepositoryInterface";
import { redisRepository } from "../../frameworks/database/redis/setCache";
import { redisClient } from "../../app";
import { addStudent } from "../../applications/useCases/Student/addStudent";
import { StudentInterface } from "../../types/StudentInterface";
import { StudentDbInterface } from "../../applications/repositories/studentRepository";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { RegisterNumberInterface } from "../../applications/services/generateRegisterNumber";
import { RegistrationNumber } from "../../frameworks/services/GenerateRegisteration";

const AdminController = (departmentDbRepository: DepartmentDbInterface,
    departmentDbImpl: DepartmentdRepositoryMongoDb,
    AdminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDB,
    cacheRepositoryInterface: cacheRepositoryInterface,
    cacheRepositoryImpl: redisRepository,
    cacheClient: redisClient,
    studentDbRepository: StudentDbInterface,
    studentDbRepositoryImpl: studentRepositoryMongoDB,
    RegisterNumberInterface: RegisterNumberInterface,
    RegisterNumberImpl: RegistrationNumber,
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const registerNoService = RegisterNumberInterface(RegisterNumberImpl())


    const AddDepartment = asyncHandler(async (req: Request, res: Response) => {
        const { department }: { department: string } = req.body;
        const Added = await addDepartment(department, DbRepositoryDepartment)

        res.json({
            status: 'success',
            message: 'department added',
            Added,
        })
    })

    const getDepartment = asyncHandler(async (req: Request, res: Response) => {
        const Departments = await DbRepositoryDepartment.getDepartmentData();

        res.json({
            status: 'success',
            message: 'Department fetched',
            Departments
        })
    })

    const AddStudent = asyncHandler(async (req: Request, res: Response) => {
        const { name, email, joiningYear, department, gender, contact_no } = req.body;
        const studentData = {
            name,
            email,
            year: joiningYear,
            department,
            gender,
            contact_no,
        }
        console.log(studentData)



        const StudentAdd = await addStudent(studentData, dbRepositoryStudent, registerNoService)

        console.log('object')
        console.log('object',StudentAdd)

        res.json({
            status: 'success',
            message: 'Student Added!',
            StudentAdd
        })


    })

    return {
        AddDepartment,
        getDepartment,
        AddStudent,
    }
}

export default AdminController;