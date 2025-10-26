import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../routes/Hero';
import Login from '../routes/Login';
import Register from '../routes/Register';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default Home;