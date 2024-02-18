import React, { useState } from "react";
import Navigation from "../UI/Navigation";

function Admin() {
  // State variables to store form data
  const [className, setClassName] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [classSize, setClassSize] = useState("");
  const [classTerm, setClassTerm] = useState("");
  const [emailNotificationFrequency, setEmailNotificationFrequency] =
    useState("");

  // State variable to manage active section
  const [activeSection, setActiveSection] = useState("classInfo");

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

// import React, { useState } from "react";

// function Admin() {
//   // State variables to store form data
//   const [className, setClassName] = useState("");
//   const [classNumber, setClassNumber] = useState("");
//   const [classSize, setClassSize] = useState("");
//   const [classTerm, setClassTerm] = useState("");

//   const [emailNotificationFrequency, setEmailNotificationFrequency] = useState("");

//   // Function to handle form submission
//   const handleSubmitClassInfo = (e) => {
//     e.preventDefault();
//     // Perform any actions like submitting data to server here
//     console.log("Class Information submitted with data:", { className, classNumber, classSize, classTerm });
//   };

//   const handleSubmitEmailSettings = (e) => {
//     e.preventDefault();
//     // Perform any actions like submitting data to server here
//     console.log("Email Settings submitted with data:", { emailNotificationFrequency });
//   };

//   return (
//     <div>
//       <h2>Admin Settings</h2>
//       <div className="border p-4">
//         <h3>Class Information</h3>
//         <form onSubmit={handleSubmitClassInfo}>

//         </form>
//       </div>

//       <div className="border p-4">
//         <h3>Email Settings</h3>
//         <form onSubmit={handleSubmitEmailSettings}>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admin;
