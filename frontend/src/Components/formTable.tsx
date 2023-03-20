import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddStudentMutation, useGetDepartmentQuery } from '../Redux/Features/Api/apiSlice';
import { FormTablePayload } from '../Types/payloadInterface';
import { IDepartmentResponse } from '../Types/ResponseInterface';
// import yupre

const FormSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(4).required(),
    // department: yup.string().required(),
    date: yup.string().required(),
    contact_no: yup.number().required(),
    // gender: yup.string().required(),
    // dob: yup.date().required(),
    // father: yup.string().min(4).required(),
    // father_no: yup.string().min(4).required(),
})



const FormTable = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<FormTablePayload>({
        resolver: yupResolver(FormSchema)
    })

    const [AddStudent] = useAddStudentMutation();

    const { data, isLoading, isSuccess, isError, refetch, error, isFetching } = useGetDepartmentQuery();

    const [selectedGender, setSelectedGender] = useState();
    const [selectedDepartment, setSelectedDepartment] = useState<string>()
    // console.log(data)

    const submitHandler = async (data: FormTablePayload) => {
        try {
            data.department = selectedDepartment;
            data.gender = selectedGender;
            const res = await AddStudent(data).unwrap();
            if (res.status == 'success') {
                console.log('object')
            }
        } catch (error) {
        }
    }


    const gender = [
        { gender: 'Male' },
        { gender: 'Female' },
        { gender: 'Other' }
    ];

    return (
        // <div className="container h-10">
        <div className='box w-6 flex-column h-10 bg-primary border-round-md'>
            <div>
                <h4 className='text-center'>Student Details</h4>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='grid w-full justify-content-between pl-8 mx-5 text-900'>
                    <div className='pl-5  col-6'>
                        <label htmlFor="name" className="block text-900 font-medium mb-2">name</label>
                        <InputText id="name" type="text" placeholder="Student Name " className="w-5 mb-3" {...register("name")} />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Student Name " className="w-5 mb-3" {...register("email")} />
                        <small className="authErrors">
                            {errors.email?.message}
                        </small>
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="department" className="block text-900 font-medium mb-2">Department</label>
                        <Dropdown value={selectedDepartment} placeholder="Select Department" onChange={(e) => setSelectedDepartment(e.value)} options={data?.Departments} optionLabel='department' />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="date" className="block text-900 font-medium mb-2">Joining Date</label>
                        <InputText id="date" type="date" placeholder="Student Name " className="w-5 mb-3" {...register("date")} />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="number" className="block text-900 font-medium mb-2">Contact Number</label>
                        <InputText id="number" type="number" placeholder="Student Name " className="w-5 mb-3" {...register("contact_no")} />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="gender" className="block text-900 font-medium mb-2">Gender</label>
                        <Dropdown value={selectedGender} options={gender} optionLabel="gender" placeholder="Select a City" onChange={(e) => setSelectedGender(e.value)} />
                    </div>
                    <div className='w-full align-items-center left-6 ml-8'>
                        <Button type='submit' label="Sign In" icon="pi pi-user" className="w-6 m-5 bg-white text-primary" />
                    </div>
                </div>
            </form>
        </div>
        // </div>

    )
}

export default FormTable;