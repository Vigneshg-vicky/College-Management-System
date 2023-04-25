import { studentRepositoryMongoDBReturn } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb"
import { SubjectInterface } from "../../types/StudentInterface";

export const DepartmentRepository = (repository: studentRepositoryMongoDBReturn) => {

    const addDepartment = async (department: string) => await repository.addDepartment(department)
    const getDepartmentData = async () => await repository.getDepartment();
    const TotalDepartment = async () => await repository.TotalDepartment();
    const addSubject = async (subject: SubjectInterface) => await repository.addSubject(subject)
    const getDepartmentById = async (departmentId: string) => await repository.getDepartmentById(departmentId)
    const getSubjectsByDept = async (departmentId: string) => await repository.getSubjects(departmentId)


    return {
        addDepartment,
        getDepartmentData,
        TotalDepartment,
        addSubject,
        getDepartmentById,
        getSubjectsByDept,
    }
}

export type DepartmentDbInterface = typeof DepartmentRepository;

