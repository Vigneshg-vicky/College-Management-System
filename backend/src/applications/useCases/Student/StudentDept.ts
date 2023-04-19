import { getDefaultDirectives } from "helmet/dist/types/middlewares/content-security-policy";
import { ExamDbInterface } from "../../repositories/ExamRepositoryInterface"
import { FacultyDbInterface } from "../../repositories/FacultyRepository";
import { StudentDbInterface } from "../../repositories/studentRepository"

export const GetStudentDepartment = async (studentId: string, StudentRepository: ReturnType<StudentDbInterface>, FacultyRepository: ReturnType<FacultyDbInterface>, ExamRepository: ReturnType<ExamDbInterface>) => {
    const StudentDepartment: any = await StudentRepository.getStudentById(studentId);
    const department = StudentDepartment?.department;
    const getFaculty: any = await (await FacultyRepository).getFacultyByDept(department)
    const facultyId = getFaculty._id;
    const getExams = await ExamRepository.GetExams(facultyId)
    return getExams;
}