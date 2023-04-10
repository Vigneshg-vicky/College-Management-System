import Faculty from "../models/FacultyModel";
import { AddFacultyInterface, FacultyInterface } from "../../../../types/FaculyInterface";
import { EditFacultyInterface } from "../../../../types/FaculyInterface";


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
                department: FacultyInfo.department,
                designation: FacultyInfo.designation,
            }
        )
    }

    const EditFaculty = async (id: string, FacultyData: EditFacultyInterface) => {
        const faculty = await Faculty.findByIdAndUpdate({ _id: id },
            {
                name: FacultyData.name,
                email: FacultyData.email,
                url: FacultyData.url,
                phone: FacultyData.number,
            })
        console.log('this is faculty query', faculty)

        return faculty;
    }

    const GetFacultyById = async (id: string) => {
        const faculty = await Faculty.findById({ _id: id })
        return faculty;
    }

    const TotalFaculty = async () => {
        const count = await Faculty.find().count();
        return count;
    }

    return {
        getFacultyByEmail,
        addFaculty,
        TotalFaculty,
        EditFaculty,
        GetFacultyById,
    }
}

export type FacultyRepositoryMongoDb = typeof FacultyRepositoryMongoDb;
export type FacultyRepositoryMongoDbReturn = ReturnType<FacultyRepositoryMongoDb>
