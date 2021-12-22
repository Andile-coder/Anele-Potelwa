import React, { useState } from "react";
import { auth } from "../firebase";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const [userAuth, setuserAuth] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setuserAuth(true);
    } else {
      setuserAuth(false);
    }
  });
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userAuth) {
          return <Component {...props} />;
        } else if (userAuth === false) {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    ></Route>
  );
}

export default PrivateRoute;
