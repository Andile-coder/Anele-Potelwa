import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="login">
            <Login />
          </Route>
          <Route exact path="signup">
            <Register />
          </Route>
          <PrivateRoute path="dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <Dashboard />
    </div>
  );
}

export default App;
