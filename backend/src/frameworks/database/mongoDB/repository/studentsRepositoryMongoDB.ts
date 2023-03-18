import { EditStudentInterface, StudentLoginInterface, StudentInterface } from "../../../../types/StudentInterface";
import Student from "../models/studentModel";


export const studentRepositoryMongoDB = () => {
    const addStudent = async (studentInfo: StudentInterface) => {
        return await Student.create
            (
                {
                    name: studentInfo.name,
                    email: studentInfo.email,
                    department: studentInfo.department,
                    year: studentInfo.year,
                    registration_No: studentInfo.registration_No,
                    contact_No: studentInfo.contact_No,
                }
            )
    }
    const editStudent = async (studentId: string, studentInfo: EditStudentInterface) => {
        await Student.updateOne({ _id: studentId }, {
            $push: {
                name: studentInfo.name,
                email: studentInfo.email,
                department: studentInfo.department,
                year: studentInfo.year,
                registration_No: studentInfo.registration_No,
                contact_No: studentInfo.contact_No,
            }
        })
    }

    const getStudent = async (Reg_No: string) => {
        const student: StudentLoginInterface | null = await Student.findById(Reg_No);
        return student;
    }

    const getStudentByEmail = async (email:string) => {
        const student:StudentLoginInterface | null = await Student.findOne({email})
        console.log(student)
        return student
    }

    return {
        addStudent,
        editStudent,
        getStudent,
        getStudentByEmail
    }
}

export type studentRepositoryMongoDB = typeof studentRepositoryMongoDB;
export type studentRepositoryMongoDBReturn = ReturnType<studentRepositoryMongoDB>