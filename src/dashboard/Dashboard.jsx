import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { logOut } from "../services/firebase";
export default function Dashboard() {

  const history = useHistory();
  console.log(history)
  const goTO = () => {
    logOut();
    history.push("/")
  }
  return (
    <div className="dashboard">
      <h1 className="dashboard-text">Welcome Home</h1>
      <button className="logout-button" onClick={goTO}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> logout</span>
      </button>
    </div>
  );
}