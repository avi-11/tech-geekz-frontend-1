import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import img2 from "./img2.jpg";
import { Link } from "react-router-dom";

const progress = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Link to="/progressWatch"> */}
      <div>
        <h1>Progress</h1>
        <div>
          <img src={img2}></img>
          <h2>Python Bootcamp (from Scratch)</h2>
          <div>
            <label>
              Completion: <span>70%</span>
            </label>
            <progress value="70" max="100"></progress>
          </div>
        </div>
      </div>
      {/* </Link> */}
      {/* <Footer />s */}
    </>
  );
};

export default progress;
