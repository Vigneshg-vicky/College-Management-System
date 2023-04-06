import WcIcon from '@mui/icons-material/Wc';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import EditStudentForm from '../../Components/Forms/EditStudentForm';
import StudentModal from '../../Components/Modals/EditStudentModal';
import { useState } from 'react';
import { useGetStudentDataQuery } from '../../Redux/Features/Api/apiSlice';
import { IStudentResponse } from '../../Types/ResponseInterface';

const ProfilePage = () => {

    const { data, isLoading, isSuccess, isError } = useGetStudentDataQuery<IStudentResponse>();

    const [modal, setModal] = useState(false)

    return (
        <>
            {/* <div className="outerMost flex-column" style={{ height: '95vh' }}> */}
            <div className="main flex-column pt-5 justify-content-center align-items-center" style={{ height: '95vh' }}>
                <div className="container bg-gray-200 border-1 border-500 m-auto" style={{ height: '30vh', width: '80vw', position: 'relative' }}>
                    <div className='main-details flex'>
                        <div className="profilePic" style={{ position: 'absolute', top: '5%', left: '3%', width: '30%', height: 'auto' }}>
                            <img className='border-3 border-500' src={data?.url ?? "https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4="} alt="" style={{ width: '50%', height: 'auto' }} />
                        </div>
                        <div className='name' style={{ position: 'absolute', top: '6%', left: '23%', width: 'auto', height: 'auto' }}>
                            <h3>Vignesh G</h3>
                        </div>
                    </div>
                </div>
                <br />
                <div className="details m-auto border-1 bg-gray-200" style={{ height: '40vh', width: '80vw', position: 'relative' }}>
                    <div className="extra-details">
                        <div className="flex justify-content-around">
                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <WcIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Gender</span>
                                </div>
                                <span style={{ marginLeft: '2rem', marginTop: '1rem' }}>Male</span>
                            </div>

                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <CalendarTodayIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Birth Date</span>
                                </div>
                                <span style={{ marginLeft: '2rem', marginTop: '1rem' }}>23/04/2001</span>
                            </div>
                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <WcIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Blood Group</span>
                                </div>
                                <span style={{ marginLeft: '2rem', marginTop: '1rem' }}>A+</span>
                            </div>
                        </div>
                        <div className="flex justify-content-around">
                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <AddLocationIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Nationality</span>
                                </div>
                                <span style={{ marginLeft: '2rem', marginTop: '1rem' }}>Indian</span>
                            </div>

                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <LocalPhoneIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Mobile</span>
                                </div>
                                <span style={{ marginTop: '1rem' }}>data?.Contact_No</span>
                            </div>
                            <div className="details-1" style={{ height: '3rem', marginLeft: '2.5rem', marginTop: '1rem' }}>
                                <div className="email" style={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon style={{ marginLeft: '5px', marginTop: '2px' }} />
                                    <span style={{ marginLeft: '5px', marginTop: '2px' }}>Email</span>
                                </div>
                                <span style={{ marginLeft: '2rem', marginTop: '1rem' }}>vickyggnair007@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="button" style={{ position: 'absolute', bottom: '5%', left: '45%' }}>
                        <Button onClick={() => setModal(true)} size="small" sx={{ backgroundColor: 'warning.main', color: 'white', '&:hover': { bgcolor: 'white', color: 'black' } }}>Edit Details</Button>

                    </div>
                </div>
            </div>
            {/* </div> */}
            <StudentModal modal={modal} setModal={setModal}>
                <EditStudentForm student={data} modal={modal} setModal={setModal} />
            </StudentModal >


        </>
    )
}

export default ProfilePage