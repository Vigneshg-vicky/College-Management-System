import { useGetExamsQuery } from "../../Redux/Features/Api/apiSlice";
import StudentExam from "../../Components/Tables/StudentExamTable"

const Exam = () => {
    // const {data,isLoading,isSuccess,isError,error} = useGetStudentExamQuery();
    return (
        <>
            <div className="container p-5">
                <div className="table m-4" style={{ width: '80%', minHeight: '20%' }}>
                    <StudentExam />
                </div>
            </div>
        </>
    )
}

export default Exam;