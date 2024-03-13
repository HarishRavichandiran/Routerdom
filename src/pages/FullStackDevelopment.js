import React from "react";
import imageUrl from "../assets/full-stack-development-image.jpg";

const FullStackDevelopment = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={imageUrl} className="card-img-top" alt="Full Stack Development Image" />
            <div className="card-body">
              <h5 className="card-title">Full Stack Development</h5>
              <p className="card-text">
                This is a brief description of the Full Stack Development course offered at Guvi.
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

export default FullStackDevelopment;
