import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8  offset-lg-2">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/add" element={<AddBook />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
