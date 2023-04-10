import { EditFacultyInterface } from "../../../types/FaculyInterface";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { FacultyDbInterface } from "../../repositories/FacultyRepository";
import { CloudinaryInterface } from "../../services/CloudinaryService";


export const FacultyCheck = async (id: string, filePath: string, FacultyData: EditFacultyInterface, FacultyRepository: ReturnType<FacultyDbInterface>, Cloudinary: ReturnType<CloudinaryInterface>) => {
    const checkFacultyEmail = await (await FacultyRepository).getFacultyByEmail(FacultyData.email);
    if (checkFacultyEmail) {
        throw new AppError('Email already exists as another faculty', HttpStatus.CONFLICT)
    }
    const url = await Cloudinary.uploadImage(filePath)
    FacultyData.url = url;
    const faculty = await (await FacultyRepository).EditFaculty(id, FacultyData);
    return faculty;
}

