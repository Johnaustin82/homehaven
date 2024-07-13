import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginSignupPage from "./Components/LoginSignup/LoginSignupPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/LoginSignup',
        element: <LoginSignupPage />,
      },
    ],
  },
]);

export default router;