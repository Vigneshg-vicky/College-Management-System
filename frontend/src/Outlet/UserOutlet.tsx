import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const StudentOutlet = () => {
    const getStudent = localStorage.getItem('studentToken')
    if (getStudent) {
        return (
            <Outlet />
        )
    } else {
        return <Navigate to={'/student/login'} />
    }
}
export const FacultyOutlet = () => {
    const getFaculty = localStorage.getItem('facultyToken')
    if (getFaculty) {
        return (
            <Outlet />
        )
    } else {
        return <Navigate to={'/faculty/login'} />
    }
}