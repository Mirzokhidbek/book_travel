import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Main from "./pages/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8  offset-lg-2">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
