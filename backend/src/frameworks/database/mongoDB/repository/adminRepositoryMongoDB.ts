import AdminInterface, { AdminDataInterface } from "../../../../types/adminInterface";
import Admin from "../models/adminModel";

export const AdminRepositoryMongoDB = () => {

    const getAdminByEmail = async (email: string) => {
        const admin: AdminInterface | null = await Admin.findOne({ email })
        return admin;
    }

    const getAdminById = async (id: string) => {
        console.log(id, 'reached query and this is the id');
        const admin: AdminDataInterface | null = await Admin.findById(id).select('-password');
        console.log(admin, 'this is admin data')
        return admin;
    }

    return {
        getAdminByEmail,
        getAdminById,
    }
}

export type AdminRepositoryMongoDB = typeof AdminRepositoryMongoDB;
export type AdminRepositoryMongoDBReturn = ReturnType<AdminRepositoryMongoDB>