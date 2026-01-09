import "./Navbar.css";
const Navbar = () => {
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

    </header>
  );
};

export default Navbar;
