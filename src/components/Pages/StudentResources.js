import React from "react";
import Navigation from "../UI/Navigation";

function StudentResources() {
  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        <h2>Student Resources</h2>
        <div className="list-group mt-3">
          <a href="www.weber.edu" className="list-group-item list-group-item-action">
            Homework Help
          </a>
          <a href="www.weber.edu" className="list-group-item list-group-item-action">
            Study Guides
          </a>
          <a href="www.weber.edu" className="list-group-item list-group-item-action">
            Online Tutorials
          </a>
          <a href="www.weber.edu" className="list-group-item list-group-item-action">
            Research Databases
          </a>
          <a href="www.weber.edu" className="list-group-item list-group-item-action">
            Library Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentResources;
