import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import { UserContext } from "./providers/UserProvider";

const Main = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            {user===null ? <Redirect to="/" /> : <Dashboard />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
