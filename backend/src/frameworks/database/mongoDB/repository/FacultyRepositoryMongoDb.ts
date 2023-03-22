import Faculty from "../models/FacultyModel";
import { AddFacultyInterface, FacultyInterface } from "../../../../types/FaculyInterface";

export const FacultyRepositoryMongoDb = () => {
    const getFacultyByEmail = async (email: string) => {
        const faculty: FacultyInterface | null = await Faculty.findOne({ email })
        return faculty;
    }

    const addFaculty = async (FacultyInfo: AddFacultyInterface) => {
        await Faculty.create(
            {
                name: FacultyInfo.name,
                email: FacultyInfo.email,
                department:FacultyInfo.department,
                designation:FacultyInfo.designation,
                contact:FacultyInfo.contact
            }
        )
    }

    const TotalFaculty = async () => {
        const count = await Faculty.find().count();
        return count;
    }

    return {
        getFacultyByEmail,
        addFaculty,
        TotalFaculty,
    }
}

export type FacultyRepositoryMongoDb = typeof FacultyRepositoryMongoDb;
export type FacultyRepositoryMongoDbReturn = ReturnType<FacultyRepositoryMongoDb>
