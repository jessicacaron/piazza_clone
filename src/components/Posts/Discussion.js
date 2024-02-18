import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Discussion.css";
import Navigation from "../UI/Navigation";



const Discussion = ({ discussions }) => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for the filter
  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState(""); // State to keep track of active filter

  // Event handler for updating search query
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Event handler for updating filter
  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
    setActiveFilter(filter);
    setSearchQuery(""); // Clear search query when a filter is applied
  };

  // Filtered discussions based on search query and filter
  const filteredDiscussions = discussions.filter((discussion) => {
    const titleMatchesSearch = searchQuery
      ? discussion.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const assignmentMatchesFilter = filter
      ? discussion.assignment.includes(filter)
      : true;
    // const assignmentMatchesSearch = searchQuery
    //   // ? discussion.assignment.toLowerCase().includes(searchQuery.toLowerCase())
    //   // : true;

    return assignmentMatchesFilter && titleMatchesSearch;
  });

  return (
    <div>
      <Navigation />
      <div className="main">
        <div className="row">
          <div className="col-md-2 col col-left text-center">
            {/* Filter Accordion */}
            <div className="accordion" id="filterAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#filterCollapse"
                    aria-expanded="false"
                    aria-controls="filterCollapse"
                  >
                    Filter
                  </button>
                </h2>
                <div
                  id="filterCollapse"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    <NavLink
                      className={`nav-link ${activeFilter === "" ? "active" : ""}`}
                      to="/discussion"
                      activeClassName="active"
                      exact
                      onClick={() => handleFilterClick("")}
                    >
                      No Filter
                    </NavLink>
                    <NavLink
                      className={`nav-link ${activeFilter === "CBTD 1" ? "active" : ""}`}
                      to="/discussion"
                      activeClassName="active"
                      exact
                      onClick={() => handleFilterClick("CBTD 1")}
                    >
                      CBTD 1
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10 p-4">
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
                  <NavLink to={`/post/${discussion.id}`}>View Post</NavLink>

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
