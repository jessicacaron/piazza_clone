// EditCourse.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../UI/Navigation";

function EditCourse({ courses }) {
  // Accessing route parameters using useParams
  const { id } = useParams();

  // Finding the course object based on the ID
  const course = courses.find(course => course.id === parseInt(id));

  // State variable to store student name
  const [studentName, setStudentName] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit student name to the server
    console.log(`Added ${studentName} to Course ${id}`);
    // Optionally, you can redirect the user back to the previous page after submission
    // window.history.back();
  };

  return (
    <div>
      <Navigation />
      <h2>Edit Course {id}</h2>
      <h3>{course.name}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default EditCourse;
