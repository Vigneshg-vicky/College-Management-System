import { StudentLoginInterface } from "../../../types/StudentInterface";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { StudentDbInterface } from "../../repositories/studentRepositoryInterface";
import { AuthServiceInterface } from "../../services/AuthServiceInterface";

const StudentLogin = async (
    Reg_No: string,
    password: string,
    studentRepository: ReturnType<StudentDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    const student: StudentLoginInterface | null = await studentRepository.getStudent(Reg_No);
    if (!student) {
        throw new AppError('Invalid Credentials', HttpStatus.UNAUTHORIZED)
    }
    const isPasswordCorrect = await authService.comparePassword(password, student.password)
    if (!isPasswordCorrect) {
        throw new AppError('Password is incorrect!', HttpStatus.UNAUTHORIZED)
    }
    const token = authService.generateToken(student._id);
    return token;
}

export default StudentLogin;