
import Department from "../models/DepartmentModel";

export const DepartmentdRepositoryMongoDb = () => {

    const addDepartment = async (department: string) => await Department.create({ department })

    return {
        addDepartment,
    }
}

export type DepartmentdRepositoryMongoDb = typeof DepartmentdRepositoryMongoDb;
export type studentRepositoryMongoDBReturn = ReturnType<DepartmentdRepositoryMongoDb>