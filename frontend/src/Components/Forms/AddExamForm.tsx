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
                    {props?.subject.map((subject: any) => (
                        <MenuItem key={subject.subjectName} value={subject.subjectName}>{subject.subjectName}</MenuItem>
                    ))}
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
                value={endTime}
                onChange={(newValue) => {
                    setEndTime(newValue);
                }}
                renderInput={(params: any) => (
                    <TextField
                        {...params}
                        InputProps={{
                            inputProps: {
                                format: "hh:mm a"
                            }
                        }}
                    />
                )}
            /> */}
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