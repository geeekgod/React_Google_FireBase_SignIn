import React from "react";
import { BrowserRouter as Router, Switch, Route, Link ,Redirect } from "react-router-dom";
import "./App.css"
import Navbar from "./navbar/Navbar"
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import UserProvider from "./providers/UserProvider";
function App() {
  return (
    <UserProvider>
    <Router>
    <Navbar/>
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
    </UserProvider>
  );
}

export default App;