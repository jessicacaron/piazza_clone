import React, { useState } from "react";
import Navigation from "../UI/Navigation";
import { NavLink } from "react-router-dom";


function Admin() {
  
  // State variables to store form data
  const [className, setClassName] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [classSize, setClassSize] = useState("");
  const [classTerm, setClassTerm] = useState("");
  const [emailNotificationFrequency, setEmailNotificationFrequency] =
    useState("");

      // State variable to store unapproved discussion filters
  const [unapprovedFilters, setUnapprovedFilters] = useState([
    "Topic 1",
    "Topic 2",
    "Topic 3",
  ]);

    // State variable to store the list of courses
    // eslint-disable-next-line
    const [courses, setCourses] = useState([
      { id: 1, name: "CS 1234" },
    ]);

  // Function to handle approval of discussion filters
  const handleFilterApproval = (index) => {
    const updatedFilters = [...unapprovedFilters];
    updatedFilters.splice(index, 1); // Remove the filter at the specified index
    setUnapprovedFilters(updatedFilters);
  };

  // State variable to manage active section
  const [activeSection, setActiveSection] = useState("classInfo");

  // // New state variable for discussion settings
  // const [discussionCategorySuggestions, setDiscussionCategorySuggestions] = useState([]);

  // Function to handle form submission for class information
  const handleSubmitClassInfo = (e) => {
    e.preventDefault();
    // Perform any actions like submitting data to server here
    console.log("Class Information submitted with data:", {
      className,
      classNumber,
      classSize,
      classTerm,
    });
  };

  // Function to handle form submission for email settings
  const handleSubmitEmailSettings = (e) => {
    e.preventDefault();
    // Perform any actions like submitting data to server here
    console.log("Email Settings submitted with data:", {
      emailNotificationFrequency,
    });
  };

  // // Function to handle form submission for discussion settings
  // const handleSubmitDiscussionSettings = (e) => {
  //   e.preventDefault();
  //   // Perform any actions like submitting data to server here
  //   console.log("Discussion Settings submitted with data:", {
  //     discussionCategorySuggestions,
  //   });
  // };

    // Function to handle form submission for discussion settings
    const handleSubmitDiscussionSettings = (e) => {
      e.preventDefault();
      // Perform any actions like submitting data to server here
      console.log("Approved discussion filters:", unapprovedFilters);
    };

      // Function to add a student to a course
  const addStudentToCourse = (courseId, studentName) => {
    // Implement your logic here to add a student to the course
    console.log(`Added ${studentName} to Course ${courseId}`);
  };

  return (
    <div>
        <Navigation />
      <div className="container">
        <h6>Instructor Settings</h6>
        <div className="row">
          <div className="col-md-3">
            {/* Side menu */}
            <ul className="list-group">
              <li
                className={`list-group-item ${
                  activeSection === "classInfo" ? "active" : ""
                }`}
                onClick={() => setActiveSection("classInfo")}
              >
                Class Information
              </li>
              <li
                className={`list-group-item ${
                  activeSection === "emailSettings" ? "active" : ""
                }`}
                onClick={() => setActiveSection("emailSettings")}
              >
                Email Settings
              </li>
              {/* New discussion settings tab */}
              <li
                className={`list-group-item ${
                  activeSection === "discussionSettings" ? "active" : ""
                }`}
                onClick={() => setActiveSection("discussionSettings")}
              >
                Discussion Settings
              </li>
                            {/* New tab for managing courses */}
                            <li
                className={`list-group-item ${activeSection === "courseSettings" ? "active" : ""}`}
                onClick={() => setActiveSection("courseSettings")}
              >
                Course Settings
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            {/* Content */}
            <div>
              {activeSection === "classInfo" && (
                <div className="border p-4">
                  <h3>Class Information</h3>
                  <form onSubmit={handleSubmitClassInfo}>
                    {/* Class information fields */}
                    {/* Input fields for class name, class number, class size, class term */}
                    <div>
                      <label htmlFor="className">Class Name:</label>
                      <input
                        type="text"
                        id="className"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="classNumber">Class Number:</label>
                      <input
                        type="text"
                        id="classNumber"
                        value={classNumber}
                        onChange={(e) => setClassNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="classSize">Approximate Class Size:</label>
                      <input
                        type="text"
                        id="classSize"
                        value={classSize}
                        onChange={(e) => setClassSize(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="classTerm">Class Term:</label>
                      <input
                        type="text"
                        id="classTerm"
                        value={classTerm}
                        onChange={(e) => setClassTerm(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit">Save Class Information</button>
                  </form>
                </div>
              )}
              {activeSection === "emailSettings" && (
                <div className="border p-4">
                  <h3>Email Settings</h3>
                  <form onSubmit={handleSubmitEmailSettings}>
                    {/* Email settings fields */}
                    {/* Input fields for email notification frequency */}
                    <div>
                      <label htmlFor="emailNotificationFrequency">
                        Email Notification Frequency:
                      </label>
                      <select
                        id="emailNotificationFrequency"
                        value={emailNotificationFrequency}
                        onChange={(e) =>
                          setEmailNotificationFrequency(e.target.value)
                        }
                        required
                      >
                        <option value="">Select Frequency</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <button type="submit">Save Email Settings</button>
                  </form>
                </div>
              )}
              {/* New discussion settings tab content */}
              {activeSection === "discussionSettings" && (
                <div className="border p-4">
                  <h3>Discussion Settings</h3>
                  <form onSubmit={handleSubmitDiscussionSettings}>
                {/* Display unapproved discussion filters */}
                <div>
                  <label>Unapproved Discussion Subcategories:</label>
                  <ul>
                    {unapprovedFilters.map((filter, index) => (
                      <li key={index}>
                        {filter}
                        <input
                          type="checkbox"
                          onChange={() => handleFilterApproval(index)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary" type="submit">Save new Subcategories</button>
<br />
<br />
                <button className="btn btn-success" type="submit">Add New Folder</button>

              </form>
                </div>
              )}
              {/* New course settings tab content */}
              {activeSection === "courseSettings" && (
                <div className="border p-4">
                  <h3>Course Settings</h3>
                  {/* Display list of courses */}
                  {courses.map((course) => (
                    <div key={course.id}>
                      <h4>{course.name}</h4>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const studentName = e.target.elements.studentName.value;
                          addStudentToCourse(course.id, studentName);
                        }}
                      >
                        <input type="text" placeholder="Student Name" name="studentName" required />
                        <button type="submit">Add Student</button>
                      </form>
                      {/* Dummy list of students */}
                      <ul>
                        <li>Student 1</li>
                        <li>Student 2</li>
                        <li>Student 3</li>
                      </ul>
                      <NavLink to={`/editcourse/${course.id}`} className="btn btn-primary">
                        Edit Course
                      </NavLink>
                      <button className="mx-4">Add Course</button>
                    </div>
                  ))}
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
