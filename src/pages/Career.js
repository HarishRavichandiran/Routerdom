import React from "react";
import imageUrl from "../assets/career-image.jpg";

const Career = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={imageUrl} className="card-img-top" alt="Just to specify a thing " />
            <div className="card-body">
              <h5 className="card-title">Career</h5>
              <p className="card-text">
                This is a brief description of the Career course offered at Guvi.
              </p>
              <a className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
