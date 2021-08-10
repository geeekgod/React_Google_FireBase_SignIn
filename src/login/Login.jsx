import React, { useEffect, useContext, useState } from 'react';
import './Login.css'
import { signInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
export default function Login() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  console.log(user!=null)
  useEffect(() => {
    if (user) {
      setredirect("/dashboard");
    }
  }, [user]);
  const goToDash = () => {
    if (redirect == "/dashboard") {
      <Redirect to={redirect}/>
    }
  }
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span onClick={()=> goToDash}> Continue with Google</span>
       </button>
      </div>
  );
}