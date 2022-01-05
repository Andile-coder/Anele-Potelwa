import { React, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Update,
  setDoc,
} from "firebase/firestore";
import "../styles/dist/register.css";
function Signup() {
  const [user, setUser] = useState({
    email: "",
    first_Name: "",
    last_Name: "",
    school_Name: "",
    grade: "",
    center: "",
  });
  const history = useHistory();
  const handleReg = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "students", "EKO8ERaOvqRsXinUGWUP");

    const payload = {
      stu_id: auth.currentUser.uid,
      first_Name: user.first_Name,
      last_Name: user.last_Name,
      school_Name: user.school_Name,
      grade: user.grade,
      center: user.center,
    };
    await updateDoc(docRef, {
      students: arrayUnion(payload),
    })
      .then(async () => {
        await setDoc(doc(db, "student_course", auth.currentUser.uid), {
          courses: [],
        });
      })
      .then(history.push("/dashboard"));
  };

  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="inactive underlineHover">
            Hi User, Welcome to inspire academy
          </h2>

          <form onSubmit={handleReg}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="First name"
              required
              onChange={(e) => setUser({ ...user, first_Name: e.target.value })}
            />
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Last name"
              required
              onChange={(e) => setUser({ ...user, last_Name: e.target.value })}
            />
            <input
              type="text"
              id="schoolName"
              className="fadeIn third"
              name="login"
              placeholder="Enter School Name"
              onChange={(e) =>
                setUser({ ...user, school_Name: e.target.value })
              }
            />
            <input
              type="email"
              id="grade"
              className="fadeIn second"
              name="login"
              placeholder="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label for="centers">Choose a center</label>
            <select
              name="centers"
              onChange={(e) => setUser({ ...user, center: e.target.value })}
              value={user.center}
              required
            >
              <option value="Bisho">Bisho</option>
              <option value="Kokstad">Kokstad</option>
              <option value="Bisho">Bisho</option>
              <option value="Bisho">Bisho</option>
            </select>
            <input
              type="number"
              id="grade"
              className="fadeIn second"
              name="login"
              placeholder="grade"
              required
              onChange={(e) => setUser({ ...user, grade: e.target.value })}
            />
            <input
              type="file"
              id="grade"
              className="fadeIn third"
              name="login"
              placeholder="Consent Form"
            />
            <input type="submit" className="fadeIn fourth" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
