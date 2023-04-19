import ActionAreaCard from '../../Components/Cards/UserProfileCard'
import AccessibleTable from '../../Components/Tables/StudentTable'
import { useGetFacultyQuery } from '../../Redux/Features/Api/apiSlice';

const FacultyDashboard = () => {
    const { data, isLoading, isSuccess, isError } = useGetFacultyQuery();
    if (isLoading) {
        console.log('loading...')
        return <div>Loading...</div>
    } else if (isSuccess) {

        const url = data.facultyData?.url
        const facultyData = data.facultyData;
        return (
            <>
                <div className="container h-screen flex justify-content-evenly p-5">
                    <ActionAreaCard url={url} />
                    <div className="contains" style={{ maxWidth: '950' }}>
                        <AccessibleTable data={facultyData} />
                    </div>
                </div>
            </>
        )
    } else {
        return <div>Error loading data...</div>;
    }
}

export default FacultyDashboard