import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header';
import Home from '../pages/Home'
import Error from '../pages/Error'

const PrincipalRouter = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/inicio" element={<Home />}/>
            <Route path="/*" element={<Error />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default PrincipalRouter