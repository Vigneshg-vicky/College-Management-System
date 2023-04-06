import ActionAreaCard from '../../Components/Cards/UserProfileCard'
import AccessibleTable from '../../Components/Tables/StudentTable'
import FacultyNavbar from '../../Components/MUI/FacultyNavBar'

const FacultyHome = () => {
  return (
    <>
      <FacultyNavbar />
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