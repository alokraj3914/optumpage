import React from "react";
import "./hero.css";
// import heroImg from "../../assets/heroImg/hero.png";
import heroImg from "../../../assets/heroImg/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="welcome">Welcome back!</p>

        <h1>
          Working with you to <br />
          create a healthier <br />
          world
        </h1>

        <p className="subtitle">
          Connect with us to explore how you can optimize your performance and
          achieve healthier results for the people you serve.
        </p>

        {/* 🔹 Tiles Section */}
        <div className="hero-tiles">
          <div className="tile">
            <span className="tile-icon">💬</span>
            <span className="tile-text">Get in touch</span>
            <span className="arrow">→</span>
          </div>

          <div className="tile">
            <span className="tile-icon">🧩</span>
            <span className="tile-text">Explore solutions</span>
            <span className="arrow">→</span>
          </div>

          <div className="tile">
            <span className="tile-icon">📊</span>
            <span className="tile-text">Browse industry insights</span>
            <span className="arrow">→</span>
          </div>

          <div className="tile">
            <span className="tile-icon">🎧</span>
            <span className="tile-text">Get support</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle big"></div>
        <div className="circle medium"></div>
        <div className="circle small"></div>
        <img src={heroImg} alt="Person" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
