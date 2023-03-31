import React, { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import StudentLogin from '../../Components/CommonLogin'
import { selectFacultyAuth } from '../../Redux/Features/Reducers/facultyAuthSlice'
import { selectStudentAuth } from '../../Redux/Features/Reducers/studentAuthSlice'


const Login = () => {

  return (
    <div>
      <StudentLogin />
    </div>
  )
}

export default Login