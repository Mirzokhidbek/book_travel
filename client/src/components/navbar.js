import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Add Travel", path: "/add" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🌍 TravelApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item mx-lg-2" key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link rounded-pill px-3 py-2 ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center ms-lg-4 mt-2 mt-lg-0">
            <span className="navbar-user d-flex align-items-center justify-content-center">
              👤
            </span>
            <span className="ms-2 text-white fw-medium">Guest</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
