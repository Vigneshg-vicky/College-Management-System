import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const styles = {
    table: {
        border: '1px solid #ccc',
        borderCollapse: 'collapse',
    },
    tableHead: {
        fontWeight: 'bold',
    },
    tableContainer: {
        overflowX: 'auto',
    },
};

const ExamTable = () => {
    const exams = [
        {
            examName: 'Math',
            totalMarks: 100,
            percentage: 80,
            grade: 'A',
            status: 'Passed',
        },
        {
            examName: 'English',
            totalMarks: 100,
            percentage: 70,
            grade: 'B',
            status: 'Passed',
        },
        {
            examName: 'Science',
            totalMarks: 100,
            percentage: 90,
            grade: 'A+',
            status: 'Passed',
        },
        {
            examName: 'Social Studies',
            totalMarks: 100,
            percentage: 60,
            grade: 'C',
            status: 'Failed',
        },
    ];

    return (
        <TableContainer sx={styles.tableContainer}>
            <Table sx={styles.table}>
                <TableHead sx={styles.tableHead}>
                    <TableRow>
                        <TableCell>Exam</TableCell>
                        <TableCell>Total Marks</TableCell>
                        <TableCell>Percentage</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exams.map((exam) => (
                        <TableRow key={exam.examName}>
                            <TableCell>{exam.examName}</TableCell>
                            <TableCell>{exam.totalMarks}</TableCell>
                            <TableCell>{exam.percentage}%</TableCell>
                            <TableCell>{exam.grade}</TableCell>
                            <TableCell>{exam.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExamTable;