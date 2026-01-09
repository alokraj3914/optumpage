import React from "react";
import signin from "../../../../assets/signin/signin.png";
import "./Signin.css";

const Signin = () => {
  return (
    <header className="navbar">

      <div className="blue-section">
        <ul className="left-options">
          <li>Personal</li>
          <li className="active">Business</li>
        </ul>
      </div>
      <div className="main-nav">
        <div className="nav-left">
          <h2 className="logo">Optum</h2>
          <h3>for business</h3>

          <ul className="nav-links">
            <li>What we do <span>▾</span></li>
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
        <button className="btn">
          Home <span> → </span>
        </button>
        <p>Sign in to your customer portal</p>
      </div>
      <section className="hero">
        <div className="hero-left">
          <h1>Simplify your workflows with Optum Pro portal</h1>
          <p>
            The Optum Pro portal provides clinicians and administrators with
            one-stop access to point-of-care support and resources to streamline
            administrative and clinical tasks. To access the portal, you will
            need to create or sign in using a One Healthcare ID.
          </p>

          <div className="hero-buttons">
            <button className="register">Sign in to optum pro</button>
            <button className="register-outline">
              Register for optum pro
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={signin} alt="Signin preview" className="hero-img" />
        </div>
      </section>
    </header>
  );
};

export default Signin;
