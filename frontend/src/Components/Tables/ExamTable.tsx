import { useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentModal from "../Modals/EditModal";
import EditExamForm from "../Forms/EditExam";
import { useGetExamWithIdQuery } from "../../Redux/Features/Api/apiSlice";
import DeleteConfirmationModal from "../Modals/DeleteModal";

const ExamTable = ({ exam }: { exam: any }) => {
  const [status, setStatus] = useState('')
  const [deleteModal, setDeleteModal] = useState(false);
  const [Id, setId] = useState('')
  const [modal, setModal] = useState(false)
  const mainCheck = false;
  const [rows, setRows] = useState<any>(exam?.exams);

  const handleEdit = (id: string) => {
    console.log(id, 'this is edut id')
    setId(id)
    setModal(true)
  }

  const { data, isLoading, isSuccess, isError, error } = useGetExamWithIdQuery(Id)

  const handleMainCheckboxChange = (event: any) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // Update all rows with the checked value of the first checkbox
      const newRows = rows?.map((row: any) => {
        return { ...row, checked: true };
      });
      setRows(newRows);
    } else {
      const newRows = rows.map((row: any) => {
        return { ...row, checked: false };
      });
      setRows(newRows);
    }
  }

  const handleDelete = (id: string) => {
    console.log(id, 'this is dekete id')
    setDeleteModal(true)
  }


  const handleCheckboxChange = (event: any, rowId: number) => {
    const isChecked = event.target.checked;
    console.log('this is main checkbox true', mainCheck)
    if (mainCheck) {
      // Update all rows with the checked value of the first checkbox
      const newRows = rows.map((row: any) => {
        return { ...row, checked: true };
      });
      setRows(newRows);
    } else {
      // Update the checked value of a specific row
      const newRows = rows.map((row: any) => {
        if (row._id === rowId) {
          return { ...row, checked: isChecked };
        }
        return row;
      });
      setRows(newRows);
    }
  };
  const handleEditStatusChange = (event: any, rowId: string) => {
    if (event.target.value === 'Completed') {
      setStatus('Completed')
    }
    const newRows = rows.map((row: any) => {
      if (row.id === rowId) {
        return { ...row, editStatus: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };


  return (
    <>
      <TableContainer component={Paper}>
        <Table className="border-3">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox onChange={handleMainCheckboxChange} />
              </TableCell>
              <TableCell>Subject Name</TableCell>
              <TableCell>Exam Code</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Total Marks</TableCell>
              <TableCell>Passing Marks</TableCell>
              <TableCell>Edit Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exam?.exams.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={row.checked ?? false}
                    onChange={(event) => handleCheckboxChange(event, row._id)}
                  />
                </TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.ExamCode}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.TotalMarks}</TableCell>
                <TableCell>{row.passMark}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(row._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(row._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
      <StudentModal modal={modal} setModal={setModal}>
        <EditExamForm />
      </StudentModal>
      <DeleteConfirmationModal modal={deleteModal} setModal={setDeleteModal} />
    </>
  );
};

export default ExamTable;
