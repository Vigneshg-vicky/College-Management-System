import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Box } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEditStudentMutation } from '../../Redux/Features/Api/apiSlice';
import { StudentPayload } from '../../Types/payloadInterface';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
    },
    submitButton: {
        alignSelf: 'flex-end',
    },
    cancelButton: {
        alignSelf: 'flex-end',
    },
});

const schema = yup.object().shape({
    name: yup.string().min(4).max(16).required(),
    email: yup.string().email().required(),
    nationality: yup.string().required(),
    mobile: yup.number().required('required field').typeError('Only numbers allowed'),
})

const EditStudentForm = ({ data, modal, setModal }: { data: any, modal: any, setModal: any }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<StudentPayload>({
        resolver: yupResolver(schema)
    })

    const [editStudent] = useEditStudentMutation();

    const classes = useStyles();
    const [name, setName] = useState(data?.student?.name);
    const [email, setEmail] = useState(data?.student?.email);
    const [nationality, setNationality] = useState('Indian');
    const [mobileNumber, setMobileNumber] = useState(data?.student?.Contact_No);
    const [dob, setDob] = useState('');

    const SubmitHandler = async (data: any) => {
        try {

            // Do something with the form data
            data.dob = dob
            console.log('THis is the data', data)
            const res: any = await editStudent(data).unwrap();
            if (res.status === 'success') {
                console.log('success', res)
                setModal(!modal)
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(SubmitHandler)}>
            <TextField
                label="Name"
                // onChange={(event) => setName(event.target.value)}
                {...register('name')}
            />
            <label htmlFor="authError" style={{ color: 'red' }}>{errors.name?.message}</label>
            <TextField
                label="Email"
                type="email"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
                {...register('email')}
            />
            <label htmlFor="authError" style={{ color: 'red' }}>{errors.email?.message}</label>
            <TextField
                label="Nationality"
                value={nationality}
                // onChange={(event) => setNationality(event.target.value)}
                {...register('nationality')}
            />
            <label htmlFor="authError" style={{ color: 'red' }}>{errors.nationality?.message}</label>
            <TextField
                label="Mobile Number"
                type='tel'
                value={mobileNumber}
                // onChange={(event) => setMobileNumber(event.target.value)}
                {...register('mobile')}
            />
            <label htmlFor="authError" style={{ color: 'red' }}>{errors.mobile?.message}</label>
            <TextField
                label="Date of Birth"
                type="date"
                value={data?.student?.Joining_Year}
                onChange={(event) => setDob(event.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Box className={classes.buttonContainer}>
                <Button onClick={() => setModal(false)} variant="contained" color="error" type="button">
                    Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    );
}

export default EditStudentForm;