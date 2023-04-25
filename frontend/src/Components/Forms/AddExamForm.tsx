import { useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useAddExamsMutation } from "../../Redux/Features/Api/apiSlice";

// import { TimePicker } from '@mui/x-date-pickers';

const ExamForm = (props: any) => {

    const [AddExam] = useAddExamsMutation();
    // const [startTime, setStartTime] = useState(null);
    // const [endTime, setEndTime] = useState(null);

    const [examType, setExamType] = useState("");
    const [subject, setSubject] = useState("");
    // const [date, setDate] = useState("");
    const [totalMark, setTotalMarks] = useState("");
    const [examCode, setExamCode] = useState("");
    const [passMark, setPassingMarks] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [date, setDate] = useState("");

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };


    const handleExamTypeChange = (event: any) => {
        setExamType(event.target.value);
    };

    const handleSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    // const handleDateChange = (event: any) => {
    //     setDate(event.target.value);
    // };

    const handleTotalMarksChange = (event: any) => {
        setTotalMarks(event.target.value);
    };

    const handleExamCodeChange = (event: any) => {
        setExamCode(event.target.value);
    };

    const handlePassingMarksChange = (event: any) => {
        setPassingMarks(event.target.value);
    };

    const handleExamStartTime = (event: any) => {
        setStart(event.target.value)
    }

    const handleExamEndTime = (event: any) => {
        setEnd(event.target.value)
    }

    const SubmitHandler = async (e: any) => {
        e.preventDefault();
        const data = {
            examType,
            examCode,
            passMark,
            totalMark,
            subject,
        }
        const res = await AddExam(data).unwrap();
        if (res.status === 'success') {
            props.refetch();
            props.setModal(false)
        }
    }

    return (
        <form onSubmit={SubmitHandler}>
            <FormControl fullWidth margin="normal">
                <InputLabel variant="outlined" id="exam-type-label">Exam Type</InputLabel>
                <Select
                    labelId="exam-type-label"
                    id="exam-type"
                    value={examType}
                    error={Boolean(examType == '')}
                    onChange={handleExamTypeChange}
                >
                    <MenuItem value="midterm">Midterm</MenuItem>
                    <MenuItem value="final">Final</MenuItem>
                    <MenuItem value="quiz">Quiz</MenuItem>
                </Select>
                {examType == '' ? <label style={{ color: 'red' }}>Select a value</label> : ""}
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="subject-label">Subject</InputLabel>
                <Select
                    labelId="subject-label"
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                >
                    {props?.subject.map((subject: any) => (
                        <MenuItem key={subject.subjectName} value={subject.subjectName}>{subject.subjectName}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                fullWidth
                margin="normal"
                id="total-marks"
                label="Total Marks"
                type="number"
                value={totalMark}
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
                id="starting-time"
                label="Start Time"
                value={start}
                onChange={handleExamStartTime}
            />
            <TextField
                fullWidth
                margin="normal"
                id="end-time"
                label="Ending Time"
                value={end}
                onChange={handleExamEndTime}
            />
            <TextField
                fullWidth
                margin="normal"
                id="date"
                label="Date"
                type="date"
                value={date}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                fullWidth
                margin="normal"
                id="passing-marks"
                label="Passing Marks"
                type="number"
                value={passMark}
                onChange={handlePassingMarksChange}
            />
            <Button type="submit" sx={{ marginTop: 2 }} variant="contained">Add Exam</Button>
        </form>
    );
};

export default ExamForm;