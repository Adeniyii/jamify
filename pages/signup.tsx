import React from "react";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div className="w-full min-h-screen grid place-content-center bg-gray-900">
      <AuthForm mode="signup" />
    </div>
  );
};

Signup.authPage = true;

export default Signup;
