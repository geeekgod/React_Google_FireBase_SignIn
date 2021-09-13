import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { logOut } from "../services/firebase";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
export default function Dashboard() {

  const history = useHistory();
  console.log(history)
  const goTO = () => {
    logOut();
    history.push("/")
  }
  const user = useContext(UserContext);
  const userUid = localStorage.getItem("userUid");
  return (
    <div className="dashboard">
      {userUid === null ? "" : <div><h1 className="dashboard-text">Welcome Home</h1>
        <div style={{padding:20, display: "flex", justifyContent: "center" }}>
          <img style={{ borderRadius: "50%" }} src={user.photoURL} />
        </div>
        <button className="logout-button" onClick={goTO}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
            alt="google icon"
          />
          <span> logout</span>
        </button></div>}
    </div >
  );
}