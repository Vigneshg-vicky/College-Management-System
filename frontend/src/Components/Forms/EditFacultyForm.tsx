import React, { useState } from 'react';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
} from '@mui/material';
import { useGetDepartmentQuery, useEditAdminFacultyMutation } from "../../Redux/Features/Api/apiSlice";

const departments = [
    {
        id: 1,
        name: 'Department 1',
    },
    {
        id: 2,
        name: 'Department 2',
    },
    {
        id: 3,
        name: 'Department 3',
    },
];

const designations = [
    {
        id: 1,
        name: 'Designation 1',
    },
    {
        id: 2,
        name: 'Designation 2',
    },
    {
        id: 3,
        name: 'Designation 3',
    },
];


const EditFacultyForm = (props: any) => {

    const [EditFaculty] = useEditAdminFacultyMutation();

    const { data } = useGetDepartmentQuery();
    console.log(data)

    const [departmentdata, setDepartmentdata] = useState<any>(props?.department);
    const [name, setName] = useState(props.data.name);
    const [department, setDepartment] = useState(props.data.department);
    const [email, setEmail] = useState(props.data.email);
    const [phoneNumber, setPhoneNumber] = useState(props.data.phone);
    const handleClose = () => {
        props.setModal(false)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const res: any = await EditFaculty({ facultyId: props.data.id, name, department, email, phoneNumber }).unwrap();
            console.log(res)
            if (res.status === 'success') {
                handleClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="name-input"
                        label="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="department-select-label">Department</InputLabel>
                        <Select
                            labelId="department-select-label"
                            id="department-select"
                            value={department}
                            onChange={(event) => setDepartment(event.target.value)}
                        >
                            {data?.Departments.map((dept: any) => (
                                <MenuItem value={dept._id} key={dept._id}>
                                    {dept.department}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="name-input"
                        label="Name"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="phone-input"
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                    <Button className="ml-3" variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EditFacultyForm;
