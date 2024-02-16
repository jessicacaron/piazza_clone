import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments} from '@fortawesome/free-solid-svg-icons'    
      
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
      <FontAwesomeIcon icon={faComments} />          
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
