import { useState } from 'react';
import {
    TextField,
    Button,
    Box
} from '@mui/material';

const DepartmentForm = (props: any) => {
    const [departmentName, setDepartmentName] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // props.onSubmit(departmentName);
    };

    const handleDepartmentNameChange = (event: any) => {
        setDepartmentName(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="department-name"
                label="Department Name"
                variant="outlined"
                value={departmentName}
                onChange={handleDepartmentNameChange}
                fullWidth
                margin="normal"
            />
            <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default DepartmentForm;
