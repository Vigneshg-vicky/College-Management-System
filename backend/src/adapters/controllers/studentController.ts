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
import { ExamRepositoryMongoDb } from '../../frameworks/database/mongoDB/repository/ExamRepositoryMongoDb';
import { ExamDbInterface } from '../../applications/repositories/ExamRepositoryInterface';
import { GetStudentDepartment } from '../../applications/useCases/Student/StudentDept';
import { UploadFile } from '../../applications/useCases/Student/UploadFile';
import { Cloudinary } from "../../frameworks/services/cloudinary";
import { CloudinaryServiceInterface } from "../../applications/services/CloudinaryService";

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
    ExamInterface: ExamDbInterface,
    ExamImpl: ExamRepositoryMongoDb
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const dbFacultyRepository = facultyInterface(FacultyImpl());
    const dbExamRepository = ExamInterface(ExamImpl());
    const CloudinaryRepository = CloudinaryServiceInterface(Cloudinary());


    const getStudentData = asyncHandler(async (req: any, res: Response) => {
        const studentId = req.student;
        console.log(studentId, 'reached inside the getStudentData');
        const student = await dbRepositoryStudent.getStudentById(studentId);
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
        console.log('this is the real data', studentData)
        const edited = await dbRepositoryStudent.EditStudent(studentId, studentData)
        console.log(edited, 'response is on the way')
        res.json({
            status: 'success',
            message: 'student Edited',
            edited,
        })
    })

    const GetExams = asyncHandler(async (req: any, res: Response) => {
        const studentId = req.student;
        const Exams = await GetStudentDepartment(studentId, dbRepositoryStudent, dbFacultyRepository, dbExamRepository)
        res.json({
            status: 'success',
            message: 'exams fetched',
            Exams,
        })

    })


    const UploadPic = asyncHandler(async (req: any, res: Response) => {

        const filePath = req.file?.path;
        console.log(filePath)
        const studentId: string = req.student;
        const AddFile = await UploadFile(studentId, filePath, dbRepositoryStudent, CloudinaryRepository)

        res.json({
            status: 'success',
            message: 'reached',
            AddFile
        })
    })


    return {
        getStudentData,
        EditStudent,
        GetExams,
        UploadPic,
    }


}

export default StudentController;