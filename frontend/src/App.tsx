import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/login' element={<LoginPage />} />
        <Route path='/admin/home' element={<Home />} />
        <Route path='/admin/add-department' element={<AddDepartment />} />
        <Route path='/faculty/login' element={<FacultyLogin />} />
        <Route path='/student/login' element={<StudentLogin />} />
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
