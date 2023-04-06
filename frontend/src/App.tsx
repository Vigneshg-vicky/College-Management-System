import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AdminOutlet from './Outlet/AdminOutlet';

import "primeflex/primeflex.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import LoginPage from './Pages/Admin/LoginPage';
import FacultyLogin from './Pages/Faculty/Login';
import StudentLogin from './Pages/Student/Login';
import AdminHome from './Pages/Admin/Home';
import AddDepartment from './Pages/Admin/AddDepartment';
import { ToastContainer } from 'react-toastify';
import React from "react";
import AddStudent from './Pages/Admin/addStudent';
import FacultyAdd from './Pages/Admin/FacultyAdd';
import AddSubject from './Pages/Admin/SubjectAdd';
import Home from './Pages/Student/Home';
import FacultyHome from './Pages/Faculty/facultyHome';
import OurFaculties from './Pages/Admin/OurFaculties';
import OurStudents from './Pages/Admin/OurStudents';
import ProfilePage from './Pages/Student/ProfilePage';
import StudentRoutes from './Routes/StudentRoutes';

export function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
}


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/admin/login' element={<LoginPage />} />
        <Route path='/student/login' element={<StudentLogin />} />
        <Route path='/faculty/login' element={<StudentLogin />} />
        {/* <Route path='/faculty/login' element={<FacultyLogin />} /> */}

        {/* Protected Routes Admin */}
        <Route path='/' element={<AdminOutlet />}>
          <Route path='/admin/add-student' element={<AddStudent />} />
          <Route path='/admin/add-faculty' element={<FacultyAdd />} />
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/admin/add-department' element={<AddDepartment />} />
          <Route path='/admin/add-subject' element={<AddSubject />} />
          <Route path='/admin/faculties' element={<OurFaculties />} />
          <Route path='/admin/students' element={<OurStudents />} />
        </Route>


        <Route path="/" element={<Navigate to="/student/login" />} />

        {/* Protected Student Routes */}

        <Route path="/student/*" element={<StudentRoutes />} />

        {/* <Route path='/student/home' element={<Home />} />
          <Route path='/student/profile' element={<ProfilePage />} /> */}


        <Route path='/faculty/home' element={<FacultyHome />} />


      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  )
}

export default App
