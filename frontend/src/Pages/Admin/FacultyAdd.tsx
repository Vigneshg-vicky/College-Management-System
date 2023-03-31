import React from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import AddFaculty from '../../Components/Cards/addFaculty'
import NavBar from '../../Components/NavBar/Navbar'

const FacultyAdd = () => {
    return (
        <div className="main ">
            <NavBar />
            <div>
                <SideBar />
            </div>
            <div className="container flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <AddFaculty />
            </div>
        </div>
    )
}

export default FacultyAdd