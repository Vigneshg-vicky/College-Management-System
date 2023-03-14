import mongoose from "mongoose";

export interface FacultyInterface {
    _id: string;
    name:string;
    email: string;
    password: string;
    designation: string;
    department: mongoose.Types.ObjectId;
    contact_No?: string;
}

export interface FacultyLoginInterface {
    _id: string;
    email: string;
    password: string;
}

export interface EditFacultyInterface {
    
}