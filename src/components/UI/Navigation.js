import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import Sidenav from "./Sidenav";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
        <div>
        <Sidenav></Sidenav>
        <span className="d-flex">
            <FontAwesomeIcon className="px-4" icon={faUser}  size="sm"/>
            <p>user1234@weber.edu</p>
        </span>
        </div>
        
        <span className="px-2">
          
        <Popup trigger=
                {<FontAwesomeIcon className="px-4" icon={faGear}  size="sm"/>
              }
                position="left center">
                <div className="mx-2">GeeksforGeeks
                <ul>
                  <li><Link to="/admin">Admin Settings</Link></li>
                  <li><Link to="/login">Log In</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
                
                
                
                </div>

            </Popup>
            <FontAwesomeIcon className="px-2" icon={faComments}  size="2x"/>
        </span>



        
      </div>
    </nav>
  );
}

export default Navigation;
