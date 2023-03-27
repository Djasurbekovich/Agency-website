import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Services from './Pages/Services/Services';
import AboutCompany from './Pages/AboutCompany/AboutCompany';
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutCompany' element={<AboutCompany/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App