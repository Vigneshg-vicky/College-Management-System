import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { FacultyDbInterface } from "../../applications/repositories/FacultyRepository";
import { AdminDbInterface } from "../../applications/repositories/adminDbRepository";
import { StudentDbInterface } from "../../applications/repositories/studentRepository";
import { AuthServiceInterface } from "../../applications/services/AuthServiceInterface";
import { FacultyRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { AuthService } from "../../frameworks/services/authServices";
import { redisClient } from '../../app';
import { redisRepository } from '../../frameworks/database/redis/setCache';
import { cacheRepositoryInterface } from '../../applications/repositories/cacheRepositoryInterface';
import { DepartmentdRepositoryMongoDb } from '../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb';
import { DepartmentDbInterface } from '../../applications/repositories/departmentDbRepository';

const StudentController = (departmentDbRepository: DepartmentDbInterface,
    departmentDbImpl: DepartmentdRepositoryMongoDb,
    AdminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDB,
    cacheRepositoryInterface: cacheRepositoryInterface,
    cacheRepositoryImpl: redisRepository,
    cacheClient: redisClient,
    studentDbRepository: StudentDbInterface,
    studentDbRepositoryImpl: studentRepositoryMongoDB,
    FacultyImpl: FacultyRepositoryMongoDb,
    facultyInterface: FacultyDbInterface,
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const dbFacultyRepository = facultyInterface(FacultyImpl());

    const getStudentData = asyncHandler(async (req: any, res: Response) => {
        const studentId = req.student;
        console.log(studentId, 'reached inside the getStudentData')
        const student = await dbRepositoryStudent.getStudentById(studentId)
        console.log('this is the student', student);
        res.json({
            status: 'success',
            message: 'data fetched',
            student,
        })
    })

    const EditStudent = asyncHandler(async (req: any, res: Response) => {
        console.log('this is the body of request', req.body)
        const { mobile, nationality, email, name, dob } = req.body;
        const studentId = req.student;
        const studentData = {
            Contact_No: mobile,
            nationality,
            email,
            name,
            dob
        }
        const edited = await dbRepositoryStudent.EditStudent(studentId, studentData)
    })

    return {
        getStudentData,
        EditStudent,
    }


}

export default StudentController;