import React from "react";
import "./HomeScreen.css";
import { useState } from "react";

function HomeScreen() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(fname);
    console.log(lname);
  };

  return (
    <div className="main">
      <div className="left_side_box">
        <h1 className="left_text">Welcome </h1>
      </div>

      <div className="right_side_form">
        <div className="form">
          <h1 className="form_head">Fill The Form</h1>
          <form onSubmit={submitHandler}>
            <label className="form_label-1" for="fname">
              First Name:{" "}
            </label>
            <input
              className="form_inpt-1 form_style"
              type="text"
              placeholder="Enter Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <br />
            <label className="form_label-1" for="fname">
              Last Name:{" "}
            </label>
            <input
              className="form_input-2 form_style"
              placeholder="Enter Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
