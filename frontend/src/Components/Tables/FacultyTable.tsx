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
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import DeleteConfirmationModal from "../Modals/DeleteModal";
import StudentModal from '../../Components/Modals/EditModal'
import EditFacultyForm from "../Forms/EditFacultyForm";
import { useGetAdminFacultyQuery } from "../../Redux/Features/Api/apiSlice";

const dummyData = [
    {
        id: 1,
        name: "John Doe",
        department: "Mathematics",
        designation: "Professor",
        phoneNumber: "555-1234",
    },
    {
        id: 2,
        name: "Jane Smith",
        department: "Science",
        designation: "Assistant Professor",
        phoneNumber: "555-5678",
    },
];

const FacultyTable = () => {

    const { data, isLoading, isSuccess, isError, error } = useGetAdminFacultyQuery();
    const faculties = data?.allFaculty;
    const [facultyData, setFacultyData] = useState<any>();
    const [Id, setId] = useState<any>('');
    const [deleteId, setDeleteId] = useState<any>('');

    const deleteFaculty = async () => {

    }



    // const [faculties, setFaculties] = useState(dummyData);
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleEdit = (FacultyDetails: any) => {
        // handle edit logic here
        setModal(true)
        setFacultyData(FacultyDetails)
        console.log(facultyData, 'this is my faculty Data')
    };

    const handleDelete = (id: any, name: string) => {
        // handle delete logic here
        setDeleteModal(true)
        setId(name)
        setDeleteId(id)
        console.log(deleteId)

    };
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (isSuccess) {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <b>Name</b>
                                </TableCell>
                                <TableCell>
                                    <b>Department</b>
                                </TableCell>
                                <TableCell>
                                    <b>Designation</b>
                                </TableCell>
                                <TableCell>
                                    <b>Phone Number</b>
                                </TableCell>
                                <TableCell>
                                    <b>Email</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>Actions</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {faculties.map((faculty: any) => (
                                <TableRow key={faculty._id}>
                                    <TableCell>{faculty.name}</TableCell>
                                    <TableCell>{faculty.department}</TableCell>
                                    <TableCell>{faculty.designation}</TableCell>
                                    <TableCell>{faculty.phone}</TableCell>
                                    <TableCell>{faculty.email}</TableCell>
                                    <TableCell align="center">
                                        <IconButton color="primary" onClick={() => handleEdit({ id: faculty._id, name: faculty.name, department: faculty.department, phone: faculty.phone, email: faculty.email })}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error" onClick={() => handleDelete(faculty._id, faculty.name)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <StudentModal modal={modal} setModal={setModal}>
                    <EditFacultyForm data={facultyData} modal={modal} setModal={setModal} />
                </StudentModal>
                <DeleteConfirmationModal modal={deleteModal} name={Id} id={deleteId} setModal={setDeleteModal} handleDelete={deleteFaculty} />
            </>
        );
    }
};

export default FacultyTable;
