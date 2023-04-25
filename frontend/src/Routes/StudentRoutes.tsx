import { Routes, Route } from "react-router-dom";
import NavBar from '../Components/MUI/navbar';
import Home from '../Pages/Student/Home'
import ProfilePage from "../Pages/Student/ProfilePage";
import Exam from "../Pages/Student/Exam";
import { useGetStudentDataQuery } from "../Redux/Features/Api/apiSlice";

export default function StudentRoutes() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route path='profile' element={<ProfilePage />} />
                    <Route path='exams' element={<Exam />} />
                </Route>
            </Routes>
        </div>
    )
}