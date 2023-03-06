import mongoose from "mongoose";

export interface StudentInterface {
    name: string,
    email: string,
    department: mongoose.Types.ObjectId,
    year: Date,
    registration_No: string,
    contact_No?: number,
}
export interface EditStudentInterface {
    name?: string,
    email?: string,
    department?: mongoose.Types.ObjectId,
    year?: Date,
    registration_No?: string,
    contact_No?: number,
}