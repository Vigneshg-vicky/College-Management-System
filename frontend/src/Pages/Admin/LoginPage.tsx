import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Adminlogin from '../../Components/admin/login'
import { selectAdminAuth } from '../../Redux/Features/Reducers/adminAuthSlice'

const LoginPage = () => {

    const data = useSelector(selectAdminAuth)
    if (!data.token) {
        return (
            <Adminlogin />
        )
    } else {
        return <Navigate to={'/admin/home'} />
    }

}

export default LoginPage