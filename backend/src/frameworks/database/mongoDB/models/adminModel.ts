import { model, Schema } from "mongoose";

const adminSchema = new Schema (
    {
        email:{
            type:String,
            required:[true,'Please add an Email'],
            unique:true,
        },
        password:{
            type:String,
            required:[true,'Please add a password']
        },
    },
    {
        timestamps:true,
    }
)

const Admin = model('Admin',adminSchema,'admin')
export default Admin;