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


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/login' element={<LoginPage />} />
        <Route path='/faculty/login' element={<FacultyLogin />} />
        <Route path='/student/login' element={<StudentLogin />} />
      </Routes>
    </Router>
  )
}

export default App
