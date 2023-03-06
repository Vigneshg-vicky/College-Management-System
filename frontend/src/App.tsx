import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AdminLogin from './components/admin/adminLogin'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/admin/login' element = {<AdminLogin/>} />
      </Routes>
    </Router>
  )
}

export default App
