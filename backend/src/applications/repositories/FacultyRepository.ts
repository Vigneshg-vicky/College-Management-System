import Faculty from "../../frameworks/database/mongoDB/models/FacultyModel";
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

    const getFacultyByDept = async (departmentId: string) => {
        const faculty = await Faculty.findOne({ department: departmentId })
        return faculty;
    }

    const getFaculty = async () => await repository.getFaculty();

    const deleteFaculty = async (facultyId: string) => await repository.deleteFaculty(facultyId)

    const checkFacultyDept = async (departmentId: string) => await repository.checkFacultyDept(departmentId)

    const EditDeptFaculty = async (details: any) => await repository.EditDeptFaculty(details);

    return {
        getFacultyByEmail,
        TotalFaculty,
        addFaculty,
        EditFaculty,
        GetFacultyById,
        getFacultyByDept,
        getFaculty,
        deleteFaculty,
        checkFacultyDept,
        EditDeptFaculty,
    }

}

export type FacultyDbInterface = typeof FacultyRepository;