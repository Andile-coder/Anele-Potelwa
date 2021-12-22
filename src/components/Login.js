import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
      .then(history.push("/dashboard"))
      .catch((error) => console.error(error));
  };
  const handleSignup = () => {
    history.push("/signup");
  };
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> Sign In </h2>
          <h2 class="inactive underlineHover" onClick={handleSignup}>
            Sign Up{" "}
          </h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
