import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { FacultyDbInterface } from "../../repositories/FacultyRepository";
import { AuthServiceInterface } from "../../services/AuthServiceInterface";

export const FacultyLogin = async (
    email: string,
    password: string,
    FacultyRepository: ReturnType<FacultyDbInterface>,
    AuthService: ReturnType<AuthServiceInterface>,

) => {
    const faculty = await FacultyRepository.getFacultyByEmail(email)
    if (!faculty) {
        throw new AppError('Invalid Credentials', HttpStatus.UNAUTHORIZED)
    }
    const checkPassword = await AuthService.comparePassword(password, faculty.password)
    if (!checkPassword) {
        throw new AppError('Password incorrect!', HttpStatus.UNAUTHORIZED)
    }
    const token = await AuthService.generateToken(faculty._id)
    return token;
}