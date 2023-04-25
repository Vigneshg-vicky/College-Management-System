import { useState } from "react";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from "@mui/material";

const exam = {
    id: 1,
    subject: "Mathematics",
    examCode: "MATH101",
    status: "Scheduled",
    totalMarks: 100,
    passMark: 50
};

const subjects = [
    {
        id: 1,
        name: "Mathematics",
    },
    {
        id: 2,
        name: "Science",
    },
    {
        id: 3,
        name: "English",
    },
];

const EditExamForm = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedExam, setEditedExam] = useState(exam);

    const handleEditExam = (editedExam: any) => { };
    const [subject, setSubject] = useState(exam.subject);
    const [examCode, setExamCode] = useState(exam.examCode);
    const [status, setStatus] = useState(exam.status);
    const [totalMarks, setTotalMarks] = useState(exam.totalMarks);
    const [passMark, setPassMark] = useState(exam.passMark);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const editedExam = {
            ...exam,
            subject: subject,
            examCode: examCode,
            status: status,
            totalMarks: totalMarks,
            passMark: passMark,
        };
        handleEditExam(editedExam);
    };

    const handleCancelEdit = () => {
        props.setModal(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <InputLabel id="subject-select-label">Subject</InputLabel>
                        <Select
                            labelId="subject-select-label"
                            id="subject-select"
                            value={subject}
                            onChange={(event: any) => setSubject(event.target.value)}
                        >
                            {subjects.map((subject) => (
                                <MenuItem value={subject.name} key={subject.id}>
                                    {subject.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="exam-code-input"
                        label="Exam Code"
                        value={examCode}
                        onChange={(event: any) => setExamCode(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="total-marks-input"
                        label="Total Marks"
                        value={totalMarks}
                        onChange={(event: any) => setTotalMarks(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="pass-marks-input"
                        label="Passing Marks"
                        value={passMark}
                        onChange={(event: any) => setPassMark(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="status-select-label">Status</InputLabel>
                        <Select
                            labelId="status-select-label"
                            id="status-select"
                            value={status}
                            onChange={(event: any) => setStatus(event.target.value)}
                        >
                            <MenuItem value="Scheduled">Scheduled</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Edit Exam
                    </Button>
                    <Button className="ml-3" variant="contained" onClick={() => handleCancelEdit()}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EditExamForm;