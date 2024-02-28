import React from "react";
import Navigation from "../UI/Navigation";

const EditPost = ({ discussions }) => {
  return (
    <div className="">
      <Navigation />
      <h4 className="my-4 p-4"> EditPost</h4>

      <div className="container border p-4 bg-light">
        <p>Title: {discussions[1].title}</p>
        <p>Author: {discussions[1].author}</p>


        <div className="container border p-2 bg-white">
          <br />
          <p>{discussions[1].description}</p>
          <p>{discussions[1].title}</p>
        </div>

        <button className="btn btn-primary m-2">Save</button>
        <button className="btn btn-secondary m-2">Cancel</button>

      </div>
    </div>
  );
};

export default EditPost;
