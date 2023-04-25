import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentModal from "../Modals/EditModal";
import DeleteConfirmationModal from "../Modals/DeleteModal";
import DepartmentForm from "../Forms/EditDepartmentForm";

const departments = [
    { id: 1, name: "Engineering" },
    { id: 2, name: "Sales" },
    { id: 3, name: "Marketing" },
];

const DepartmentTable = () => {

    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handleEdit = (department: any) => {
        // handle edit logic here
        setModal(true)
    };

    const handleDelete = (department: any) => {
        // handle delete logic here
        setDeleteModal(true)
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Department Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departments.map((department) => (
                            <TableRow key={department.id}>
                                <TableCell>{department.name}</TableCell>
                                <TableCell>
                                    <Tooltip title="Edit">
                                        <IconButton color="primary" onClick={() => handleEdit(department)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton color="error" onClick={() => handleDelete(department)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <StudentModal modal={modal} setModal={setModal}>
                <DepartmentForm />
            </StudentModal>
            <DeleteConfirmationModal modal={deleteModal} setModal={setDeleteModal} />
        </>
    );
};

export default DepartmentTable;
