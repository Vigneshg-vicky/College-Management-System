import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import * as yup from 'yup';
import React, { useState } from 'react'
import { useAddSubjectMutation, useGetDepartmentQuery } from '../../Redux/Features/Api/apiSlice'
import { setDepartmentInterface } from '../../Types/VariableInterface'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubjectFormPayload } from '../../Types/payloadInterface';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
    name: yup.string().required(),
    code: yup.string().required(),
    total: yup.number().required().typeError('total lecture is required as number'),
})

const AddSubject = () => {

    const [department, setDepartment] = useState<setDepartmentInterface>()
    const [error, setError] = useState('');
    const [addSubject] = useAddSubjectMutation();

    const { register, handleSubmit, formState: { errors } } = useForm<SubjectFormPayload>({
        resolver: yupResolver(schema)
    })
    
    const { data } = useGetDepartmentQuery();

    const submitHandler = async (data: SubjectFormPayload) => {
        try {
            data.department = department?._id;
            console.log(data)
            const res: any = await addSubject(data).unwrap();
            if (res.status === 'success') {
                toast('Subject Added');
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='box bg-primary w-4 h-full'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='grid justify-content-center text-center p-5'>
                    <div className="input col-6">
                        <label htmlFor="">Subject Name</label><br />
                        <InputText {...register('name')} /><br />
                        <small style={{ color: 'red' }}>
                            {errors.name?.message}
                        </small>
                    </div>
                    <div className="input col-6">
                        <label htmlFor="">Subject Code</label><br />
                        <InputText className='uppercase' {...register('code')} /><br />
                        <small style={{ color: 'red' }}>
                            {errors.code?.message}
                        </small>
                    </div>
                    <div className='input col-6' style={{ minWidth: '46.5px !important' }}>
                        <label htmlFor="department" className="block font-medium">Department</label>
                        <Dropdown  value={department} placeholder="Select Department" onChange={(e) => setDepartment(e.value)} options={data?.Departments} optionLabel='department' />

                    </div>
                    <div className="input col-6">
                        <label htmlFor="">Total Lectures</label><br />
                        <InputText {...register('total')} /><br />
                        <small style={{ color: 'red' }}>
                            {errors.total?.message}
                        </small>
                    </div>
                    <div className='input col-6'>
                        <Button type={'submit'} label='Add Subject' className="w-8 m-5 bg-white text-primary mr-8" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSubject