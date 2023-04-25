import React, { useState } from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import CollegeSearch from '../../Components/admin/searchBox'
import NavBar from '../../Components/NavBar/Navbar'
// import { useGetFacultyWithDeptMutation } from '../../Redux/Features/Api/apiSlice'
import { setDepartmentInterface } from '../../Types/VariableInterface'
import FacultyTable from '../../Components/Tables/FacultyTable'
import './Faculties.css'

const OurFaculties = () => {
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
                    <div className='table' style={{width:'85%'}}>
                    <FacultyTable />
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
