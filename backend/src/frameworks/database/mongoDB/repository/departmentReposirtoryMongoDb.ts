
import mongoose from "mongoose";
import { SubjectInterface } from "../../../../types/StudentInterface";
import Department from "../models/DepartmentModel";

export const DepartmentdRepositoryMongoDb = () => {

    const addDepartment = async (department: string) => await Department.create({ department })

    const getDepartment = async () => await Department.find({}).select('department');

    const TotalDepartment = async () => {
        const departments = await Department.find().count();
        return departments;
    }

    const addSubject = async (SubjectInfo: SubjectInterface) => {
        const department = SubjectInfo.department;
        const added = await Department.findByIdAndUpdate({ _id: department },
            {
                $push:
                {
                    'Subjects':
                    {
                        subjectCode: SubjectInfo.code,
                        subjectName: SubjectInfo.name,
                        totalLecture: SubjectInfo.totalLecture,
                    }
                }
            })
    }

    return {
        addDepartment,
        getDepartment,
        TotalDepartment,
        addSubject,
    }
}

export type DepartmentdRepositoryMongoDb = typeof DepartmentdRepositoryMongoDb;
export type studentRepositoryMongoDBReturn = ReturnType<DepartmentdRepositoryMongoDb>