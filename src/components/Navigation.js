import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Sidenav from "./Sidenav";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
        <Sidenav></Sidenav>

        <FontAwesomeIcon icon={faComments}  size="2x"/>


        
      </div>
    </nav>
  );
}

export default Navigation;
