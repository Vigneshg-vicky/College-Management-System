import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dispatch } from 'react';


const datas = [
    {
        name: "John Doe",
        registrationNumber: "123456",
        department: "Computer Science",
        joiningYear: "2018",
    },
    {
        name: "Jane Doe",
        registrationNumber: "789012",
        department: "Electrical Engineering",
        joiningYear: "2019",
    },
    // Add more data as needed
];

const FacultyTable = ({ data }: { data: any }) => {

    const rowData = data ? data.map((item: any, index: number) => ({
        serialNumber: index + 1,
        name: item.name,
        registrationNumber: item.Reg_No,
        gender: item.gender,
        joiningYear: item.Joining_Year,
    })) : [{}];

    return (
        <DataTable value={rowData} paginator rows={10}>
            <Column field="serialNumber" header="Serial Number" />
            <Column field="name" header="Name" />
            <Column field="registrationNumber" header="Registration Number" />
            <Column field="gender" header="Gender" />
            <Column field="joiningYear" header="Joining Year" />
        </DataTable>
    );
};

export default FacultyTable;
