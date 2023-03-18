import React from 'react'
import SideBar from '../../Components/admin/home/sidebar'
import AdminData from '../../Components/Cards/AdminData'
import ProfileCard from '../../Components/Cards/ProfileCard'
import NavBar from '../../Components/NavBar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className='main'>
      <NavBar />
      <div className="button">
        <SideBar />
      </div>
      <div className="container">
        <div className="card">
          <ProfileCard />
        </div>
        <div className="details">
          <AdminData/>
        </div>
      </div>
    </div>
  )
}

export default Home