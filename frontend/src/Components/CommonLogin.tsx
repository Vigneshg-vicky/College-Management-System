import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFacultyLoginMutation, useStudentLoginMutation } from '../Redux/Features/Api/apiSlice';
import { useDispatch } from 'react-redux';
import { setStudentToken } from '../Redux/Features/Reducers/studentAuthSlice';
import { setFacultyToken } from '../Redux/Features/Reducers/facultyAuthSlice';


interface UseFormInterface {
  email: string,
  password: string,
  reg_no: string,
}


const StudentLogin = () => {
  const navigate = useNavigate()
  const [student, setStudent] = useState(false)
  const [error, setError] = useState('')

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    // reg_no: yup.string().required(),
    password: yup.string().required('Password is required'),
    ...(!student && { reg_no: yup.string().required('Registration number is required') }),
  });

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<UseFormInterface>({
    resolver: yupResolver(schema)
  })

  const [StudentLogin] = useStudentLoginMutation();
  const [FacultyLogin] = useFacultyLoginMutation();

  const submitHandler = async (data: UseFormInterface) => {
    try {


      console.log(student)
      console.log(data)
      if (!student) {
        const res = await StudentLogin(data).unwrap();
        console.log(res)
        if (res.status === 'success') {
          dispatch(setStudentToken(res));
          navigate('/student/home')
        }
      }
      else if (student) {
        console.log('this is faculty')
        const res = await FacultyLogin(data).unwrap();
        console.log(res)
        if (res.status === 'success') {
          dispatch(setFacultyToken(res));
          navigate('/faculty/home')
        }
      }
    } catch (error: any) {
      console.log(error)
      if (error.status === 401) {
        setError(error.data.message)
      }
    }
  }

  const propsHandler = () => {
    setStudent(!student)
    console.log(student)
    student ? navigate('/student/login') : navigate('/faculty/login')

  }


  return (

    <div className="mx-auto my-8 surface-card p-4 shadow-2 border-round w-full xl:w-4 lg:w-5 md:w-5 sm:w-8">
      <div className="text-center mb-5">
        {student ?
          <>
            <img src="data:image/png;base64,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" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Faculty Login</div>
            <span style={{ color: 'red' }}>{error}</span>
          </>
          :
          <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKWyfQHJvhXRxSwdDIvK2Ynkr0gLysq-i6A&usqp=CAU" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Student Login</div>
            <span style={{ color: 'red' }}>{error}</span>
          </>

        }
      </div>
      <form onSubmit={handleSubmit(submitHandler)} >
        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>

          <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" {...register('email')} />
          <small style={{ color: 'red' }}>
            {errors.email?.message}
          </small>

          {!student ?
            <>
              <label htmlFor="password" className="block text-900 font-medium mb-2">Registration No.</label>
              <InputText type="text" placeholder="Registration No." className="w-full mb-3" {...register('reg_no')} />
              <small style={{ color: 'red' }}>
                {errors.reg_no?.message}
              </small>
            </>
            :
            <>
              <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
              <InputText type="text" placeholder="Registration No." className="w-full mb-3" {...register('password')} />
              <small style={{ color: 'red' }}>
                {errors.password?.message}
              </small>
            </>
          }

          <div className="flex align-items-center justify-content-between mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            {student ?
              <>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" onClick={propsHandler} >Are you a Student?</a>
              </>
              :
              <>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" onClick={propsHandler} >Are you a College Staff?</a>
              </>

            }
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </form>
    </div>

  )
}

export default StudentLogin;