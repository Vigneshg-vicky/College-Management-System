import React, { useState } from 'react';
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { useAddFacultyMutation, useGetDepartmentQuery } from '../../Redux/Features/Api/apiSlice'
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FacultyformPayload } from '../../Types/payloadInterface';
import { toast } from 'react-toastify';
import { DesignationInterface, setDepartmentInterface } from '../../Types/VariableInterface';


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
})

const AddFaculty = () => {
    const { data } = useGetDepartmentQuery();
    console.log(data)
    const [Error, setError] = useState('')
    const [SelectedDepartment, setSelectedDepartment] = useState<setDepartmentInterface>()
    const [Designation, setDesignation] = useState<DesignationInterface>()
    const [addFaculty] = useAddFacultyMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FacultyformPayload>({
        resolver: yupResolver(schema)
    })
    const submitHandler = async (data: FacultyformPayload) => {
        try {

            console.log(data)
            data.department = SelectedDepartment?._id;
            data.designation = Designation?.name;
            const res = await addFaculty(data).unwrap();
            if (res.status === 'success') {
                toast('Faculty Added!')
            }
        } catch (error: any) {
            console.log(error)
            setError(error)
            if (error.data.message.split(' ')[0] == 'E11000') {
                console.log('hai this is same email')
                setError('Email already used!')
            }
        }
    }


    const designation = [
        { name: 'HOD' }
    ]
    return (
        <div className='box bg-primary text-center'>
            <h3>Faculty Details</h3>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="grid justify-content-center">

                    <div className='input col-6'>
                        <label htmlFor="">Faculty Name</label><br />
                        <InputText {...register("name")} /><br />
                        <label htmlFor="authError">{errors.name?.message}</label>
                    </div>
                    <div className='input col-6'>
                        <label htmlFor="">Email</label><br />
                        <InputText {...register("email")} /><br />
                        <label htmlFor="authError">{errors.email?.message}</label>
                    </div>
                    <div className='input col-6'>
                        <label htmlFor="department" className="block font-medium">Department</label>
                        <Dropdown value={SelectedDepartment} placeholder="Select Department" onChange={(e) => setSelectedDepartment(e.value)} options={data?.Departments} optionLabel='department' />
                    </div>
                    <div className='input col-6'>
                        <label htmlFor="department" className="block font-medium">Designation</label>
                        <Dropdown value={Designation} placeholder="Select Designation" onChange={(e) => setDesignation(e.value)} options={designation} optionLabel='name' />
                    </div>
                    <div className='input col-6'>
                        <Button type='submit' label="Add Faculty" className="w-6 m-5 bg-white text-primary" />
                    </div>
                </div>
                <label className='text-center' style={{ color: 'red' }} htmlFor="">{Error}</label>
            </form>
        </div>
    )
}

export default AddFaculty