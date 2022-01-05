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
  updateDoc,
  arrayUnion,
  useHistory,
  updateData,
  setDoc,
  arrayRemove,
} from "firebase/firestore";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [regCourses, setRegCourse] = useState([]);
  const [grade, setGrade] = useState([]);
  const [center, setCenter] = useState([]);
  const [students, setStudents] = useState([]);
  const docRef = doc(db, "centers", "Ywr3vZiwpJ6H27kiIa0o");
  const stuRef = doc(db, "students", "EKO8ERaOvqRsXinUGWUP");

  const getComments = async () => {
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined && courses.length == 0) {
        snapshot.data().centres.forEach((center, i) => {
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
  const getCenters = () => {
    const docRef = doc(db, "centers", "center1");
    onSnapshot(stuRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        setStudents(snapshot.data().students.map((student) => student));
      }
    });
    console.log("students", students);
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        students.map((elem) => {
          if (elem.stu_id === auth.currentUser.uid) {
          }
          return;
        });
        setCenter(snapshot.data().grade6.map((course) => course));
      }
    });
  };
  const centers = async (e) => {
    const docRef = doc(db, "centers", "center1");
    const payload = {
      stud_id: auth.currentUser.uid,
      name: "Andile",
      surname: "Masela",
    };
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        setGrade(snapshot.data().grade6.map((course) => course));
      }
    });
    let newstudents = grade;
    newstudents.forEach((elem) => {
      if (elem.course === "ics") {
        elem.students.push(payload);
      } else {
      }
    });
    await updateDoc(docRef, {
      grade6: newstudents,
    });
    getCenters();
  };
  const register = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "student_course", auth.currentUser.uid);
    const payload = { name: e.target.value };
    await updateDoc(docRef, {
      courses: arrayUnion(payload),
    });
    centers();
  };
  const Deregister = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "student_course", auth.currentUser.uid);
    const payload = { name: e.target.value };
    await updateDoc(docRef, {
      courses: arrayRemove(payload),
    });
  };
  const getCourses = () => {
    const docRef = doc(db, "student_course", auth.currentUser.uid);
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.data() !== undefined) {
        setRegCourse(snapshot.data().courses.map((course) => course.name));
      }
    });
  };
  useEffect(() => {
    getComments();
    getCourses();
    console.log("reCourse", regCourses);
  }, []);
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="">Available courses </h2>

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
                    onClick={register}
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "0",
                      marginRight: "50px",
                    }}
                    value="mathematics"
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
                    onClick={register}
                    value="Physical Science"
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
                    onClick={register}
                    value="Accounting"
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

            {/* <input type="submit" className="fadeIn fourth" value="Submit" /> */}
          </form>
        </div>
      </div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="">Enrolled Courses </h2>

          <div class="fadeIn first"></div>
          <form>
            {regCourses.map((course) => (
              <div>
                <div style={{ position: "relative" }}>
                  {}
                  <input
                    type="text"
                    id="grade"
                    className="fadeIn second"
                    value={course}
                    name="login"
                  />
                  <button
                    onClick={Deregister}
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "0",
                      marginRight: "50px",
                    }}
                    value={course}
                  >
                    Deregister
                  </button>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
