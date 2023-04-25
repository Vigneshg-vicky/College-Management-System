import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAdminToken } from '../../../Redux/Features/Reducers/adminAuthSlice';

export default function SideBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    console.log("dcbjdb");
    dispatch(deleteAdminToken())
    navigate('/admin/login')
  }

  return (
    <div className="card">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        {/* <h2>Sidebar</h2> */}
        <Button onClick={() => navigate('/admin/home')} className='w-full m-1'>Home</Button>
        <Button onClick={() => navigate('/admin/add-student')} className='w-full m-1'>Add Student</Button>
        <Button onClick={() => navigate('/admin/add-faculty')} className='w-full m-1'>Add Faculty</Button>
        <Button onClick={() => navigate('/admin/add-subject')} className='w-full m-1'>Add Subject</Button>
        <Button onClick={() => navigate('/admin/add-department')} className='w-full m-1'>Add Department</Button>
        <Button onClick={() => navigate('/admin/departments')} className='w-full m-1'>My Departments</Button>
        <Button onClick={() => navigate('/admin/subjects')} className='w-full m-1'>Subjects</Button>
        <Button onClick={() => navigate('/admin/faculties')} className='w-full m-1'>Our Faculties</Button>
        <Button onClick={() => navigate('/admin/students')} className='w-full m-1'>Our Students</Button>
        <Button onClick={handleLogOut} className='w-full m-1'>Logout</Button>
      </Sidebar>
      <Button style={{ marginLeft: '10px' }} icon="pi pi-th-large" onClick={() => setVisible(true)} />
    </div>
  )
}
