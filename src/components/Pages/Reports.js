import React from "react";
import { useReactToPrint } from "react-to-print";
import Navigation from "../UI/Navigation";

const Report = ({students}) => { 

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportPDF = () => {
    
  };


  return (
    <div>
      <Navigation />
      <div className="container">
      <h6>Student Reports</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mentions</th>
            <th>Questions</th>
            <th>Endorsements</th>
            <th>Upvotes</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.mentions}</td>
              <td>{student.questions}</td>
              <td>{student.endorsements}</td>
              <td>{student.upvotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <button onClick={handlePrint}>Print</button>
        <button onClick={handleExportPDF}>Export PDF</button>
      </div>
      </div>

    </div>
    
  );
};

export default Report;
