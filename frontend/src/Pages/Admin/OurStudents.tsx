import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SideBar from '../../Components/admin/home/sidebar'
import CollegeSearch from '../../Components/admin/searchBox'
import FacultyTable from '../../Components/Cards/facultyData'
import NavBar from '../../Components/NavBar/Navbar'
import { useGetStudentWithDeptQuery } from '../../Redux/Features/Api/apiSlice'
import { setDepartmentInterface } from '../../Types/VariableInterface'
import './Faculties.css'

const OurStudents = () => {
    // const dispatch = useDispatch();
    // const [choice, setChoice] = useState(false)
    const [department, setDepartment] = useState<setDepartmentInterface>()
    const { data, isLoading, isSuccess } = useGetStudentWithDeptQuery(department)
    const handleSearch = async () => {

        console.log('this is data', data)


    }

    return (
        <>
            <div className="main ">
                <NavBar />
                <div>
                    <SideBar />
                </div>
                <div className="app-container">
                    <div className="search-container">
                        <CollegeSearch department={department} handleSearch={handleSearch} setDepartment={setDepartment} />
                    </div>
                    <div className="table-container">
                        <FacultyTable data={data?.students.length > 0 ? data.students : []} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStudents;