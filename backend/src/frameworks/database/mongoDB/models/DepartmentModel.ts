import { model, Schema } from "mongoose";

const DepartmentSchema = new Schema(
    {
        department: {
            type: String,
            required: [true, 'Enter the Department Name'],
            unique: [true,'unique'],
        },
        Subjects: [
            {
                subjectCode: { type: Number, required: [true, 'Enter the subject Code'] },
                subjectName: { type: String, required: [true, 'Enter the subject Name'] },
            }],

    },{
        timestamps:true,
    }
)

const Department = model('Department', DepartmentSchema, 'Department')
export default Department;