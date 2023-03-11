import AdminInterface from "../../../types/adminInterface";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { AdminDbInterface } from "../../repositories/adminDbRepository";
import { AuthServiceInterface } from "../../services/AuthServiceInterface";

const adminLogin = async (email: string, password: string, adminRepository: ReturnType<AdminDbInterface>, authService: ReturnType<AuthServiceInterface>) => {

    const admin: AdminInterface | null = await adminRepository.getAdminByEmail(email);
    if (!admin) {
        throw new AppError('Invalid Credentials', HttpStatus.UNAUTHORIZED)
    }
    const PasswordCheck = await authService.comparePassword(password, admin.password);
    if (!PasswordCheck) {
        throw new AppError('Invalid Credentails', HttpStatus.UNAUTHORIZED);
    }
    const token = authService.generateToken(admin._id);
    return token;
}

export default adminLogin;