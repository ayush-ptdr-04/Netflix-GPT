import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"
          alt="Bg-Logo"
        />
      </div>
      <form className="w-3/12 p-12 absolute bg-[rgba(0,0,0,0.7)]  my-36 mx-auto right-0 left-0 text-white  rounded-lg ">
        <h1 className="py-6 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="  p-3 my-4 w-full rounded-sm bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="  p-3 my-4 w-full rounded-sm bg-gray-700"
          placeholder="Email Address"
        />
        <input
          type="password"
          className="  p-3 my-4 w-full rounded-sm bg-gray-700"
          placeholder="Password"
        />

        <button className="p-3 my-6 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggelSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
