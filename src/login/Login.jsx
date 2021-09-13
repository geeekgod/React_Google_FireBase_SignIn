import React, { useContext } from 'react';
import './Login.css'
import { signInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const user = useContext(UserContext);

  console.log(user)
  const history = useHistory();
  const signIN = () => {
    signInWithGoogle();
    history.push("/dashboard")
  }
  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signIN}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}