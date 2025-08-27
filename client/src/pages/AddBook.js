import React from "react";

const AddBook = () => {
  return (
    <form>
      <div className="mb-4 mt-4">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="title" name="title" />
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
        />
        <div id="emailHelp" className="form-text">
          Write your description
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Image Url
        </label>
        <input type="img" className="form-control" id="img" name="image" />
        <div id="emailHelp" className="form-text">
          Put your picture
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddBook;
