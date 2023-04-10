import { useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
// import { TimePicker } from '@mui/x-date-pickers-pro/TimePicker';

const ExamForm = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [examType, setExamType] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [totalMarks, setTotalMarks] = useState("");
    const [examCode, setExamCode] = useState("");
    const [passingMarks, setPassingMarks] = useState("");

    const handleExamTypeChange = (event: any) => {
        setExamType(event.target.value);
    };

    const handleSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    const handleDateChange = (event: any) => {
        setDate(event.target.value);
    };

    const handleTotalMarksChange = (event: any) => {
        setTotalMarks(event.target.value);
    };

    const handleExamCodeChange = (event: any) => {
        setExamCode(event.target.value);
    };

    const handlePassingMarksChange = (event: any) => {
        setPassingMarks(event.target.value);
    };

    return (
        <form>
            <FormControl fullWidth margin="normal">
                <InputLabel variant="outlined" id="exam-type-label">Exam Type</InputLabel>
                <Select
                    labelId="exam-type-label"
                    id="exam-type"
                    value={examType}
                    onChange={handleExamTypeChange}
                >
                    <MenuItem value="midterm">Midterm</MenuItem>
                    <MenuItem value="final">Final</MenuItem>
                    <MenuItem value="quiz">Quiz</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="subject-label">Subject</InputLabel>
                <Select
                    labelId="subject-label"
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                >
                    <MenuItem value="math">Math</MenuItem>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="science">Science</MenuItem>
                </Select>
            </FormControl>
            {/* <TimePicker
                label="Start Time"
                inputFormat="hh:mm a"
                value={startTime}
                onChange={(newValue) => {
                    setStartTime(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
            />
            <TimePicker
                label="End Time"
                inputFormat="hh:mm a"
                value={endTime}
                onChange={(newValue) => {
                    setEndTime(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
            /> */}
            <TextField
                fullWidth
                margin="normal"
                id="total-marks"
                label="Total Marks"
                type="number"
                value={totalMarks}
                onChange={handleTotalMarksChange}
            />
            <TextField
                fullWidth
                margin="normal"
                id="exam-code"
                label="Exam Code"
                value={examCode}
                onChange={handleExamCodeChange}
            />
            <TextField
                fullWidth
                margin="normal"
                id="passing-marks"
                label="Passing Marks"
                type="number"
                value={passingMarks}
                onChange={handlePassingMarksChange}
            />
            <Button sx={{ marginTop: 2 }} variant="contained">Add Exam</Button>
        </form>
    );
};

export default ExamForm;