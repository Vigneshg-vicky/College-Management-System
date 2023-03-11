import AdminInterface from "../../../../types/adminInterface";
import Admin from "../models/adminModel";

export const AdminRepositoryMongoDB = () => {

    const getAdminByEmail = async (email: string) => {
        const admin: AdminInterface | null = await Admin.findOne({ email })
        return admin;
    }

    return {
        getAdminByEmail
    }
}

export type AdminRepositoryMongoDB = typeof AdminRepositoryMongoDB;
export type AdminRepositoryMongoDBReturn = ReturnType<AdminRepositoryMongoDB>