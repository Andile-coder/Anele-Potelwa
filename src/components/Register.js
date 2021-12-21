import { React, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "../styles/dist/register.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const handleReg = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    if (password === confirmPassword) {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/profilereg");
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="inactive underlineHover"> Sign In </h2>
          <h2 className="active">Sign Up </h2>

          <div class="fadeIn first">
            <AccountCircleIcon />
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="First name"
              required
            />{" "}
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Last name"
              required
            />
            <input
              type="text"
              id="schoolName"
              className="fadeIn third"
              name="login"
              placeholder="Enter School Name"
            />
            <input
              type="number"
              id="grade"
              className="fadeIn second"
              name="login"
              placeholder="grade"
              required
            />
            <input
              type="file"
              id="grade"
              className="fadeIn third"
              name="login"
              placeholder="Consent Form"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              placeholder="repeat password"
              required
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
