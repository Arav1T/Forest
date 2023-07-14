
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Main from './Components/Main';
import About from './Components/About';
import Enroll from './Components/Enroll';
import User from './Components/User';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/enroll' element={<Enroll/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
