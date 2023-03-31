import mongoose from "mongoose";

interface AdminInterface {
    _id: string;
    email: string;
    password: string;
}

export interface AdminDataInterface {
    _id: mongoose.Types.ObjectId;
    name?:string,
    email: string;
    url?: string,
}

export default AdminInterface;