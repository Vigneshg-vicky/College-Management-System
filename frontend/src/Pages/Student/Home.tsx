import React from 'react'
import AppBar from '../../Components/NavBar/StudentAppBar'
import ActionAreaCard from '../../Components/Cards/UserProfileCard'
import AccessibleTable from '../../Components/Tables/StudentTable'
import NavBar from '../../Components/MUI/navbar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container h-screen flex justify-content-evenly p-5">
        <ActionAreaCard />
        <div className="contains" style={{maxWidth:'950'}}>
          <AccessibleTable />
        </div>
      </div>
    </>
  )
}

export default Home