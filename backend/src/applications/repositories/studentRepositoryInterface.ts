import { EditStudentInterface } from "../../types/StudentInterface";
import { studentRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/studentsRepositoryMongoDB";

export const StudentRepository = (repository: ReturnType<studentRepositoryMongoDB>) => {
    const addStudent = async (studentInformation:any) => await repository.addStudent(studentInformation)
    const EditStudent = async (studentId: string, studentInfo: EditStudentInterface) => await repository.editStudent(studentId, studentInfo)
    const getStudent = async (Reg_No: string) => await repository.getStudent(Reg_No)

    return {
        addStudent,
        EditStudent,
        getStudent,
    }

}

export type StudentDbInterface = typeof StudentRepository;