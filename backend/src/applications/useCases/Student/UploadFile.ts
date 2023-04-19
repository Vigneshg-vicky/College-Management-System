import AppError from "../../../utils/appError";
import { StudentDbInterface } from "../../repositories/studentRepository";
import { CloudinaryInterface } from "../../services/CloudinaryService";

export const UploadFile = async (id: string, filePath: string, StudentRepository: ReturnType<StudentDbInterface>, Cloudinary: ReturnType<CloudinaryInterface>) => {
    const url = await Cloudinary.uploadImage(filePath)
    console.log(url)
    const student = await StudentRepository.UploadFile(id, url)
    return student;
}