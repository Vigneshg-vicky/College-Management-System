import { Request, Response } from "express";
import { redisClient } from "../../app";
import asyncHandler from 'express-async-handler';
import { FacultyDbInterface } from "../../applications/repositories/FacultyRepository";
import { AdminDbInterface } from "../../applications/repositories/adminDbRepository";
import { cacheRepositoryInterface } from "../../applications/repositories/cacheRepositoryInterface";
import { DepartmentDbInterface } from "../../applications/repositories/departmentDbRepository";
import { StudentDbInterface } from "../../applications/repositories/studentRepository";
import { FacultyRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import { DepartmentdRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";
import { redisRepository } from "../../frameworks/database/redis/setCache";
import { FacultyCheck } from "../../applications/useCases/Faculty/EditFacultyCheck";
import { CloudinaryServiceInterface } from "../../applications/services/CloudinaryService";
import { EditFacultyInterface } from "../../types/FaculyInterface";
import { Cloudinary } from "../../frameworks/services/cloudinary";
import { ExamDbInterface } from "../../applications/repositories/ExamRepositoryInterface";
import { ExamRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/ExamRepositoryMongoDb";

interface RequestWithFile extends Request {
    file?: Express.Multer.File;
}

interface UploadResponse {
    asset_id: string;
    public_id: string;
    secure_url: string;
    format: string;
}

const FacultyController = (departmentDbRepository: DepartmentDbInterface,
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
    ExamImpl: ExamRepositoryMongoDb,
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const dbFacultyRepository = facultyInterface(FacultyImpl());
    const CloudinaryRepository = CloudinaryServiceInterface(Cloudinary());
    const ExamRepository = ExamInterface(ExamImpl());

    const editFaculty = asyncHandler(async (req: any, res: Response) => {

        const filePath = req.file?.path;
        console.log(filePath)
        const facultyId: string = req.faculty;
        const { number, email, name } = req.body;
        const FacultyData: EditFacultyInterface = { email, number, name }
        const EditFaculty = await FacultyCheck(facultyId, filePath, FacultyData, dbFacultyRepository, CloudinaryRepository);

        res.json({
            status: 'success',
            message: 'reached',
            EditFaculty,
        })
    })

    const getFaculty = asyncHandler(async (req: any, res: Response) => {
        const facultyId = req.faculty;
        const facultyData = await (await dbFacultyRepository).GetFacultyById(facultyId);
        res.json({
            status: 'success',
            message: 'faculty data fetched',
            facultyData
        })
    })

    const addExam = asyncHandler(async (req: any, res: Response) => {
        const facultyId = req.faculty;
        const { examType, examCode, passMark, totalMark, subject } = req.body;
        const examDetails = {
            examType,
            examCode,
            passMark,
            totalMark,
            subject,
            facultyId,
        }
        const addExam = await ExamRepository.AddExam(examDetails);
        res.json({
            status: 'success',
            message: 'Exam Added',
            addExam
        })
    })

    const GetSubject = asyncHandler(async (req: any, res: Response) => {
        const facultyId = req.faculty;
        const getFaculty: any | null = await (await dbFacultyRepository).GetFacultyById(facultyId)
        const dept: string = getFaculty?.department;
        const getDepartment = await DbRepositoryDepartment.getDepartmentById(dept)

        res.json({
            status: 'success',
            message: 'Subject Fetched',
            getDepartment,
        })
    })

    const getExams = asyncHandler(async (req: any, res: Response) => {
        const facultyId = req.faculty;
        const exams = await ExamRepository.GetExams(facultyId);

        res.json({
            status: 'success',
            message: 'Exams Fetched',
            exams,
        })
    })

    const getExamsWithId = asyncHandler(async (req: any, res: Response) => {
        const examId = req.params.id;
        const facultyId = req.faculty;
        console.log('this is exam Id', examId)
        console.log('this is faculty Id', facultyId)
        res.json({
            status: 'success',
            message: 'data fetched',
            examId,
        })
    })

    return {
        editFaculty,
        getFaculty,
        addExam,
        GetSubject,
        getExams,
        getExamsWithId,
    }

}

export default FacultyController;