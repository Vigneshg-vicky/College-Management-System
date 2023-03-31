import React, { useState } from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import CollegeSearch from '../../Components/admin/searchBox'
import FacultyTable from '../../Components/Cards/facultyData'
import NavBar from '../../Components/NavBar/Navbar'
// import { useGetFacultyWithDeptMutation } from '../../Redux/Features/Api/apiSlice'
import { setDepartmentInterface } from '../../Types/VariableInterface'
import './Faculties.css'

const OurFaculties = () => {
    const data = {}
    // const [choice, setChoice] = useState(false)
    // const [FetchDeptData] = useGetFacultyWithDeptMutation();
    const [department, setDepartment] = useState<setDepartmentInterface>()
    const handleSearch = () => {
        console.log('this is handle search with the department', department)

    }
    return (
        <>
            <div className="main ">
                <NavBar />
                <div>
                    <SideBar />
                </div>
                <div className="app-container bg-primary">
                    <div className="search-container">
                        <CollegeSearch handleSearch={handleSearch} department={department} setDepartment={setDepartment} />
                    </div>
                    <div className="table-container">
                        <FacultyTable data={data ?? ''} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFaculties


// import './App.css';

// const App = () => {
//     return (
//         <div className="app-container">
//             <div className="search-container">
//                 <CollegeSearch />
//             </div>
//             <div className="table-container">
//                 <FacultyTable />
//             </div>
//         </div>
//     );
// };

// export App;
