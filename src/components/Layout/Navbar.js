import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar_main">
        <h1>
          <Link to="/">
            <i className="fas fa-solid fa-briefcase"></i> CariKerjaYuk
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/freelancers">
              <i className="fas fa-user-friends"></i>{" "}
              <span className="hide-sm">Our Freelancers</span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <i className="fas fa-file-alt"></i>{" "}
              <span className="hide-sm">Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/seller">
              <i className="fas fa-address-card"></i>{" "}
              <span className="hide-sm">Be A Seller</span>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <i className="fas fa-address-card"></i>{" "}
              <span className="hide-sm">About Us</span>
            </Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Join Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
