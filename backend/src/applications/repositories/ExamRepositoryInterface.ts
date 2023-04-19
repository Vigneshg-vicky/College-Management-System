import { ExamRepositoryMongoDbReturn } from "../../frameworks/database/mongoDB/repository/ExamRepositoryMongoDb";
import { examDetails } from "../../types/ExamInterface";

export const ExamDbRepository = (repository: ExamRepositoryMongoDbReturn) => {
    const AddExam = async (ExamDetails: examDetails) => await repository.AddExam(ExamDetails);
    const GetExams = async (facultyId: string) => await repository.getExams(facultyId);
    return {
        AddExam,
        GetExams
    }
}

export type ExamDbInterface = typeof ExamDbRepository;