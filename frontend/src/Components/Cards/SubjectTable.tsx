import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useEditSubjectMutation } from '../../Redux/Features/Api/apiSlice';




function SubjectTable({ data, department }: { data: any, department: any }) {
    const [EditExam] = useEditSubjectMutation();
    console.log(data, 'inside subject table')

    const handleEditClick = async (id: any) => {
        // TODO: Handle edit click
        try {
            const res = await EditExam({ subjectId: id, departmentId: department }).unwrap();
            if(res.status === 'success') {
                console.log('hello')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleDeleteClick = (id: any) => {
        // TODO: Handle delete click
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="subject table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subject Name</TableCell>
                        <TableCell align="right">Subject Code</TableCell>
                        <TableCell align="right">Total Number of Lectures</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((subject: any) => (
                        <TableRow key={subject._id}>
                            <TableCell component="th" scope="row">
                                {subject.subjectName}
                            </TableCell>
                            <TableCell align="right">{subject.subjectCode}</TableCell>
                            <TableCell align="right">{subject.totalLecture}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="edit" onClick={() => handleEditClick(subject._id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDeleteClick(subject._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SubjectTable;
