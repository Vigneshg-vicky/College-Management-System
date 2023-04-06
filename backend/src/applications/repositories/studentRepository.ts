import { EditStudentInterface, StudentInterface } from "../../types/StudentInterface";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";

export const StudentRepository = (repository: ReturnType<studentRepositoryMongoDB>) => {
    const addStudent = async (studentInformation: StudentInterface) => await repository.addStudent(studentInformation)
    const EditStudent = async (studentId: string, studentInfo: EditStudentInterface) => await repository.editStudent(studentId, studentInfo)
    const getStudent = async (Reg_No: string) => await repository.getStudent(Reg_No);
    const getStudentByEmail = async (email: string) => await repository.getStudentByEmail(email)
    const getAllStudentsCount = async () => await repository.getAllStudentsCount()
    const getStudentWithDept = async (deptId: string) => await repository.getStudentWithDept(deptId)
    const getStudentById = async (id: string) => await repository.getStudentById(id)

    return {
        addStudent,
        EditStudent,
        getStudent,
        getStudentByEmail,
        getAllStudentsCount,
        getStudentWithDept,
        getStudentById,
    }

}

export type StudentDbInterface = typeof StudentRepository;