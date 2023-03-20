import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { adminLoginPayload } from '../../Types/payloadInterface';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ILoginResponse } from '../../Types/ResponseInterface';
import { useAdminLoginMutation } from '../../Redux/Features/Api/apiSlice';
import { setAdminToken } from '../../Redux/Features/Reducers/adminAuthSlice';
// import yupre

const AdminSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(12).required(),
})



const Adminlogin = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm<adminLoginPayload>({
    resolver: yupResolver(AdminSchema),
  });

  const [verifyLogin,{isLoading}] = useAdminLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState('');
  const submitHandler = async (data: adminLoginPayload) => {
    try {
      setLoading(true)
      const res: ILoginResponse = await verifyLogin(data).unwrap();
      if (res.status === 'success') {
        setLoading(false)
        dispatch(setAdminToken(res));
        navigate('/admin/home')
      }
    } catch (err: any) {
      console.log(err)
      setLoginError(err.data.message)
    }
  };

  return (

    <div className="mx-auto my-8 surface-card p-4 shadow-2 border-round w-full xl:w-4 lg:w-5 md:w-5 sm:w-8">
      <div className="text-center mb-5">
        <img src="https://bst.icons8.com/wp-content/uploads/2020/02/logo-design-process.jpg" alt="hyper" height={50} className="mb-3" />
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" {...register("email")} />
            <small className="authErrors">
              {errors.email?.message}
            </small>
          </div>

          <div>
            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText type="password" placeholder="Password" className="w-full mb-3" {...register("password")} />
            <small className="authErrors">
              {errors.password?.message}
            </small>
          </div>

          <div className="flex align-items-center justify-content-between mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
          </div>
          <div>
            <small className='authErrors'>{loginError}</small>
          </div>

          <Button type='submit' label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </form>
    </div>

  )
}

export default Adminlogin;