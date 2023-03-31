import { AppBar } from '@mui/material'
import React from 'react'
import ActionAreaCard from '../../Components/Cards/UserProfileCard'
import ResponsiveAppBar from '../../Components/NavBar/StudentAppBar'
import AccessibleTable from '../../Components/Tables/StudentTable'

const FacultyHome = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="container h-screen flex justify-content-evenly p-5">
        <ActionAreaCard />
        <div className="contains" style={{ maxWidth: '950' }}>
          <AccessibleTable />
        </div>
      </div>
    </>
  )
}

export default FacultyHome