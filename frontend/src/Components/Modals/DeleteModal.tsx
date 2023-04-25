import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";
import { useDeleteFacultyMutation } from "../../Redux/Features/Api/apiSlice";

const DeleteConfirmationModal = (props: any) => {

    const [errors, seterrors] = useState('')

    const [DeleteFaculty] = useDeleteFacultyMutation();

    const handleClose = () => {
        props.setModal(false)
        seterrors('')
    }

    const handleDelete = async () => {
        try {
            console.log(props.id, 'this is my id here')
            const res = await DeleteFaculty(props.id).unwrap();
            if (res.status === 'success') {
                handleClose();
            }
        } catch (error: any) {
            console.log(error)
            seterrors(error.data.message)
        }
    }


    return (
        <Dialog open={props.modal} onClose={handleClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Are you sure you want to delete {props.name}?
                    <br />
                    <label htmlFor="">{errors}</label>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete} variant="contained" color="error">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmationModal;
