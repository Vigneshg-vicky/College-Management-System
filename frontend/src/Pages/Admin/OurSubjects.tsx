import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SideBar from '../../Components/admin/home/sidebar'
import CollegeSearch from '../../Components/admin/searchBox'
import FacultyTable from '../../Components/Cards/facultyData'
import NavBar from '../../Components/NavBar/Navbar'
import { useGetSubjectWithDeptQuery } from '../../Redux/Features/Api/apiSlice'
import { setDepartmentInterface } from '../../Types/VariableInterface'
import './Faculties.css'
import SubjectTable from '../../Components/Cards/SubjectTable'

const OurSubjects = () => {
    // let subjects: any;
    const [subject, setsubject] = useState<any>([])
    const [department, setDepartment] = useState<setDepartmentInterface>()
    const { data, isLoading, isSuccess, isError, error } = useGetSubjectWithDeptQuery(department?._id)
    const handleSearch = async () => {
        console.log(department)
        console.log('this is data', data?.subjects)
        setsubject(data?.subjects)
        console.log(subject, 'this is useEState')
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
                        <SubjectTable data={subject} department={department}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSubjects;