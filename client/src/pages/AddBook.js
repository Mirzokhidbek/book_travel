import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/travel/add", {
        title,
        description,
        img,
      });
      alert("Book added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <div className="addbook-container">
      <div className="addbook-card">
        <h2 className="mb-4 text-center">Add New Travel Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter place title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Image URL
            </label>
            <input
              type="url"
              className="form-control"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary btn-submit">
              Add Travel Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
