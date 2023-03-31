import React from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import AdminData from '../../Components/Cards/AdminData'
import ProfileCard from '../../Components/Cards/ProfileCard'
import NavBar from '../../Components/NavBar/Navbar'
import { useGetAdminHomeQuery } from '../../Redux/Features/Api/apiSlice'
import './Home.css'

// const datas = {
//   AdminData.email,
//   data.departments,
//   data.faculty,
//   data.students

// }

const AdminHome = () => {


  const { data,isLoading }: any = useGetAdminHomeQuery()
  console.log(data)

  return (
    <div className='main'>
      <NavBar />
      <div className="button">
        <SideBar />
      </div>
      <div className="container">
        <div className="card">
          <ProfileCard url={data?.url} />
        </div>
        <div className="details">
          <AdminData name={data?.adminData.name} email={data?.adminData.email} students={data?.students} departments={data?.departments} faculty={data?.faculty} />
        </div>
      </div>
    </div>
  )
}

export default AdminHome