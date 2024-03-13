import React from "react";
import imageUrl from "../assets/cyber-security-image.jpg";

const CyberSecurity = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={imageUrl} className="card-img-top" alt="Cyber Security Image" />
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">
                This is a brief description of the Cyber Security course offered at Guvi.
              </p>
              <a href="#!" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;