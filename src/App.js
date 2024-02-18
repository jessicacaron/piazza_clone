import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home'; // Import other components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Discussion from './components/Posts/Discussion';
import Reports from './components/Pages/Reports';
import Post from './components/Posts/Post';
import Reply from './components/Posts/Reply';
import Admin from './components/Admin/Admin';



function App() {

  const discussions = [
    {
      id: 1,
      title: "How to improve code readability?",
      description:
        "Looking for suggestions on improving code readability in JavaScript projects.",
      author: "John Doe",
      timestamp: new Date("2024-02-16T10:00:00"),
      resolved: false,
      assignment: "CBTD 1",
    },
    {
      id: 2,
      title: "Best practices for React state management?",
      description:
        "Interested in learning about the best practices for managing state in React applications.",
      author: "Jane Smith",
      timestamp: new Date("2024-02-15T15:30:00"),
      resolved: false,
      assignment: "CBTD 1",
    },
    {
      id: 3,
      title: "Debugging tips for Node.js applications",
      description:
        "Seeking advice on debugging techniques for Node.js applications.",
      author: "Alice Johnson",
      timestamp: new Date("2024-02-14T08:45:00"),
      resolved: true,
      assignment: "CBTD 2",
    },
    {
      id: 4,
      title: "Discussion on CSS Flexbox vs. Grid",
      description:
        "Comparing CSS Flexbox and Grid layout systems for building responsive web designs.",
      author: "Bob Williams",
      timestamp: new Date("2024-02-13T11:20:00"),
      resolved: false,
      assignment: "CBTD 2",
    },
    {
      id: 5,
      title: "Handling authentication in REST APIs",
      description:
        "Exploring different approaches for implementing authentication in RESTful APIs.",
      author: "Emily Brown",
      timestamp: new Date("2024-02-12T14:10:00"),
      resolved: true,
      assignment: "SS 1",
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Doe",
      mentions: 3,
      questions: 2,
      endorsements: 5,
      upvotes: 10,
    },
    {
      id: 2,
      name: "Jane Smith",
      mentions: 5,
      questions: 1,
      endorsements: 3,
      upvotes: 8,
    },
    {
      id: 3,
      name: "Alice Johnson",
      mentions: 2,
      questions: 3,
      endorsements: 4,
      upvotes: 7,
    },
    {
      id: 4,
      name: "Bob Williams",
      mentions: 4,
      questions: 2,
      endorsements: 3,
      upvotes: 9,
    },
    {
      id: 5,
      name: "Emily Brown",
      mentions: 1,
      questions: 4,
      endorsements: 2,
      upvotes: 6,
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home discussions={discussions} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/discussion"
            element={<Discussion discussions={discussions} />} // Pass discussions as prop
          />
          <Route path="/reports" element={<Reports students={students}/>} />
          <Route path="/reply" element={<Reply />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/post/:id" element={<Post discussions={discussions} />} /> {/* Pass discussions as prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
