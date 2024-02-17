import React from "react";
import { NavLink } from "react-router-dom";
import './Sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidenav = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
    
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
  return (
    <div>
      <span onClick={openNav}><FontAwesomeIcon icon={faBars} className=""/></span>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <NavLink to="/" className="my-4 pl-4" onClick={closeNav}>Home</NavLink>

        <NavLink to="/discussion" className="my-4 pl-4" onClick={closeNav}>Discussions</NavLink>
        <NavLink to="/reports" className="my-4 pl-4" onClick={closeNav}>Reports</NavLink>

   
        


      </div>
      <h6 className="p-1">CS 1234</h6>
    </div>
  );
};

export default Sidenav;
