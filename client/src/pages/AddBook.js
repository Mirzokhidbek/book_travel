import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/travel/add", {
        title,
        description,
        img,
      });
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 mt-4">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          Write title of place
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          Write your description
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="img"
          name="img"
          onChange={(e) => setImg(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          Put your picture URL
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddBook;
