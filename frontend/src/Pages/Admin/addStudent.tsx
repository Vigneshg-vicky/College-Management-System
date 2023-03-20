import React from 'react'
import { Form } from 'react-router-dom'
import SideBar from '../../Components/admin/home/sidebar'
import Adminlogin from '../../Components/admin/login'
import FormTable from '../../Components/formTable'
import NavBar from '../../Components/NavBar/Navbar'

const AddStudent = () => {
    return (
        <div className='main'>
            <NavBar />
            <div>
                <SideBar />
            </div>
            <div className="container h-16 pb-6">
                <FormTable/>
            </div>
        </div>
    )
}

export default AddStudent