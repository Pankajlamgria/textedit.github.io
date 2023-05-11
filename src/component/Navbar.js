// import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// rfc
export default function Navbar(props) {
  // var themecolor="light";
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-${props.mode} bg-${props.mode}`}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.first}
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                About
                </Link>
              </li> */}
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.cyantoogle} role="switch" id="flexSwitchCheckDefault1"/>
              <label className={`form-check-label text-${props.textcolor}`} htmlFor="flexSwitchCheckDefault1">Cyan mode</label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.tooglefunc} 
                role="switch"
                 id="flexSwitchCheckDefault3"
              />
              <label className={`form-check-label text-${props.textcolor}`} htmlhtmlfor="flexSwitchCheckDefault3"  >
                Lightmode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  first: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

Navbar.defaultProps = {
  first: "Write the first heading",
  logo: "App name",
};
