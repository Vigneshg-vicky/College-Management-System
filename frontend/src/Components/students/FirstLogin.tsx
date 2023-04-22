import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSetStudentPasswordMutation } from '../../Redux/Features/Api/apiSlice';
import { useNavigate, Navigate } from 'react-router-dom';
import Home from '../../Pages/Student/Home';

const schema = yup.object().shape({
    newPassword: yup.string().required('this is a required field').min(4, 'Password too short!'),
    confirmPassword: yup.string().required()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
})



const PasswordForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const [ChangePassword] = useSetStudentPasswordMutation();

    const submitHandler = async (data: any) => {
        console.log(data)
        try {
            const res = await ChangePassword(data).unwrap();
            console.log('hello')
            console.log(res)
            if (res.status === 'success') {
                return <Navigate to="/student/home" />;
            }
        } catch (error) {
            console.log('this is error', error)
        }
    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 400,
                height: 300,
                border: 1,
                borderRadius: 1,
                borderColor: 'grey.400',
                padding: 3,
            }}
        >
            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    label="New Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    {...register('newPassword')}
                    error={Boolean(errors.newPassword)}
                    helperText={errors.newPassword?.message || ''}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    {...register('confirmPassword')}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword?.message || ''}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default PasswordForm;
