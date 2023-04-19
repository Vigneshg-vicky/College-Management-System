import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddStudentMutation, useGetDepartmentQuery } from '../../Redux/Features/Api/apiSlice';
import { FormTablePayload } from '../../Types/payloadInterface';
import { toast } from 'react-toastify';
import { setDepartmentInterface, setGenderInterface } from '../../Types/VariableInterface';
import { convertDate } from '../../HelperFunctions/dateConverter';
// import yupre

const FormSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(4).required(),
    // department: yup.string().required(),
    date: yup.date().required(),
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

    const [selectedGender, setSelectedGender] = useState<setGenderInterface>();
    const [Error, setError] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState<setDepartmentInterface>()
    console.log(selectedDepartment)

    const submitHandler = async (data: FormTablePayload) => {
        try {
            const convertedDate = convertDate(data.date)
            data.date = convertedDate;
            console.log(data)
            if (selectedDepartment?._id) {
                data.department = selectedDepartment._id;
            }
            data.gender = selectedGender?.gender;
            console.log(data)
            const res = await AddStudent(data).unwrap();
            console.log('this is the result')
            console.log(res)
            if (res.status == 'success') {
                console.log('success')
                toast('Student Added!')
            }
        } catch (error: any) {
            console.log(error)
            if (error.data.message.split(' ')[0] === 'E11000') {
                setError('Student with this email already exists!')
            }
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
                        <InputText id="name" type="text" placeholder="Student Name " className="mb-3" {...register("name")} />
                        <small className="authErrors" style={{ color: 'red' }}> <br />
                            {errors.name?.message}
                        </small>
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Student Name " className=" mb-3" {...register("email")} />
                        <small className="authErrors" style={{ color: 'red' }}><br />
                            {errors.email?.message}
                        </small>
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="department" className="block text-900 font-medium mb-2">Department</label>
                        <Dropdown style={{width:'13rem'}} value={selectedDepartment} placeholder="Select Department" onChange={(e) => setSelectedDepartment(e.value)} options={data?.Departments} optionLabel='department' />
                        <br />
                        {selectedDepartment ?
                            ""
                            :
                            <small className="authErrors" style={{ color: 'red' }}>
                                Select a department!
                            </small>}
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="date" className="block text-900 font-medium mb-2">Joining Date</label>
                        <InputText style={{width:'13rem'}} id="date" type="date" placeholder="Student Name " className="mb-3" {...register("date")} />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="number" className="block text-900 font-medium mb-2">Contact Number</label>
                        <InputText id="number" type="number" placeholder="Student Name " className=" mb-3" {...register("contact_no")} />
                    </div>
                    <div className='pl-5 col-6'>
                        <label htmlFor="gender" className="block text-900 font-medium mb-2">Gender</label>
                        <Dropdown style={{width:'13rem'}} value={selectedGender} options={gender} optionLabel="gender" placeholder="select gender" onChange={(e) => setSelectedGender(e.value)} />
                    </div>
                    <div className='w-full align-items-center left-6 ml-8'>
                        <Button type='submit' label="Add Student" icon="pi pi-user" className="w-6 m-5 bg-white text-primary" />
                    </div>
                    <div className='text-center ml-8'>
                        <label htmlFor="authError" className='text-center' style={{ color: 'red' }}>{Error}</label>
                    </div>
                </div>
            </form>
        </div>
        // </div>

    )
}

export default FormTable;