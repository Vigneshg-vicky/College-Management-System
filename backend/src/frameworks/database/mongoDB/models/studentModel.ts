import mongoose, {Schema,model} from "mongoose";

const studentsSchema = new Schema(
    {
        name:{
            type:String,
            required:[true,'Please Enter the name!'],
        },
        email: {
            type:String,
            required:[true,'Please enter an Email!']
        },
        department:{
            type:mongoose.Types.ObjectId,
            required:[true,'Select a department!']
        },
        Joining_Year:{
            type:Date,
            required:true,
        },
        Reg_No:{
            type:String,
            required:true,
        },
        Contact_No:{
            type:Number,
        }
    },
)

const Student = model('Student',studentsSchema,'Student')
export default Student;