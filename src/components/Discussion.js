import React, {useState}  from "react";
import { NavLink } from "react-router-dom";
import Sidenav from "./Sidenav";
import "./Discussion.css";

const Discussion = () => {
  const discussions = [
    {
      id: 1,
      title: "How to improve code readability?",
      description:
        "Looking for suggestions on improving code readability in JavaScript projects.",
      author: "John Doe",
      timestamp: new Date("2024-02-16T10:00:00"),
      resolved: false,
    },
    {
      id: 2,
      title: "Best practices for React state management?",
      description:
        "Interested in learning about the best practices for managing state in React applications.",
      author: "Jane Smith",
      timestamp: new Date("2024-02-15T15:30:00"),
      resolved: false,
    },
    {
      id: 3,
      title: "Debugging tips for Node.js applications",
      description:
        "Seeking advice on debugging techniques for Node.js applications.",
      author: "Alice Johnson",
      timestamp: new Date("2024-02-14T08:45:00"),
      resolved: true,
    },
    {
      id: 4,
      title: "Discussion on CSS Flexbox vs. Grid",
      description:
        "Comparing CSS Flexbox and Grid layout systems for building responsive web designs.",
      author: "Bob Williams",
      timestamp: new Date("2024-02-13T11:20:00"),
      resolved: false,
    },
    {
      id: 5,
      title: "Handling authentication in REST APIs",
      description:
        "Exploring different approaches for implementing authentication in RESTful APIs.",
      author: "Emily Brown",
      timestamp: new Date("2024-02-12T14:10:00"),
      resolved: true,
    },
  ];

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

