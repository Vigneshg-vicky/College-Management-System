import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSetStudentPasswordMutation } from "../../Redux/Features/Api/apiSlice";


const schema = yup.object().shape({
    oldPassword: yup.string().required('Password is a required field!'),
    newPassword: yup.string().required('New Password is a required field!').min(4, 'Password too short - atleast 4 characters should be there!'),
    confirmPassword: yup.string().required()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')

})

const ChangePasswordForm = (props: any) => {
    const [error, setError] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const [ChangePassword] = useSetStudentPasswordMutation();

    const submitHandler = async (data: any) => {
        console.log(data)
        try {
            const res = await ChangePassword(data).unwrap();
            if (res.status === 'success') {
                props.setModal(false)
            }
        } catch (error: any) {
            console.log(error.data.message)
            setError(error.data.message)
        }
    }

    return (
        <>
            {/* <div className="text-center">.. */}

            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    label="Current Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    {...register('oldPassword')}
                    error={Boolean(errors.oldPassword)}
                    helperText={errors.oldPassword ? errors.oldPassword.message : " "}
                />
                <TextField
                    label="New Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    {...register('newPassword')}
                    error={Boolean(errors.newPassword)}
                    helperText={errors.newPassword ? errors.newPassword.message : " "}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    {...register('confirmPassword')}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword ? errors.confirmPassword.message : " "}
                />
                <label style={{ color: 'red' }}>{error}</label><br /><br />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
            {/* </div> */}
        </>
    );
}

export default ChangePasswordForm;