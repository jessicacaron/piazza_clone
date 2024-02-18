import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import "../UI/Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faAnglesUp,
  faCommentDots,
  faStamp,
  faArrowTrendUp,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "../UI/Navigation";

function Home({ discussions }) {
  // Slice the discussions array to get only the first three discussions
  const recentDiscussions = discussions.slice(0, 3);

  return (
    <div>
      <Navigation />

      <div className="mx-3">
        <div className="row row-main">
          <div className="col-sm-1 col-left">
            <div className="stats text-center pt-4 mt-4">
              <h3>
                <FontAwesomeIcon icon={faAt} />
              </h3>
              Mentions
              <p>5</p>
              <br />
              <h3>
                <FontAwesomeIcon icon={faAnglesUp} />
              </h3>
              Upvotes
              <p>3</p>
              <br />
              <h3>
                <FontAwesomeIcon icon={faCommentDots} />
              </h3>
              Posts
              <p>10</p>
              <br />
              <h3>
                <FontAwesomeIcon icon={faStamp} />
              </h3>
              Endorsements
              <p>1</p>
            </div>
          </div>
          <div className="col-sm-4 col-right mx-4">
          <div className="posts">
            <div className="text-center">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <p className="text-center">Trending Posts</p>

            </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {recentDiscussions.map((discussion, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse-${index}`}
                      >
                        {discussion.title}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse-${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>Description: {discussion.description}</p>
                        <p>Author: {discussion.author}</p>
                        <p>
                          Date/Time: {discussion.timestamp.toLocaleString()}
                        </p>
                        <p>Resolved: {discussion.resolved ? "Yes" : "No"}</p>

                        <NavLink to={`/post/${discussion.id}`}>View Post</NavLink>


                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-far-right">
            <div className="announcements">
              <div className="text-center">
              <FontAwesomeIcon icon={faBullhorn} />
              <h6 className="">Announcements</h6>

              </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                rerum commodi praesentium impedit quis magnam quam! Dolorum
                voluptate perferendis tempore dolores, sunt dolore eligendi,
                expedita nesciunt nemo ea minima odio magnam, molestiae
                cupiditate iste adipisci! Adipisci fugit aspernatur sit
                recusandae illum, alias, dolores perferendis nesciunt quasi
                doloremque maiores repudiandae, repellendus eaque! Cupiditate
                quas, sit illo delectus saepe cum laborum esse nisi nesciunt
                fugiat. Odio blanditiis reprehenderit eos in. Expedita, nobis
                sunt. Repudiandae quas numquam veniam ex doloribus, nam iste,
                placeat, sapiente non inventore vitae in quidem! Qui
                necessitatibus nulla quia tenetur, doloribus consectetur
                inventore tempore? Voluptatibus eveniet hic nemo quaerat
                laboriosam, vero totam sapiente omnis. Corporis id maxime porro
                a quia vel suscipit beatae omnis veritatis reiciendis, vitae
                libero placeat, incidunt explicabo amet.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
