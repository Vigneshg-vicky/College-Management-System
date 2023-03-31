import { AdminRepositoryMongoDBReturn } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";

export const adminDbRepository = (repository: AdminRepositoryMongoDBReturn) => {
    const getAdminByEmail = async (email: string) => await repository.getAdminByEmail(email)
    const getAdminById = async (id:string) => await repository.getAdminById(id);

    return {
        getAdminByEmail,
        getAdminById,
    }

}

export type AdminDbInterface = typeof adminDbRepository;

