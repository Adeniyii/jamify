import React from "react";
import AuthForm from "../components/AuthForm";

const Signin = () => {
  return (
    <div className="w-full min-h-screen grid place-content-center bg-gray-900">
      <AuthForm mode="signin" />
    </div>
  );
};

Signin.authPage = true;

export default Signin;
