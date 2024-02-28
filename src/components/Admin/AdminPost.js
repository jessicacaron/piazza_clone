import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

import {
  faAnglesUp,
  faReply,
  faAt,
  faCircleXmark,
  faEdit,
  faBookmark,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";
import Reply from "./AdminReply";
import Navigation from "../UI/Navigation";
import "./Post.css";
import "reactjs-popup/dist/index.css";

function AdminPost({ discussions }) {
  const { id } = useParams();
  const [showReply, setShowReply] = useState(false);
  const [showReplyMessage, setShowReplyMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();

  // State variable to track if the popup is open
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle closing of the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  console.log(discussions);
  // Find the discussion with the matching ID
  const discussion = discussions.find(
    (discussion) => discussion.id === parseInt(id)
  );

  const handleReplyClick = () => {
    setShowReply(!showReply);
    setShowButton(!showButton);
    setShowReplyMessage(false);
  };

  const handleReplyPost = () => {
    setShowReply(!showReply);
    setShowReplyMessage(!showReplyMessage);
    setShowButton(!showButton);
  };

  const handleEditClick = () => {
    navigate("../editpost");
  };

  // Render the discussion details
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="view_post mt-4 border p-4">
          {discussion ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>{discussion.title}</h2>

                <Popup
                  trigger={<FontAwesomeIcon icon={faBookmark} size="1x" />}
                  position="left center"
                  open={isPopupOpen}
                  onClose={handleClosePopup} // Function to handle closing of the popup
                  contentStyle={{
                    padding: "0px",
                    border: "none",
                    width: "200px",
                  }} // Customize popup style
                >
                  <div className="mx-2">
                    <ul className="pt-3">
                      <li>
                        <Link to="/admindiscussion" onClick={handleClosePopup}>
                          Subscribe to post
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Popup>
              </div>
              <p>Author: {discussion.author}</p>
              <p>{discussion.description}</p>
              <p>Date/Time: {discussion.timestamp.toLocaleString()}</p>
              <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>
              <span className="">
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  className="post_button"
                  size="1x"
                />
                <FontAwesomeIcon
                  icon={faReply}
                  className="post_button"
                  size="1x"
                  onClick={handleReplyClick}
                />
                <FontAwesomeIcon
                  icon={faAt}
                  className="post_button"
                  size="1x"
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="post_button"
                  size="1x"
                />
                <FontAwesomeIcon
                  icon={faEdit}
                  className="post_button"
                  size="1x"
                  onClick={handleEditClick}
                />
                <FontAwesomeIcon
                  icon={faStamp}
                  className="post_button"
                  size="1x"
                  onClick={handleReplyClick}
                />
              </span>
              {showReply && <Reply />}
              {showButton ? (
                <>
                  <button onClick={handleReplyPost}>Post</button>
                </>
              ) : (
                <p></p>
              )}
            </>
          ) : (
            <p>Discussion not found</p>
          )}
        </div>
        {showReplyMessage ? (
          <>
            <div className="reply_message">
              <p>Author: Jane Doe</p>
              <p>Date/Time: 1/1/2024, 12:00pm</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus nesciunt mollitia, vel harum porro ut aut ipsum
                cumque voluptates tempora.
              </p>
              <span className="reply_buttons">
                <FontAwesomeIcon icon={faAnglesUp} className="post_button" />
                <FontAwesomeIcon
                  icon={faReply}
                  className="post_button"
                  size="1x"
                  onClick={handleReplyClick}
                />
                <FontAwesomeIcon
                  icon={faAt}
                  className="post_button"
                  size="1x"
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="post_button"
                  size="1x"
                />
                <FontAwesomeIcon
                  icon={faEdit}
                  className="post_button"
                  size="1x"
                />
              </span>
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default AdminPost;
