import React from "react";
import { useParams } from "react-router-dom";
import Sidenav from "./Sidenav";

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
      <Sidenav></Sidenav>
      <div className="view_post mt-4 border p-4">
        {discussion ? (
          <>
            <h2>{discussion.title}</h2>
            <p>{discussion.description}</p>
            <p>Author: {discussion.author}</p>
            <p>Date/Time: {discussion.timestamp.toLocaleString()}</p>
            <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>
          </>
        ) : (
          <p>Discussion not found</p>
        )}
      </div>
    </div>
  );
}

export default Post;
