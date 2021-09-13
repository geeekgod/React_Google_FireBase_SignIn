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

  const userUid = localStorage.getItem("userUid");

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            {userUid === null ? <Login /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/dashboard">
            {userUid === null ? <Redirect to="/" /> : <Dashboard />}
            {/* <Dashboard/> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
