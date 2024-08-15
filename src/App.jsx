import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployerLogin from './pages/employerLogin';
import SeekerLogin from './pages/seekerLogin';
import Registration from './pages/Registration';
import './App.css'

function App() {

  return (

    <BrowserRouter>


    {/* App Routes */}
    <Routes>

      <Route path="/login-employer" element={<EmployerLogin />} />
      <Route path="/" element={<SeekerLogin />} />
      <Route path='/register' element={<Registration/>} />

    </Routes>
  </BrowserRouter>

  )
}

export default App
