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
) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
    const dbFacultyRepository = facultyInterface(FacultyImpl());
    const CloudinaryRepository = CloudinaryServiceInterface(Cloudinary());

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
            status:'success',
            message:'faculty data fetched',
            facultyData
        })
    })

    return {
        editFaculty,
        getFaculty,
    }

}

export default FacultyController;