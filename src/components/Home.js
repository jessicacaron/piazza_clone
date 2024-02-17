import React from "react";
import "./Home.css";
import "./Sidenav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faAnglesUp, faQuestion, faStamp } from '@fortawesome/free-solid-svg-icons'    

function Home({ discussions }) {
  // Slice the discussions array to get only the first three discussions
  const recentDiscussions = discussions.slice(0, 3);

  return (
    <div className="mx-3">
      <div className="row row-main">
        <div className="col-sm-1 col-left">
          {/* <Sidenav></Sidenav> */}
          <div className="stats text-center pt-4 mt-4">
            <h3><FontAwesomeIcon icon={faAt} /></h3>
            <p>5</p>
            <br />
            <h3><FontAwesomeIcon icon={faAnglesUp} /></h3>
            <p>3</p>
            <br />
            <h3><FontAwesomeIcon icon={faQuestion} /></h3>
            <p>10</p>
            <br />
            <h3><FontAwesomeIcon icon={faStamp} /></h3>
            <p>1</p>
          </div>
        </div>
        <div className="col-sm-11 col-right">
          <div className="announcements">
            <h6 className="text-end">Announcements</h6>
          </div>
          <hr />
          <div className="posts">
            <p className="text-end">Recent Posts</p>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {recentDiscussions.map((discussion, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                      {discussion.title}
                    </button>
                  </h2>
                  <div id={`flush-collapse-${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p>Description: {discussion.description}</p>
                      <p>Author: {discussion.author}</p>
                      <p>Date/Time: {discussion.timestamp.toLocaleString()}</p>
                      <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
