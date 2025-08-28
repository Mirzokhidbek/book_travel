import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TravelBook.css";

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImg, setEditImg] = useState("");

  // Fetch all travels
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/travel");
      setTravelBook(data.travels || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete travel
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/travel/${id}`);
      setTravelBook(travelBook.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Start editing
  const handleEdit = (tb) => {
    setEditId(tb._id);
    setEditTitle(tb.title);
    setEditDescription(tb.description);
    setEditImg(tb.img);
  };

  // Save updated travel
  const handleUpdate = async (id) => {
    try {
      const updated = {
        title: editTitle,
        description: editDescription,
        img: editImg,
      };
      await axios.put(`http://localhost:5001/api/travel/${id}`, updated);
      setTravelBook(
        travelBook.map((tb) => (tb._id === id ? { ...tb, ...updated } : tb))
      );
      setEditId(null);
    } catch (error) {
      console.error("Error updating travel:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container py-4">
      <div className="row g-4">
        {travelBook.map((tb) => (
          <div key={tb._id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 travel-card">
              {editId === tb._id ? (
                <div className="card-body edit-mode">
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={editImg}
                    onChange={(e) => setEditImg(e.target.value)}
                    placeholder="Image URL"
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleUpdate(tb._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={tb.img}
                    className="card-img-top travel-img"
                    alt={tb.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{tb.title}</h5>
                    <p className="card-text">{tb.description}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3 mx-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(tb)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(tb._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBook;
