import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import SideBar from '../../Components/admin/home/sidebar'
import NavBar from '../../Components/NavBar/Navbar'
import './addDepartment.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { departmentPayload } from '../../Types/payloadInterface'
import { useAdminAddDepartmentMutation } from '../../Redux/Features/Api/apiSlice'


const departmentSchema = yup.object().shape({
    department: yup.string().required(),
})



const AddDepartment = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<departmentPayload>({
        resolver: yupResolver(departmentSchema)
    })

    const [addDepartment] = useAdminAddDepartmentMutation();

    const submitHandler = async (data: departmentPayload) => {
        try {
            const res = await addDepartment(data).unwrap();
            console.log('hiiiiiiiiiii')
            console.log(res)
            if (res.status === 'success') {
                toast('Success')
            }
        } catch (err:any) {
            console.log(err.data.message.split(' ')[0])
            if(err.data.message.split(' ')[0] == 'E11000'){
                toast('Department already exists!')
            }
        }
    }

    return (
        <div className='main'>
            <NavBar />
            <div>
                <SideBar />
            </div>
            <div className='container w-full flex justify-content-evenly h-30rem '>
                <div className="box w-4 bg-primary border-round-md py-8 text-center">
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <h4>Department Name</h4>
                        <div className="input h-5rem" style={{ display: 'grid', placeContent: 'center' }}>
                            <InputText id='department' {...register("department")} />
                            <small className="authErrors">
                                {errors.department?.message}
                            </small>
                        </div>
                        <div className="button btn" style={{ display: 'grid', placeContent: 'center' }}>
                            <Button type='submit' label="Add Department" severity="success" icon="pi pi-check" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDepartment