// src/pages/user/MyBookingsPage.jsx
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useBookings } from '../../context/BookingsContext';
import '../../styles/user/MyBookingsPage.css';

function getDayDiff(from, to) {
    // from/to are ISO strings or Date objects
    const start = new Date(from);
    const end = new Date(to);
    const ms = end - start;
    // +1 so booking of same day counts as 1
    return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)) + 1);
}


const initialBookings = [
    {
        id: 1,
        carName: "Swift LXI",
        variant: "Petrol",
        pricePerDay: 1899,
        fromDate: "2024-07-01",
        toDate: "2024-07-03",
        bookingDate: "2024-06-25T17:34:00",
        status: "Pending",
    },
    {
        id: 2,
        carName: "Honda City VX",
        variant: "Diesel",
        pricePerDay: 2499,
        fromDate: "2024-07-05",
        toDate: "2024-07-08",
        bookingDate: "2024-06-28T12:05:24",
        status: "Pending",
    }
];

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString();
}
function formatDateTime(dateStr) {
    return new Date(dateStr).toLocaleString();
}

function MyBookingsPage() {
    //const [bookings, setBookings] = useState(initialBookings);
    // const { bookings, addBooking } = useBookings();

    const { bookings, cancelBooking } = useBookings();

    //   const cancelBooking = (id) => {
    //     // Since context state does not expose a setter directly for status update,
    //     // add "updateBooking" method if you want, or (for this simple case):
    //     bookings.forEach(b => {
    //       if (b.id === id) b.status = "Cancelled";
    //     });
    //     addBooking({ ...bookings.find(b => b.id === id), status: "Cancelled" }); // Not optimal, better with reducer or update method
    //     // For production, provide real state management for cancel
    //   };

    return (
        <div className="my-bookings-container">
            <Navbar />

            <div className="bookings-content">
                <h2 className="bookings-heading">All Bookings</h2>

                <div className="table-responsive">
                    <table className="bookings-table">
                        <thead>
                            <tr>
                                <th>Car Name</th>
                                <th>Variant</th>
                                <th>Total Days</th>
                                <th>Price</th>
                                <th>Booking Date & Time</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={9} style={{ textAlign: "center" }}>No Bookings Yet.</td>
                                </tr>
                            ) : (
                                bookings.map(b => {
                                    const totalDays = getDayDiff(b.fromDate, b.toDate);
                                    const totalPrice = totalDays * b.pricePerDay;
                                    return (
                                        <tr key={b.id}>
                                            <td>{b.carName}</td>
                                            <td>{b.variant}</td>
                                            <td>{totalDays}</td>
                                            <td>₹{totalPrice}</td>
                                            <td>{formatDateTime(b.bookingDate)}</td>
                                            <td>{formatDate(b.fromDate)}</td>
                                            <td>{formatDate(b.toDate)}</td>
                                            <td>
                                                <span className={`booking-status ${b.status.toLowerCase()}`}>
                                                    {b.status}
                                                </span>
                                            </td>
                                            <td>
                                                {b.status === "Pending" ? (
                                                    <button className="cancel-booking-btn" onClick={() => cancelBooking(b.id)}>
                                                        Cancel
                                                    </button>
                                                ) : (
                                                    <span style={{ color: "#888" }}>—</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyBookingsPage;
