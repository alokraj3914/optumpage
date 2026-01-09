import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <header className="navbar">
      <div className="blue-section">
        <ul className="left-options">
          <li>
            Personal
          </li>

          <li className="active">
            Business
            </li>
        </ul>
      </div>
      <div className="main-nav">
        <div className="nav-left">
          <h2 className="logo">Optum</h2>
          <h3>for business</h3>

          <ul className="nav-links">
            <li>What we do<span>▾</span></li>
            <li>What we help <span>▾</span></li>
            <li>Healthcare insights <span>▾</span></li>
            <li>Provider resources <span>▾</span></li>
          </ul>
        </div>

        <div className="nav-right">
          <span className="nav-item">Search</span>
          <span className="nav-item">Sign in</span>
          <span className="nav-item">Support</span>
          <button className="sign-btn">Get in touch</button>
        </div>
      </div>
      <div className="nav-content">
        <button className="btn">Home  <span> → </span></button>
        <p> Find your healthcare solutions</p>
      </div>
      <div className="solutions">
        <h1> Find your healthcare solutions </h1>
        <p>As your partner in healthcare, Optum offers solutions for any challenge you might face. Explore our offerings below.</p>
      </div>
    <div className="all">
        <h2>All solutions</h2>
        <p>To quickly find the solution you're looking for, filter by audience, solution category and type, or use the solution search bar and select Apply filters.</p>
    </div>
    <div className="sort">
        <p>Sort by:</p>
        <button className="sort-btn"> A-Z <span>▾</span></button>
    </div>
    </header>
  )
}

export default Explore