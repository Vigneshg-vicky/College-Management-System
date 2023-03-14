import Faculty from "../models/FacultyModel";
import { FacultyInterface } from "../../../../types/FaculyInterface";

export const FacultyRepositoryMongoDb = () => {
    const getFacultyByEmail = async (email: string) => {
        const faculty: FacultyInterface | null = await Faculty.findOne({ email })
        return faculty;
    }

    const addFaculty = async (FacultyInfo: FacultyInterface) => {
        await Faculty.create(
            {
                name: FacultyInfo.name,
                email: FacultyInfo.email,

            }
        )
    }

    return {
        getFacultyByEmail,
        addFaculty,
    }
}

export type FacultyRepositoryMongoDb = typeof FacultyRepositoryMongoDb;
export type FacultyRepositoryMongoDbReturn = ReturnType<FacultyRepositoryMongoDb>
