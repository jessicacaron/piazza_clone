import React from "react";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";

const Report = ({students}) => { 

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportPDF = () => {
    const input = componentRef.current;
    html2pdf(input, {
      margin: 1,
      filename: "student_report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: "avoid-all" },
    });
  };


  return (
    <div>
      <h2>Student Reports</h2>
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
    
  );
};

export default Report;
