import mongoose, { Schema, model } from "mongoose";

const studentsSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter the name!'],
        },
        email: {
            type: String,
            required: [true, 'Please enter an Email!'],
            unique: [true, 'This email has already been used!'],
        },
        // password:{
        //     type:String,
        //     required:[true,'Please enter a password']
        // },
        department: {
            type: String,
            required: [true, 'Select a department!'],
        },
        Joining_Year: {
            type: String,
            required: true,
        },
        Reg_No: {
            type: String,
            required: true,
        },
        Contact_No: {
            type: Number,
        },
        gender: {
            type: String,
        }
    },
)

const Student = model('Student', studentsSchema, 'Student')
export default Student;