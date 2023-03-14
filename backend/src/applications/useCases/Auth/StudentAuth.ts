import { StudentInterface } from "../../../types/StudentInterface";
import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { StudentDbInterface, StudentRepository } from "../../repositories/studentRepository";
import { AuthServiceInterface } from "../../services/AuthServiceInterface";
import { authService } from "../../../frameworks/services/authServices";
import mongoose from "mongoose";
import { FacultyDbInterface } from "../../repositories/FacultyRepository";

export const StudentLogin = async (
    email: string,
    password: string,
    studentRepository: ReturnType<StudentDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    const student = await studentRepository.getStudent(email);
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

export const AddStudent = async (
    Student:StudentInterface,
    FacultyRepository:ReturnType<FacultyDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    Student.email = Student.email.toLowerCase();

}