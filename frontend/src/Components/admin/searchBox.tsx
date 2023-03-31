import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dispatch, useState } from 'react';
import * as yup from 'yup'
import { useGetDepartmentQuery } from '../../Redux/Features/Api/apiSlice';
import { setDepartmentInterface } from '../../Types/VariableInterface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface PropsInterface {
    department: any,
    setDepartment: Dispatch<React.SetStateAction<setDepartmentInterface | undefined>>,
    // choice:boolean,
    // setChoice:Dispatch<React.SetStateAction<boolean>>,
    handleSearch: () => void,
}

interface Department {
    name: string;
    code: string;
}

// const schema = yup.object().shape({
//     department: yup.string().nullable().required('Please select a department'),
// });

const CollegeSearch = (props: PropsInterface) => {

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    // });

    const { data }: any = useGetDepartmentQuery();

    const handleSearch = () => {

    };

    return (
        <div className="p-fluid">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="p-field mb-5">
                <label htmlFor="department">Department</label>
                <Dropdown
                    id="department"
                    value={props.department}
                    options={data?.Departments}
                    optionLabel="department"
                    placeholder="Select a department"
                    onChange={(e) => props.setDepartment(e.value)}
                // {...register('department')}
                // className={errors.department ? 'p-invalid' : ''}
                />
                {/* <small className="p-error">{errors.department?.message}</small> */}
            </div>
            <div className="p-field">
                <Button label="Search" icon="pi pi-search"
                    onClick={props.handleSearch}
                />
            </div>

            {/* </form> */}
        </div>
    );
};

export default CollegeSearch;
