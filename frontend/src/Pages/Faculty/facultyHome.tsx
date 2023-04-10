import FacultyGrid from '../../Components/Cards/FacultyCard'

const FacultyHome = () => {
  return (
    <>
      <div className="containers flex">
        <div className="box p-8 m-5" style={{ width: '65%' }}>
          <FacultyGrid />
        </div>
      </div>

    </>
  )
}

export default FacultyHome