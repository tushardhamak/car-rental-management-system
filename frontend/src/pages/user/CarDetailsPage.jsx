// src/pages/user/CarDetailsPage.jsx
import React, { useState } from 'react';

import Navbar from '../../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useBookings } from '../../context/BookingsContext';
import '../../styles/user/CarDetailsPage.css';

function CarDetailsPage() {
    const { addBooking } = useBookings();
    const navigate = useNavigate();
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const { id } = useParams(); // Use this id for fetching/extracting the car's real data

    // Example hard-coded data (replace with fetch or props as you build further)
    const car = {
        image: '/images/car1.png',   // path in public/images
        name: 'Swift LXI',
        price: 1899,
        fuel: 'Petrol',
        capacity: '5 Seats',
        mileage: '18 km/lt'
    };


    //const handleBookNow = () => navigate('/my-bookings');

    // 3. Handler for Book Car button
    const handleBookNow = () => {
        // Make sure dates are filled
        if (!fromDate || !toDate) {
            alert('Please select both dates!');
            return;
        }
        const newBooking = {
            carName: car.name,
            variant: car.fuel,
            pricePerDay: car.price,
            fromDate,
            toDate,
            bookingDate: new Date().toISOString(),
            status: 'Pending'
        };
        addBooking(newBooking); // Add the booking to context
        navigate('/my-bookings'); // Redirect!
    };


    return (
        <>
            <Navbar />
            <div className="car-details-container">
                {/* Left: Car Image */}
                <div className="car-image-section">
                    <img src={car.image} alt={car.name} className="car-details-img" />
                </div>

                {/* Right Side: Details and Booking */}
                <div className="car-info-section">
                    {/* Car Name & Price */}
                    <div className="car-info-header">
                        <span className="car-details-name">{car.name}</span>
                        <span className="car-details-price">
                            ₹{car.price} <span className="per-day">/day</span>
                        </span>
                    </div>
                    {/* Specs Box */}
                    <div className="car-details-specs">
                        <span className="car-spec-icon">⛽</span>
                        <span className="car-spec-text">{car.fuel}</span>
                        <span className="car-spec-icon" style={{ marginLeft: 16 }}>👥</span>
                        <span className="car-spec-text">{car.capacity}</span>
                        <span className="car-spec-icon" style={{ marginLeft: 16 }}>🛣️Mileage</span>
                        <span className="car-spec-text">{car.mileage}</span>
                    </div>
                    {/* Date Selection and Booking */}
                    <div className="car-booking-section">
                        <div className="date-group">
                            <label>From
                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={e => setFromDate(e.target.value)}
                                />
                            </label>
                            <label>To
                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={e => setToDate(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className="book-car-btn" onClick={handleBookNow}>Book Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarDetailsPage;
