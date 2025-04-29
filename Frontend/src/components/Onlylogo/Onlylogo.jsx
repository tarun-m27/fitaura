import React, { useState } from "react";
//import { Link } from "react-router-dom"; // Use React Router for navigation
import { useNavigate } from "react-router-dom";
import "./Onlylogo.css";
import Logo from "../../assets/logo.png";

const Onlylogo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="-only-logo-header">
      <img src={Logo} alt="logo" className="logo" />

      {/* <ul className="logo-header-menu">
        <li className="logo-header-menu-li">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Features</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Onlylogo;
