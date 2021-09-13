import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
