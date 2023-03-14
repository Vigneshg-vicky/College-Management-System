import { FacultyRepositoryMongoDbReturn } from "../../frameworks/database/mongoDB/repository/FacultyRepositoryMongoDb";

export const FacultyRepository = (repository:FacultyRepositoryMongoDbReturn) => {

    const getFacultyByEmail = async(email:string) => {
        const Faculty = await repository.getFacultyByEmail(email)
        return Faculty;
    }

    return {
        getFacultyByEmail,
    }

}

export type FacultyDbInterface = typeof FacultyRepository;