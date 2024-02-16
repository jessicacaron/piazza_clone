import React from "react";
import { NavLink } from "react-router-dom";
import './Sidenav.css'

const Sidenav = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
    
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
  return (
    <div>
      <span onClick={openNav}>&#9776; </span>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <NavLink to="/discussion" className="my-4 pl-4" onClick={closeNav}>Discussions</NavLink>
        <NavLink to="/reports" className="my-4 pl-4" onClick={closeNav}>Reports</NavLink>
   
        


      </div>
    </div>
  );
};

export default Sidenav;
