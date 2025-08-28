import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/travel");
      setTravelBook(data.travels || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/travel/${id}`);
      setTravelBook(travelBook.filter((item) => item._id !== id)); // Remove deleted item from state
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {travelBook.map((tb) => (
        <div key={tb._id} className="card mb-3 mt-3">
          <img src={tb.img} className="card-img-top" alt={tb.title} />
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.description}</p>
          </div>
          <div className="d-flex justify-content-start mb-3 mx-3">
            <Link className="btn btn-primary" to={`/update/${tb._id}`}>
              Update
            </Link>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={() => handleDelete(tb._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelBook;
