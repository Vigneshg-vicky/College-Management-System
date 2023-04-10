import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useEditFacultyMutation } from '../../Redux/Features/Api/apiSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '25ch',
        },
    },
    imagePreview: {
        display: 'flex',
        justifyContent: 'center',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
];

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.string().matches(phoneRegExp, 'Not a valid number'),
    profilePic: yup
        .mixed()
        .typeError("Please select a valid image")
        .test("fileType", "Selected file is not an image", (value: any) =>
            Object.entries(value).every((img: any) =>
                SUPPORTED_FORMATS.includes(img[1].type)
            )
        ),
});

const UploadForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<any>({
        resolver: yupResolver(schema)
    })

    const [EditFaculty] = useEditFacultyMutation()

    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleContactNumberChange = (event: any) => {
        const value = event.target.value;
        register('number', { required: true, value: value, pattern: phoneRegExp });
        setContactNumber(value);
        console.log(value)
    }

    const submitHandler = async (data: any) => {
        try {
            console.log('this is data', data)

            const { profilePic, name, email, number } = data;
            const formData: any = new FormData();
            formData.append('profilePic', profilePic[0])
            formData.append('number', number)
            formData.append('email', email)
            formData.append('name', name)

            const res = await EditFaculty(formData).unwrap();
            if (res.status === 'success') {
            setContactNumber('')
            console.log(res)
            console.log('success')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={classes.root} style={{ margin: '2px' }} onSubmit={handleSubmit(submitHandler)}>
            <div className={classes.imagePreview} style={{ margin: '2px' }}>
                {file && <img src={URL.createObjectURL(file)} alt="Uploaded file" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
            </div>
            <Grid container spacing={2} className={classes.inputContainer}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">Upload a file and enter your details</Typography>
                </Grid>
                <Grid item xs={12}>
                    <input type="file" id="fileInput" {...register('profilePic')} />
                </Grid>
                <label style={{ color: 'red' }}>{errors.profilePic?.message}</label>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="nameInput"
                        label="Name"
                        variant="outlined"

                        {...register('name')}
                    />
                    <label style={{ color: 'red' }}>{errors.name?.message}</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoFocus
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        {...register("email")}
                    />
                    <label style={{ color: 'red' }}>{errors.email?.message}</label>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        value={contactNumber}
                        fullWidth
                        id="contactNumberInput"
                        label="Contact Number"
                        variant="outlined"
                        onChange={handleContactNumberChange}
                    />
                    <label style={{ color: 'red' }}>{errors.number?.message}</label>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default UploadForm;
