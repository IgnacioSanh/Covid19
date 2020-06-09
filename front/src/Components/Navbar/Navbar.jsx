import React from "react";
import { NavLink } from "react-router-dom";
import { HeartHalf } from "../Common/icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        <HeartHalf id="heart-icon" />
      </NavLink>
      <span id="logo-description">Covid-19</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse row" id="navbarNavDropdown">
        <ul className="navbar-nav col-9">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Inicio <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pacientes">
              Pacientes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/formularios/covid">
              Cuestionario
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav col-3">
          <li className="nav-item col-12">
            <NavLink className="nav-link float-right" to="/login">
              Ingresar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
