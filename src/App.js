import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import the Navigation component
import Home from './components/Home'; // Import other components
import Login from './components/Login';
import Register from './components/Register';
import Discussion from './components/Discussion';
import Reports from './components/Reports';
import ReactDOM from 'react-dom'


function App() {
  return (
    <Router>
      <div>
        {/* <Navigation />  */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/reports" element={<Reports />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
