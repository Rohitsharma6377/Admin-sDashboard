import {Routes, Route, useRoutes} from 'react-router-dom'
import Dash from './pages/Dashboard/Dash'
import Layout from './components/feature/Layout'
import Calendar from './pages/calendar/Calendar'
import Boards from './pages/boards/Boards'
import UserData from './pages/UserGrid/UserData'
function App() {
  return (
   <div id="Dashboard">
    <Routes>
      
      <Route path='/'  element={<Layout/>}>
      <Route path='dashboard' element={<Dash/>}/>
      <Route path='calendar' element={<Calendar/>}/>
      <Route path='board' element={<Boards/>}/>
      <Route path='user' element={<UserData/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
