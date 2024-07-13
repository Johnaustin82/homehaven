import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './LoginSignup.css';

const LoginSignupPage = () => {
  const [isSigningUp, setIsSigningUp] = useState(true);
  

  return (
    <div className="LoginSignup-page">
      <div className="LoginSignup-toggle-buttons">
        <button onClick={() => setIsSigningUp(true)}>Sign Up</button>
        <button onClick={() => setIsSigningUp(false)}>Log In</button>
      </div>
      {isSigningUp ? <SignupForm /> : <LoginForm />}
    </div>
  );
}

export default LoginSignupPage;
