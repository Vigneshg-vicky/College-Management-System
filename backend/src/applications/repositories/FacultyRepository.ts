import { FacultyRepositoryMongoDbReturn } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";
import { AddFacultyInterface } from "../../types/FaculyInterface";

export const FacultyRepository = (repository: FacultyRepositoryMongoDbReturn) => {

    const getFacultyByEmail = async (email: string) => {
        const Faculty = await repository.getFacultyByEmail(email)
        return Faculty;
    }

    const TotalFaculty = async () => {
        const faculties = await repository.TotalFaculty();
        return faculties;
    }

    const addFaculty = async (faculty: AddFacultyInterface) => {
        const AddFaculty = await repository.addFaculty(faculty)
    }

    return {
        getFacultyByEmail,
        TotalFaculty,
        addFaculty
    }

}

export type FacultyDbInterface = typeof FacultyRepository;