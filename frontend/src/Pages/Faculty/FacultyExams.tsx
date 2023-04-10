import { Button } from "@mui/material"
import ExamTable from "../../Components/Tables/ExamTable"
import ExamForm from "../../Components/Forms/AddExamForm"
import EditModal from '../../Components/Modals/EditModal'
import { useState } from "react"

const FacultyExams = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className="second-nav w-full px-5">
                <div className="exambox">
                    <h3>Exams</h3>
                    <div className="exambutton">

                        <Button variant="contained" onClick={()=>setModal(true)}>Create</Button>
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
                <ExamTable />
            </div>
            <EditModal modal={modal} setModal={setModal}>
                <ExamForm />
            </EditModal>

        </>
    )
}

export default FacultyExams