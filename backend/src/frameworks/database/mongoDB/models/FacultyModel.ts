import { model, Schema } from "mongoose";

const FacultySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Enter the Name'],
        },
        email: {
            type: String,
            required: [true, 'Please Enter the email!'],
            unique: true,
        },
        designation: {
            type: String,
            required: [true, 'Select the designation'],
        },
        password: {
            type: String,
            required: [true, 'Please enter the password!'],
        }
    },
    {
        timestamps: true,
    }
)

const Faculty = model('Faculty', FacultySchema, 'faculty')
export default Faculty;