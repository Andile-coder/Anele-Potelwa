import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { auth, db } from "../firebase";
import "../styles/dist/dashboard.css";
import {
  collection,
  onSnapshot,
  query,
  where,
  documentId,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
function Dashboard() {
  const [courses, setCourses] = useState([]);
  const getComments = async () => {
    const docRef = doc(db, "centers", "Ywr3vZiwpJ6H27kiIa0o");
    const stuRef = doc(db, "students", "EKO8ERaOvqRsXinUGWUP");
    onSnapshot(stuRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        snapshot.data().students.forEach((stu) => {
          if (stu.stu_id == auth.currentUser.uid) {
            console.log("stu", stu);
          }
        });
      }
    });
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined && courses.length == 0) {
        snapshot.data().centres.forEach((center, i) => {
          //
          onSnapshot(stuRef, (snapshot2) => {
            if (snapshot2.data() !== undefined) {
              snapshot2.data().students.forEach((stu) => {
                if (
                  stu.center === "Bisho" &&
                  stu.stu_id === auth.currentUser.uid
                ) {
                  setCourses((oldarr) => [
                    ...oldarr,
                    center.center1.centreName,
                  ]);
                } else if (
                  stu.center === "Kokstad" &&
                  stu.stu_id === auth.currentUser.uid
                ) {
                  setCourses((oldarr) => [
                    ...oldarr,
                    center.center2.centreName,
                  ]);
                }
              });
            }
          });
        });
      }
      console.log("courses", courses);
    });
  };
  useEffect(() => {
    getComments();
  });
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="">Available courses </h2>
          <div class="fadeIn first"></div>

          <form>
            {courses.map((elem) => (
              <div>
                <h2>{elem}</h2>
                <div style={{ position: "relative" }}>
                  {}
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
              </div>
            ))}

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
