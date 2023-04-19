import { examDetails } from "../../../../types/ExamInterface";
import Exam from "../models/ExamModel";



export const ExamRepositoryMongoDb = () => {

    const AddExam = async (examDetails: examDetails) => {
        console.log('inside the repository', examDetails);
        const addExam = await Exam.create({
            examType: examDetails.examType,
            ExamCode: examDetails.examCode,
            subject: examDetails.subject,
            TotalMarks: examDetails.totalMark,
            passMark: examDetails.passMark,
            faculty: examDetails.facultyId,
            status: 'Scheduled',
            archive: false,
        })
        return addExam
    }

    const getExams = async (facultyId: string) => {
        const GetExams = await Exam.find({ faculty: facultyId })
        console.log(GetExams)
        return GetExams;

    }

    return {
        AddExam,
        getExams,
    }

}

export type ExamRepositoryMongoDb = typeof ExamRepositoryMongoDb;
export type ExamRepositoryMongoDbReturn = ReturnType<ExamRepositoryMongoDb>;