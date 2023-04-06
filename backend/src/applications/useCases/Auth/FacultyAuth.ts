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
        throw new AppError('Faculty doesnt exist', HttpStatus.UNAUTHORIZED)
    }
    console.log('why is this not working',faculty.password,password)
    const PasswordCheck = await AuthService.comparePassword(password, faculty.password);
    console.log('here is the password',PasswordCheck)
    if (!PasswordCheck) {
        throw new AppError('Password is incorrect', HttpStatus.UNAUTHORIZED);
    }
    const token = AuthService.generateToken(faculty._id);
    return token;
}