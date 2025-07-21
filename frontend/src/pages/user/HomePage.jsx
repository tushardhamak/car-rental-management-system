import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../styles/user/Homepage.css'

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Welcome Text */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            <span>Book a car now</span>
            <br />
            <span>Take amazing ride.</span>
          </h1>
        </div>
      </section>

      {/* Featured Offer Section */}
      <section className="offer-section">
        <div className="offer-content">
          <div className="offer-text">
            <h2>
              Book new cars starting at <br />
              <span className="price-highlight">₹1499/day</span>
            </h2>
          </div>
          <div className="offer-image">
            <img src="/images/car1.png" alt="Car 1" />
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="search-section">
        <label className="search-label" htmlFor="car-search">
          Search car here
        </label>
        <div className="search-bar-container">
          <input
            id="car-search"
            className="search-input"
            type="text"
            placeholder="Enter car or model name"
          />
          <button className="search-button">Search</button>
        </div>
      </section>

      {/* Car Info Boxes */}
      <section className="car-list-section">
        <div className="car-card-list">
          {/* Car Card 1 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=200&q=80"
              alt="Hatchback Car"
              className="car-image"
            />
            <div className="car-details">
              <div className="car-info-header">
                <span className="car-name">Swift LXI</span>
                <span className="car-price">
                  ₹1899
                  <span className="car-price-unit">/day</span>
                </span>
              </div>
              <div className="car-info-meta">
                <span className="car-meta-icon">⛽</span>
                <span className="car-meta-text">Petrol</span>
                <span className="car-meta-icon" style={{ marginLeft: 18 }}>👥</span>
                <span className="car-meta-text">5 Seats</span>
              </div>
              {/* VIEW DETAILS BUTTON */}
              <div className="car-card-actions">
                <Link to="/car-details/1" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Car Card 2 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=200&q=80"
              alt="Hatchback Car"
              className="car-image"
            />
            <div className="car-details">
              <div className="car-info-header">
                <span className="car-name">Swift LXI</span>
                <span className="car-price">
                  ₹1899
                  <span className="car-price-unit">/day</span>
                </span>
              </div>
              <div className="car-info-meta">
                <span className="car-meta-icon">⛽</span>
                <span className="car-meta-text">Petrol</span>
                <span className="car-meta-icon" style={{ marginLeft: 18 }}>👥</span>
                <span className="car-meta-text">5 Seats</span>
              </div>
              <div className="car-card-actions">
                <Link to="/car-details/2" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Car Card 3 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=200&q=80"
              alt="Sedan Car"
              className="car-image"
            />
            <div className="car-details">
              <div className="car-info-header">
                <span className="car-name">Honda City VX</span>
                <span className="car-price">
                  ₹2499
                  <span className="car-price-unit">/day</span>
                </span>
              </div>
              <div className="car-info-meta">
                <span className="car-meta-icon">⛽</span>
                <span className="car-meta-text">Petrol</span>
                <span className="car-meta-icon" style={{ marginLeft: 18 }}>👥</span>
                <span className="car-meta-text">5 Seats</span>
              </div>
              <div className="car-card-actions">
                <Link to="/car-details/3" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <div className="footer-content">
          <div>
            <strong>Contact Us:</strong> +91-9001234567 | info@carrentalsystem.com
          </div>
          <div>
            <strong>Address:</strong> 123 Main Road, Pune, Maharashtra 411001
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
