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
import { StudentInterface, SubjectInterface } from "../../types/StudentInterface";
import { StudentDbInterface } from "../../applications/repositories/studentRepository";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { RegisterNumberInterface } from "../../applications/services/generateRegisterNumber";
import { RegistrationNumber } from "../../frameworks/services/GenerateRegisteration";
import { FacultyRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";
import { FacultyDbInterface } from "../../applications/repositories/FacultyRepository";
import { AddFacultyInterface } from "../../types/FaculyInterface";

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
    FacultyImpl: FacultyRepositoryMongoDb,
    facultyInterface: FacultyDbInterface,
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const registerNoService = RegisterNumberInterface(RegisterNumberImpl())
    const dbFacultyRepository = facultyInterface(FacultyImpl());


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
        const { name, email, date, department, gender, contact_no } = req.body;
        const studentData: StudentInterface = {
            name,
            email,
            year: date,
            department,
            gender,
            contact_no,
        }
        console.log(studentData)

        const StudentAdd = await addStudent(studentData, dbRepositoryStudent, registerNoService)

        console.log('object')
        console.log('object', StudentAdd)

        res.json({
            status: 'success',
            message: 'Student Added!',
            StudentAdd
        })
    })

    const AdminHomeData = asyncHandler(async (req: Request, res: Response) => {
        const departments = await DbRepositoryDepartment.TotalDepartment();
        const students = await dbRepositoryStudent.getAllStudentsCount();
        const faculty = await dbFacultyRepository.TotalFaculty();

        console.log(departments, students, faculty)

        res.json({
            status: 'success',
            message: 'data fetched',
            departments,
            students,
            faculty
        })

    })

    const addFaculty = asyncHandler(async (req: Request, res: Response) => {
        const { name, email, designation, department, contact } = req.body;
        const facultyData: AddFacultyInterface = { name, email, designation, department, contact };
        const FacultyAdd = await dbFacultyRepository.addFaculty(facultyData);
        res.json({
            status: 'success',
            message: 'faculty added',
            FacultyAdd
        })
    })

    const addSubject = asyncHandler(async (req: Request, res: Response) => {
        const { name, code, department, totalLecture } = req.body;
        const SubjectInfo: SubjectInterface = { name, code, department, totalLecture };
        await DbRepositoryDepartment.addSubject(SubjectInfo)

        res.json({
            status: 'success',
            message: 'subject added!',
        })
    })


    return {
        AddDepartment,
        getDepartment,
        AddStudent,
        AdminHomeData,
        addFaculty,
        addSubject,
    }
}

export default AdminController;