import { React, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "../styles/dist/register.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    first_Name: "",
    Last_Name: "",
    school_Name: "",
    grade: "",
  });
  const history = useHistory();
  const handleReg = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    if (password === confirmPassword) {
      await auth.createUserWithEmailAndPassword(email, password).then();
      history.push("/register");
    } else {
      alert("Passwords do not match");
    }
  };
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="inactive underlineHover" onClick={handleLogin}>
            {" "}
            Sign In{" "}
          </h2>
          <h2 className="active">Sign Up </h2>
          <div class="fadeIn first">
            <AccountCircleIcon />
          </div>
          <form onSubmit={handleReg}>
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
              type="password"
              id="grade"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              type="password"
              id="grade"
              className="fadeIn third"
              placeholder="confirm password"
              required
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
