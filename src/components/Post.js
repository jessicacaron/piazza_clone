import React from "react";
import { useParams } from "react-router-dom";
import Sidenav from "./Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faReply, faAt, faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Post({ discussions }) {
  const { id } = useParams();

  console.log(discussions);
  // Find the discussion with the matching ID
  const discussion = discussions.find(
    (discussion) => discussion.id === parseInt(id)
  );

  // Render the discussion details
  return (
    <div className="container">
      {/* <Sidenav></Sidenav> */}
      <div className="view_post mt-4 border p-4">
        {discussion ? (
          <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{discussion.title}</h2>                <FontAwesomeIcon icon={faEllipsis}  size="1x"/>

          </div>

            <p>{discussion.description}</p>
            <p>Author: {discussion.author}</p>
            <p>Date/Time: {discussion.timestamp.toLocaleString()}</p>
            <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>
            <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <FontAwesomeIcon icon={faAnglesUp}  size="1x"/>
                <FontAwesomeIcon icon={faReply}  size="1x"/>
                <FontAwesomeIcon icon={faAt}  size="1x"/>

            </span>


          </>
        ) : (
          <p>Discussion not found</p>
        )}
      </div>
    </div>
  );
}

export default Post;
