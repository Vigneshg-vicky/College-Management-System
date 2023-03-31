import mongoose from "mongoose";

export interface FacultyInterface {
    _id: string;
    name: string;
    email: string;
    password: string;
    designation: string;
    reg_no:string;
    department: mongoose.Types.ObjectId;
    contact_No?: string;
}

export interface AddFacultyInterface {
    name: string;
    email: string;
    department: string;
    designation: string;
    contact?: string;
}

export interface EditFacultyInterface {

}