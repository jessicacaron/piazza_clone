import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Posts/Discussion.css";
import Navigation from "../UI/Navigation";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE Editor

const AdminDiscussion = ({ discussions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description
  const [cbtd, setCbtd] = useState(""); // State for CBTD selection
  const [addPost, setAddPost] = useState(false);
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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (content, editor) => {
    setDescription(content);
  };

    // Handler for CBTD radio button change
    const handleCbtdChange = (event) => {
      setCbtd(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Title:", title);
    console.log("Description:", description);
    // Reset form fields after submission if needed
    setTitle("");
    setDescription("");
  };

  const handleAddPost = () => {
    setAddPost(!addPost);
  }

  // Filtered discussions based on search query and filter
  const filteredDiscussions = discussions.filter((discussion) => {
    const titleMatchesSearch = searchQuery
      ? discussion.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const assignmentMatchesFilter = filter
      ? discussion.assignment.includes(filter)
      : true;
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
                      className={`nav-link ${
                        activeFilter === "" ? "active" : ""
                      }`}
                      to="/discussion"
                      activeClassName="active"
                      exact
                      onClick={() => handleFilterClick("")}
                    >
                      No Filter
                    </NavLink>
                    <NavLink
                      className={`nav-link ${
                        activeFilter === "CBTD 1" ? "active" : ""
                      }`}
                      to="/discussion"
                      activeClassName="active"
                      exact
                      onClick={() => handleFilterClick("CBTD 1")}
                    >
                      CBTD 1
                    </NavLink>
                    <NavLink
                      className={`nav-link ${
                        activeFilter === "CBTD 2" ? "active" : ""
                      }`}
                      to="/discussion"
                      activeClassName="active"
                      exact
                      onClick={() => handleFilterClick("CBTD 2")}
                    >
                      CBTD 2
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
            {/* Dropdown form for adding a new post */}
            {addPost ? (
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <Editor
                apiKey="5mhh69z795oqwvsb5r5cvzv1n8v0zllu3sft8o947z6nbhrh" // Replace with your TinyMCE API key
                id="description"
                initialValue={description}
                onEditorChange={handleEditorChange}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    // eslint-disable-next-line
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help",
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Assignment:</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="cbtd1"
                    name="cbtd"
                    className="form-check-input"
                    value="CBTD 1"
                    checked={cbtd === "CBTD 1"}
                    onChange={handleCbtdChange}
                  />
                  <label htmlFor="cbtd1" className="form-check-label">
                    CBTD 1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="cbtd2"
                    name="cbtd"
                    className="form-check-input"
                    value="CBTD 2"
                    checked={cbtd === "CBTD 2"}
                    onChange={handleCbtdChange}
                  />
                  <label htmlFor="cbtd2" className="form-check-label">
                    CBTD 2
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" onClick={handleAddPost} className="btn btn-secondary">
              Cancel
            </button>
          </form>         
          ) : (
              <button onClick={handleAddPost}>Add Post</button> // Replace with your JSX elements for when addPost is false
            )}

            
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

export default AdminDiscussion;
