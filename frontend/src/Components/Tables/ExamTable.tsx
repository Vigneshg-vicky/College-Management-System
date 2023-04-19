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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const ExamTable = ({ exam }: { exam: any }) => {
  const [status, setStatus] = useState('')
  const mainCheck = false;
  const [rows, setRows] = useState<any>(exam?.exams);

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
  console.log('this is the data of exams', rows)

  return (
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
                <FormControl variant="outlined" size="small">
                  <InputLabel>Edit Status</InputLabel>
                  <Select
                    value={row.editStatus}
                    disabled={row.editStatus === "Completed"}
                    onChange={(event) => handleEditStatusChange(event, row._id)}
                    label="Edit Status"
                    sx={{
                      minWidth: 120,
                      "& .MuiSelect-select": {
                        fontSize:
                          row.editStatus === "Due" ? "0.75rem" : "0.875rem",
                      },
                    }}
                  >
                    <MenuItem value="Scheduled">Scheduled</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExamTable;
