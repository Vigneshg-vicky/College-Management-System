import { AdminRepositoryMongoDBReturn } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";

export const adminDbRepository = (repository: AdminRepositoryMongoDBReturn) => {
    const getAdminByEmail = async (email: string) => await repository.getAdminByEmail(email)

    return {
        getAdminByEmail,
    }

}

export type AdminDbInterface = typeof adminDbRepository;

