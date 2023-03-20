import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AdminOutlet from './AdminOutlet';

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
import Home from './Pages/Admin/Home';
import AddDepartment from './Pages/Admin/AddDepartment';
import { ToastContainer } from 'react-toastify';
import React from "react";
import AddStudent from './Pages/Admin/addStudent';

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

        {/* Protected Routes */}
        <Route path="/" element={<Navigate to="/student/login" />} />
        <Route path='/' element = {<AdminOutlet/>}>
        <Route path='/admin/add-student' element={<AddStudent />} />
        <Route path='/admin/home' element={<Home />} />
        <Route path='/admin/add-department' element={<AddDepartment />} />
        <Route path='/faculty/login' element={<FacultyLogin />} />
        </Route>

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
