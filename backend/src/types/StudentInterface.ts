import mongoose from "mongoose";

export interface StudentLoginInterface {
    _id: string;
    Reg_No: string;
    password: string;
}

export interface StudentInterface {
    name: string,
    email: string,
    department: mongoose.Types.ObjectId,
    year: Date,
    registration_No: string,
    contact_No?: number,
    Reg_No?: string,
}

export interface EditStudentInterface {
    name?: string,
    Reg_No?: string,
    email?: string,
    department?: mongoose.Types.ObjectId,
    year?: Date,
    registration_No?: string,
    contact_No?: number,
}