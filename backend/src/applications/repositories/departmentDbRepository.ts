import { studentRepositoryMongoDBReturn } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb"

export const DepartmentRepository = (repository:studentRepositoryMongoDBReturn) => {

    const addDepartment = async (department:string) => await repository.addDepartment(department)

    return {
        addDepartment,
    }
}

export type DepartmentDbInterface = typeof DepartmentRepository;

