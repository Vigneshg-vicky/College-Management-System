import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminOutlet = () => {
    const getAdmin = localStorage.getItem('adminToken')
    if(getAdmin) {
        return (
            <Outlet/>
        )
    }else {
       return <Navigate to={'/admin/login'}/>
    }
}

export default AdminOutlet