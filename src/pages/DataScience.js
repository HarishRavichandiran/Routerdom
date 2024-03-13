import React from "react";
import imageUrl from "../assets/data-science-image.jpg";

const DataScience = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={imageUrl} className="card-img-top" alt="Data Science " />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                This is a brief description of the Data Science course offered at Guvi.
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

export default DataScience;