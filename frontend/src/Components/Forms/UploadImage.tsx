import React from 'react'
import { Button } from '@mui/material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUploadStudentImageMutation } from '../../Redux/Features/Api/apiSlice';

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
];

const schema = yup.object().shape({
    profilePic: yup
        .mixed()
        .typeError("Please select a valid image")
        .test("fileType", "Selected file is not an image", (value: any) =>
            Object.entries(value).every((img: any) =>
                SUPPORTED_FORMATS.includes(img[1].type)
            )
        ),
});

const UploadImage = () => {

    const [ImageUpload] = useUploadStudentImageMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<any>({
        resolver: yupResolver(schema)
    })

    const submitHandler = async (data: any) => {
        console.log(data)
        try {
            const res = await ImageUpload(data).unwrap();
            if (res.status === 'success') {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data">
                    <label htmlFor="fileUpload">Choose a file to upload:</label>
                    <input type="file" id="fileUpload" {...register('profilePic')} />
                    <label style={{ color: 'red' }}>{errors.profilePic?.message}</label>
                    <Button variant='contained' type="submit">Upload</Button>
                </form>
            </div>
        </>
    )
}

export default UploadImage

