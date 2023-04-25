import NavBar from '../../Components/NavBar/Navbar'
import SideBar from '../../Components/admin/home/sidebar'
import DepartmentTable from '../../Components/Tables/DepartmentTable'

import React from 'react'

const AllDepartments = () => {
    return (
        <>
            <div className='main'>
                <NavBar />
                <div>
                    <SideBar />
                </div>
                <div className="app-container bg-primary">
                    <div className="container" style={{width:'40%'}}>
                        <DepartmentTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDepartments