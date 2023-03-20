import { studentRepositoryMongoDBReturn } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb"

export const DepartmentRepository = (repository:studentRepositoryMongoDBReturn) => {

    const addDepartment = async (department:string) => await repository.addDepartment(department)
    const getDepartmentData = async () => await repository.getDepartment();

    return {
        addDepartment,
        getDepartmentData,
    }
}

export type DepartmentDbInterface = typeof DepartmentRepository;

