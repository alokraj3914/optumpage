import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="blue-section">
        <ul className="left-options">
          <li className="active">
            Personal
          </li>

          <li>
            Business
            </li>
        </ul>

        <ul className="right-options">
          <li>Español</li>
          <li>Set my location</li>
        </ul>
      </div>
      <div className="main-nav">
        <div className="nav-left">
          <h2 className="logo">Optum</h2>

          <ul className="nav-links">
            <li>Health care <span>▾</span></li>
            <li>Financial <span>▾</span></li>
            <li>Pharmacy <span>▾</span></li>
          </ul>
        </div>

        <div className="nav-right">
          <span className="nav-item">Search</span>
          <span className="nav-item">Customer support</span>
          <button className="sign-btn">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
