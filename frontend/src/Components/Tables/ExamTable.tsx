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

const ExamTable = () => {
  // const [mainCheck, setmainCheck] = useState(false)
  const mainCheck = false;
  const [rows, setRows] = useState([
    {
      id: 1,
      subject: "Math",
      examCode: "MATH101",
      state: "Scheduled",
      totalMarks: 100,
      passingMarks: 50,
      editStatus: 'Due',
      checked: false,
    },
    {
      id: 2,
      subject: "Science",
      examCode: "SCI101",
      state: "Completed",
      totalMarks: 100,
      passingMarks: 50,
      editStatus: "Scheduled",
      checked: false,
    },
    {
      id: 3,
      subject: "English",
      examCode: "ENG101",
      state: "Cancelled",
      totalMarks: 100,
      passingMarks: 50,
      editStatus: "Scheduled",
      checked: false,
    },
  ]);

  const handleMainCheckboxChange = (event: any) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // Update all rows with the checked value of the first checkbox
      const newRows = rows.map((row) => {
        return { ...row, checked: true };
      });
      setRows(newRows);
    }else {
      const newRows = rows.map((row) => {
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
      const newRows = rows.map((row) => {
        return { ...row, checked: true };
      });
      setRows(newRows);
    } else {
      // Update the checked value of a specific row
      const newRows = rows.map((row) => {
        if (row.id === rowId) {
          return { ...row, checked: isChecked };
        }
        return row;
      });
      setRows(newRows);
    }
  };
  const handleEditStatusChange = (event: any, rowId: string) => {
    const newRows = rows.map((row: any) => {
      if (row.id === rowId) {
        return { ...row, editStatus: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

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
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={row.checked || false}
                  onChange={(event) => handleCheckboxChange(event, row.id)}
                />
              </TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.examCode}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.totalMarks}</TableCell>
              <TableCell>{row.passingMarks}</TableCell>
              <TableCell>
                <FormControl variant="outlined" size="small">
                  <InputLabel>Edit Status</InputLabel>
                  <Select
                    value={row.editStatus}
                    onChange={(event) => handleEditStatusChange(event, row.id)}
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
                    <MenuItem value="Due">Due</MenuItem>
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
