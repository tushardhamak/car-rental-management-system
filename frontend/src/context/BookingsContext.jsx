import react, { createContext, useContext, useState } from 'react';

const BookingsContext = createContext();

export function BookingsProvider({ children }) {
    // Contains bookings array shared by the app
    const [bookings, setBookings] = useState([]);

    // Function to add a booking
    const addBooking = (booking) => setBookings(prev => [...prev, booking]);
    // cancel a booking by id
    const cancelBooking = (id) => setBookings(prevBookings =>
        prevBookings.map(b =>
            b.id === id ? { ...b, status: "Cancelled" } : b
        )
    );
    return (
        <BookingsContext.Provider value={{ bookings, addBooking, cancelBooking }}>
            {children}
        </BookingsContext.Provider>
    );
}

// Hook for easy access
export const useBookings = () => useContext(BookingsContext);
