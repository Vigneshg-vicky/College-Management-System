import React from 'react'
import AppBar from '../../Components/NavBar/StudentAppBar'
import ActionAreaCard from '../../Components/Cards/UserProfileCard'
import AccessibleTable from '../../Components/Tables/StudentTable'
import NavBar from '../../Components/MUI/navbar'
import CardList from '../../Components/Cards/HomeCard'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';


// pl-4 m-5

const Home = () => {
  return (
    <>
      <div className='headingName surface-ground h-3rem flex-row '>
        <div className="text" style={{ padding: '0 0 0 22px' }}>
          <h3>Vignesh G</h3>
        </div>
      </div>
      <div className="containers flex bg-bluegray-400">
        <div className="box p-8 m-5" style={{ width: '65%' }}>
          <CardList />
        </div>
        <div className="details flex-column bg-bluegray-400 pt-3-lg-0 col-12 col-md col-lg-4 col-xl-3" style={{ flex: 1, maxWidth: '150' }}>
          <div className="contacts align-items-start" style={{ width: '300px', height: '190px', marginLeft: '10px' }}>
            <h2 style={{ fontFamily: 'sans serif', fontWeight: '100', fontSize: '20px' }}>Your Contact</h2>
            <hr style={{ width: '80%', margin: '0', display: 'inline-block' }} />
            <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon style={{ marginLeft: '5px' }} />
              <span style={{ marginLeft: '5px' }}>vickygnair@gmail.com</span>
            </div>
            <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
              <span style={{ marginLeft: '5px', marginTop: '2px' }}>7034275802</span>
            </div>
            <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
              <span style={{ marginLeft: '5px', marginTop: '2px' }}>Kochi</span>
            </div>
            <div className='editDetails' style={{ position: 'relative', top: 20, left: 0 }}>
              <Button size="small" sx={{ backgroundColor: 'warning.main', color: 'white', '&:hover': { bgcolor: 'white', color: 'black' } }}>Edit Details</Button>
            </div>
          </div>
          <div className="contacts align-items-start mt-5" style={{ width: '300px', height: '190px', marginLeft: '10px' }}>
            <div className="security">
              <h3 style={{ fontFamily: 'sans serif', fontWeight: '100', fontSize: '20px' }}>Account Settings</h3>
              <hr style={{ width: '80%', margin: '0', display: 'inline-block', position: 'relative', top: 0 }} />
              <div className="edit" style={{ display: 'flex', alignItems: 'center' }}>
                <EditIcon style={{ marginLeft: '5px' }} />
                <span style={{ marginLeft:'5px', textDecoration: 'underline', cursor:'pointer' }}>Edit security Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home