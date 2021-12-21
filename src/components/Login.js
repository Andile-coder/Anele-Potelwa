import { React, useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router";
import { auth } from "../firebase";
import "../styles/dist/login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(history.push("/userprofile"))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> Sign In </h2>
          <h2 class="inactive underlineHover">Sign Up </h2>

          <div class="fadeIn first">
            {/* <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            /> */}
            <AccountCircleIcon />
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
