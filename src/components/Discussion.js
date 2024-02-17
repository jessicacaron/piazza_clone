import React, {useState}  from "react";
import { NavLink } from "react-router-dom";
import Sidenav from "./Sidenav";
import "./Discussion.css";

const Discussion = ({discussions}) => {


    // State for the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Filtered discussions based on search query
    const filteredDiscussions = discussions.filter((discussion) =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Event handler for updating search query
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

  return (
    <div>
      <Sidenav></Sidenav>
      <div className="main">
        <div className="row">
          <p className="text-end">Discussions</p>
          <hr />

          

          <div className="col-md-2 col col-left text-center">
            {/* Your filter links */}
            <h6>Filter</h6>
            <hr />
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 1
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 2
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 3
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 4
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 5
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 6
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 7
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 8
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 9
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              CBTD 10
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              SS 1
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              SS 2
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              SS 3
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              SS 4
            </NavLink>
            <NavLink
              className="nav-link"
              to="/discussion"
              activeClassName="active"
              exact
            >
              SS 5
            </NavLink>
          </div>
          <div className="col-md-10 p-4">
            <h6>All Posts</h6>
            {/* Search input field */}
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="form-control mb-3"
          />
            <ul>
              {/* Render filtered discussions */}
              {filteredDiscussions.map((discussion) => (
                <li className="post" key={discussion.id}>
                  <h3>{discussion.title}</h3>
                  <p>{discussion.description}</p>
                  <p>Author: {discussion.author}</p>
                  <p>Date/Time: {discussion.timestamp.toLocaleString()}</p>
                  <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>
                  <NavLink
                    className="btn btn-primary"
                    to={{
                      pathname: `/post/${discussion.id}`, // Pass the discussion ID as a URL parameter
                      state: { discussions } // Optionally pass the discussion as state
                    }}
                  >
                    View Details
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;

