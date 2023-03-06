import { model, Schema } from "mongoose";

const DepartmentSchema = new Schema(
    {
        Department: {
            type: String,
            required: [true, 'Enter the Department Name'],
            unique: true,
        },
        Subjects: [
            {
                subjectCode: { type: Number, required: [true, 'Enter the subject Code'], unique: true },
                subjectName: { type: String, required: [true, 'Enter the subject Name'], unique: true },
            }],

    },{
        timestamps:true,
    }
)

const Department = model('Department', DepartmentSchema, 'department')
export default Department;