
import Department from "../models/DepartmentModel";

export const DepartmentdRepositoryMongoDb = () => {

    const addDepartment = async (department: string) => await Department.create({ department })

    const getDepartment = async () => await Department.find({}).select('department');

    return {
        addDepartment,
        getDepartment,
    }
}

export type DepartmentdRepositoryMongoDb = typeof DepartmentdRepositoryMongoDb;
export type studentRepositoryMongoDBReturn = ReturnType<DepartmentdRepositoryMongoDb>