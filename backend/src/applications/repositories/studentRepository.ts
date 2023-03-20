import { EditStudentInterface, StudentInterface } from "../../types/StudentInterface";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";

export const StudentRepository = (repository: ReturnType<studentRepositoryMongoDB>) => {
    const addStudent = async (studentInformation: StudentInterface) => await repository.addStudent(studentInformation)
    const EditStudent = async (studentId: string, studentInfo: EditStudentInterface) => await repository.editStudent(studentId, studentInfo)
    const getStudent = async (Reg_No: string) => await repository.getStudent(Reg_No);
    const getStudentByEmail = async (email: string) => await repository.getStudentByEmail(email)
    const getAllStudentsCount = async () => await repository.getAllStudentsCount()

    return {
        addStudent,
        EditStudent,
        getStudent,
        getStudentByEmail,
        getAllStudentsCount,
    }

}

export type StudentDbInterface = typeof StudentRepository;