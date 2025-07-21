import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom';

import Login from './pages/user/Login'
import Register from './pages/user/Register'
import HomePage from './pages/user/HomePage'
import CarDetailsPage from './pages/user/CarDetailsPage';
import MyBookingsPage from './pages/user/MyBookingsPage';
import MyProfilePage from './pages/user/MyProfilePage';

// import Home from './pages/Home'  // add rest of your pages as needed

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* Toast notifications */}
      <ToastContainer />
      {/* App Routing */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/container/home" element={<Home />} /> */}
        {/* Add other routes here */}
        {/* Main app home (with navbar inside HomePage component) */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/car-details/:id" element={<CarDetailsPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />


        {/* Optional: Add other protected/user/admin routes here */}
        {/* <Route path="/my-bookings" element={<MyBookings />} /> */}
        {/* <Route path="/my-profile" element={<MyProfile />} /> */}

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
