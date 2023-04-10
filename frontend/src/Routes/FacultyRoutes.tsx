import { Routes, Route } from "react-router-dom";
import NavBar from '../Components/MUI/navbar';
import FacultyHome from "../Pages/Faculty/facultyHome";
import FacultyDashboard from "../Pages/Faculty/FacultyDashboard";
import FacultyExams from "../Pages/Faculty/FacultyExams";
import FacultyAttendance from "../Pages/Faculty/FacultyAttendance";
import FacultyNavbar from "../Components/MUI/FacultyNavBar";

export default function FacultyRoutes() {
    return (
        <div>
            <FacultyNavbar/>
            <Routes>
                <Route path="/">
                    <Route path='home' element={<FacultyHome />} />
                    <Route path='dashboard' element={<FacultyDashboard />} />
                    <Route path='exam' element={<FacultyExams />} />
                    <Route path='attendance' element={<FacultyAttendance />} />
                </Route>
            </Routes>
        </div>
    )
}