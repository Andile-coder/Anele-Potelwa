import { React, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import "../styles/dist/register.css";
function Signup() {
  const [user, setUser] = useState({
    email: "",
    first_Name: "",
    last_Name: "",
    school_Name: "",
    grade: "",
  });
  const history = useHistory();
  const handleReg = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "students", "EKO8ERaOvqRsXinUGWUP");
    const payload = {
      first_Name: user.first_Name,
      last_Name: user.last_Name,
      school_Name: user.school_Name,
      grade: user.grade,
    };
    await updateDoc(docRef, {
      students: arrayUnion(payload),
    }).then(history.push("/dashboard"));
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
