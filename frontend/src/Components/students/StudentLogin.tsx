import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link, Navigate } from 'react-router-dom';

const StudentLogin = () => {
  return (

    <div className="mx-auto my-8 surface-card p-4 shadow-2 border-round w-full xl:w-4 lg:w-5 md:w-5 sm:w-8">
      <div className="text-center mb-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKWyfQHJvhXRxSwdDIvK2Ynkr0gLysq-i6A&usqp=CAU" alt="hyper" height={50} className="mb-3" />
        <div className="text-900 text-3xl font-medium mb-3">Student Login</div>
      </div>

      <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" placeholder="Password" className="w-full mb-3" />

        <div className="flex align-items-center justify-content-between mb-6">
          <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
          <Link className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" to={'/faculty/login'} >Are you a College Staff?</Link>
        </div>

        <Button label="Sign In" icon="pi pi-user" className="w-full" />
      </div>
    </div>

  )
}

export default StudentLogin;