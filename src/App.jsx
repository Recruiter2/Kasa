import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';/*
import Rental from './pages/Rental/Rental'; */
import FullCard from './pages/FullCard/FullCard';
 import ErrorPage from './pages/ErrorPage/ErrorPage';
 
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
          <Route path="/FullCard/:id" element={<FullCard />} /> 
         <Route path="*" element={<ErrorPage />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App