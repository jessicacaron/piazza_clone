import React from "react";
import "./Home.css";
import "./Sidenav";
import Sidenav from "./Sidenav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faAnglesUp, faQuestion, faStamp } from '@fortawesome/free-solid-svg-icons'    

function Home() {
  return (
    <div className="mx-3">
      <div className="row row-main">
        <div className="col-sm-1 col-left">
          <Sidenav></Sidenav>
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
                <h2>Announcements</h2>
            </div>
            <hr />
            <div className="posts">
                <h3>Recent Posts</h3>
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
