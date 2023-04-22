import { EditStudentInterface, StudentLoginInterface, StudentInterface } from "../../../../types/StudentInterface";
import Student from "../models/studentModel";


export const studentRepositoryMongoDB = () => {
    const addStudent = async (studentInfo: StudentInterface) => await Student.create
        (
            {
                name: studentInfo.name,
                email: studentInfo.email,
                department: studentInfo.department,
                dob: studentInfo.dob,
                Joining_Year: studentInfo.year,
                Reg_No: studentInfo.Reg_No,
                Contact_No: studentInfo.contact_no,
                gender: studentInfo.gender
            }
        )

    const editStudent = async (studentId: string, studentInfo: EditStudentInterface) => {
        console.log('inside the repository this is data', studentInfo)
        console.log('inside the repository this is studentID', studentId)
        return await Student.updateOne({ _id: studentId }, {
            $set: {
                name: studentInfo.name,
                email: studentInfo.email,
                department: studentInfo.department,
                Joining_Year: studentInfo.year,
                registration_No: studentInfo.Reg_No,
                Contact_No: studentInfo.contact_No,
                nationality: studentInfo.nationality,
            }
        })

    }

    const uploadFile = async (id: string, url: string) => {
        console.log('these are the data', id, url)
        return await Student.findByIdAndUpdate({ _id: id }, { url: url })
    }

    const getStudentById = async (id: string) => {
        const data = await Student.findById(id)
        return data;
    }

    const getStudent = async (Reg_No: string) => {
        const student: StudentLoginInterface | null = await Student.findById(Reg_No);
        return student;
    }

    const getAllStudentsCount = async () => {
        const students: number | null = await Student.find().count();
        return students;
    }

    const getStudentByEmail = async (email: string) => {
        const student: StudentLoginInterface | null = await Student.findOne({ email })
        return student
    }

    const getStudentWithDept = async (deptId: string) => {
        const students = await Student.find({ department: deptId })
        return students
    }

    const ChangePassword = async (id: string, hashedPassword: string) => await Student.findByIdAndUpdate({ _id: id }, { $set: { password: hashedPassword, firstLogin: false } })




    return {
        addStudent,
        editStudent,
        getStudent,
        getStudentByEmail,
        getAllStudentsCount,
        getStudentWithDept,
        getStudentById,
        uploadFile,
        ChangePassword,
    }
}

export type studentRepositoryMongoDB = typeof studentRepositoryMongoDB;
export type studentRepositoryMongoDBReturn = ReturnType<studentRepositoryMongoDB>