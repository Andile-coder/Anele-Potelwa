import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/dist/dashboard.css";
function Dashboard() {
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="">Available courses </h2>

          <div class="fadeIn first"></div>
          <form>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                id="grade"
                className="fadeIn second"
                value="mathematics"
                name="login"
              />
              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "0",
                  marginRight: "50px",
                }}
              >
                Register
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                id="grade"
                className="fadeIn second"
                value="physical science"
                name="login"
              />
              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "0",
                  marginRight: "50px",
                }}
              >
                Register
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                id="grade"
                className="fadeIn third"
                value="Accounting"
                name="login"
              />
              <button
                style={{
                  position: "absolute",
                  top: "20px",

                  right: "0",
                  marginRight: "50px",
                }}
              >
                Register
              </button>
            </div>
            <input type="submit" class="fadeIn fourth" value="Submit" />
          </form>
        </div>
      </div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="">Enrolled Courses </h2>

          <div class="fadeIn first"></div>
          <form>
            <input
              type="checkbox"
              id="grade"
              className="fadeIn second"
              name="login"
              placeholder="First name"
              required
            />
            <label>Mathematics</label>
            <input
              type="checkbox"
              id="grade"
              className="fadeIn second"
              name="login"
            />
            <label>Physical science</label>
            <input
              type="checkbox"
              id="grade"
              className="fadeIn third"
              name="login"
            />
            <label>Accounting</label>

            {/* <input type="submit" className="fadeIn fourth" value="Sign Up" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
