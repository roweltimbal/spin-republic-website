import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../routes/Hero';
import Login from '../routes/Login';
import Register from '../routes/Register';
import Dashboard from '../routes/Dashboard';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import Videos from '../routes/Videos';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/videos" element={<Videos />} />
                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default Home;