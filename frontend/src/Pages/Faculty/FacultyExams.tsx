import { Button } from "@mui/material"
import ExamTable from "../../Components/Tables/ExamTable"
import ExamForm from "../../Components/Forms/AddExamForm"
import EditModal from '../../Components/Modals/EditModal'
import { useState } from "react"
import { useGetSubjectsQuery, useGetExamsQuery } from "../../Redux/Features/Api/apiSlice"


const FacultyExams = () => {
    const [modal, setModal] = useState(false)
    const { data, isLoading, isSuccess, isError, error, refetch } = useGetSubjectsQuery()
    const { data: exams } = useGetExamsQuery();
    if (isLoading) {
        console.log('loading')
        return <div>Loading...</div>
    } else if (isError) {
        console.log('this is the error')
        console.log(error)
        return <div>Error: {error}</div>
    } else if (isSuccess) {
        console.log('this is datasssss', exams)
        console.log(data.getDepartment?.Subjects)
        const thisData = data.getDepartment?.Subjects;
        return (
            <>
                <div className="second-nav w-full px-5">
                    <div className="exambox">
                        <h3>Exams</h3>
                        <div className="exambutton">

                            <Button variant="contained" onClick={() => setModal(true)}>Create</Button>
                        </div>
                    </div>
                    <div className="searchBox">
                        <div className="searchbar">

                        </div>
                        <div className="filter">

                        </div>
                    </div>
                </div>
                <hr className="m-5" />
                <div className="table px-5">
                    <ExamTable exam={exams} />
                </div>
                <EditModal modal={modal} setModal={setModal} >
                    <ExamForm modal={modal} setModal={setModal} subject={thisData} refetch={refetch} />  {/* Add Exam */}
                </EditModal>

            </>
        )
    }
}

export default FacultyExams