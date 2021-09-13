import "./Dashboard.css";
import { Redirect, useHistory } from "react-router-dom";
import { logOut } from "../services/firebase";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
export default function Dashboard() {

  const history = useHistory();
  console.log(history)
  const user = useContext(UserContext);
  const userUid = localStorage.getItem("userUid");

  const goTO = () => {
    logOut();
  }
  
  useEffect(()=>{
    if(userUid === null){
      history.push("/");
    }
  })
  return (
    <div className="dashboard">
      {userUid === null ? "" : <div><h1 className="dashboard-text">Welcome Home</h1>
        <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
          {user === null ? null : <img style={{ borderRadius: "50%" }} src={user.photoURL} />}
        </div>
        <button className="logout-button" onClick={goTO}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
            alt="google icon"
          />
          <span onClick={() => history.push("/")}> logout</span>
        </button></div>}
    </div >
  );
}