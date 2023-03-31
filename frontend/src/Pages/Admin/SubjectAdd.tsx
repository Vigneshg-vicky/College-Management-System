import React from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import NavBar from '../../Components/NavBar/Navbar'
import SubjectAdd from '../../Components/Cards/AddSubject'
const AddSubject = () => {
  return (
    <div className="main ">
      <NavBar />
      <div>
        <SideBar />
      </div>
      <div className="container flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <SubjectAdd />
      </div>
    </div>
  )
}

export default AddSubject