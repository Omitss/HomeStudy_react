import './App.css'
import HeaderBar from './components/HeaderBar'
import EmployeePage from './page/EmployeePage'
import ScorePage from './page/ScorePage'
import UserPage from './page/UserPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <HeaderBar/>
    <Routes>
      <Route path = "/score" element = {<ScorePage/>}/>
      <Route path = "/user" element = {<UserPage/>}/>
      <Route path = "/employee" element = {<EmployeePage/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App