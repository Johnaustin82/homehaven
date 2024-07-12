import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupForm from "./Components/LoginSignup/SignupForm";
import LoginForm from "./Components/LoginSignup/LoginForm";
import LoginSignupPage from "./Components/LoginSignup/LoginSignupPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignupForm />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/LoginSignup',
    element: <LoginSignupPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
