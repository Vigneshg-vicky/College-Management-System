import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { DepartmentDbInterface, DepartmentRepository } from "../../applications/repositories/departmentDbRepository"
import { DepartmentdRepositoryMongoDb } from "../../frameworks/database/mongoDB/repository/departmentReposirtoryMongoDb"
import { addDepartment } from "../../applications/useCases/Department/addDepartment";

const DepartmentController = (departmentDbRepository: DepartmentDbInterface,
    departmentDbImpl: DepartmentdRepositoryMongoDb,

) => {
    const DbRepositoryDepartment = departmentDbRepository(departmentDbImpl());


    const AddDepartment = asyncHandler(async (req: Request, res: Response) => {
        const { department }: { department: string } = req.body;
        const Added = await addDepartment(department, DbRepositoryDepartment)
        
        res.json({
            status: 'success',
            message: 'department added',
            Added,
        })
    })

    return {
        AddDepartment,
    }
}

export default DepartmentController;