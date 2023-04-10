import { FacultyRepositoryMongoDbReturn } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";
import { AddFacultyInterface, EditFacultyInterface } from "../../types/FaculyInterface";

export const FacultyRepository = async (repository: FacultyRepositoryMongoDbReturn) => {

    const getFacultyByEmail = async (email: string) => {
        const Faculty = await repository.getFacultyByEmail(email)
        return Faculty;
    }

    const EditFaculty = async (id: string, facultyData: EditFacultyInterface) => {
        const faculty = await repository.EditFaculty(id, facultyData);
        return faculty;
    }

    const TotalFaculty = async () => {
        const faculties = await repository.TotalFaculty();
        return faculties;
    }

    const addFaculty = async (faculty: AddFacultyInterface) => {
        const AddFaculty = await repository.addFaculty(faculty)
    }

    const GetFacultyById = async (facultyId: string) => {
        const faculty = await repository.GetFacultyById(facultyId);
        return faculty;
    }

    return {
        getFacultyByEmail,
        TotalFaculty,
        addFaculty,
        EditFaculty,
        GetFacultyById,
    }

}

export type FacultyDbInterface = typeof FacultyRepository;