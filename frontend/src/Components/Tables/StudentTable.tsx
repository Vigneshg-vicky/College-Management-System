import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { bool } from 'yup';

// function createData(
//     name: string,
//     number: string | number,
// ) {
//     return { name, number };
// }

const rows = [
    { name: 'Name', number: 'Vignesh G' },
    { name: 'Email', number: 'vickyggnair007@gmail.com' },
    { name: 'Registration No.', number: 'FAC2023-000-001' },
    { name: 'Joining Year    ', number: '2023' },
    { name: 'Department', number: 'Bsc Computer Science' },
    { name: 'Contact Number', number: '7034258768' },
];

export default function AccessibleTable({ data }: { data: any }) {
    console.log(data)
    const { name, email, phone, department, designation } = data;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450, maxWidth: 600, border: 2 }} aria-label="caption table">
                {/* <caption>A basic table example with a caption</caption> */}
                <TableHead>
                    <TableRow>
                        <h1 className='text-right'>Details</h1>
                        {/* <TableCell sx={{ fontWeight: 900 }}>Student Details</TableCell>/
                        <TableCell align="center">Calories</TableCell> */}
                        {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => ( */}
                    <TableRow>
                        <TableCell align='left' component="th" scope="row">
                            Name
                        </TableCell>
                        <TableCell align="right">
                            {name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' component="th" scope="row">
                            Email
                        </TableCell>
                        <TableCell align="right">
                            {email}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' component="th" scope="row">
                            Designation
                        </TableCell>
                        <TableCell align="right">
                            {designation}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' component="th" scope="row">
                            Department
                        </TableCell>
                        <TableCell align="right">
                            {department}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' component="th" scope="row">
                            Contact Number
                        </TableCell>
                        <TableCell align="right">
                            {phone}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
