import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useGetExamsQuery } from '../../Redux/Features/Api/apiSlice';


const exams = [
    {
        id: 1,
        subject: 'Mathematics',
        date: '2023-05-01',
        time: '09:00 AM',
        totalMarks: 100,
    },
    {
        id: 2,
        subject: 'English',
        date: '2023-05-03',
        time: '11:00 AM',
        totalMarks: 80,
    },
    {
        id: 3,
        subject: 'Science',
        date: '2023-05-05',
        time: '10:00 AM',
        totalMarks: 120,
    },
    {
        id: 4,
        subject: 'Social Studies',
        date: '2023-05-07',
        time: '01:00 PM',
        totalMarks: 90,
    },
];


const ExamTable = () => {

    const { data, isLoading, isSuccess, isError, error } = useGetExamsQuery();
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (isSuccess) {
        console.log(data)
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ '& tr:first-child th': { fontWeight: 'bold' } }}>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Total Marks</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exams.map((exam, index) => (
                            <TableRow key={exam.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{exam.subject}</TableCell>
                                <TableCell>{exam.date}</TableCell>
                                <TableCell>{exam.time}</TableCell>
                                <TableCell>{exam.totalMarks}</TableCell>
                                <TableCell>Sheduled</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else if (isError) {
        if (error.status === 'FETCH_ERROR') {
            return <p>Error: Data is not reached. Try after reloading server</p>;
        } else {
            return <p>Error: {error.error}</p>;

        }
    }
}

export default ExamTable