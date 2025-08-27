import React from "react";

const TravelBook = () => {
  return (
    <div>
      <div className="card mb-3 mt-3">
        <img
          src="https://static.independent.co.uk/2025/04/25/13/42/iStock-1498516775.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelBook;
