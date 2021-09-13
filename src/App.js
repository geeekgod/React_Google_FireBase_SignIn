import React from "react";
import "./App.css";
import UserProvider from "./providers/UserProvider";
import Main from "./Main";
function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

export default App;
