import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidatData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_POSTER, URL_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validation form
    const message = checkValidatData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signUp form logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: URL_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
          // ..
        });
    } else {
      // SignIn form logic
      //automatic check karta hai ki user ne pehle se signup kiya hai ya nahi.
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    }
  };

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_POSTER} alt="Bg-Logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute bg-[rgba(0,0,0,0.7)]  my-36 mx-auto right-0 left-0 text-white  rounded-lg ">
        <h1 className="py-6 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="  p-3 my-4 w-full rounded-sm bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="  p-3 my-4 w-full rounded-sm bg-gray-700"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="  p-3 my-4 w-full rounded-sm bg-gray-700"
          placeholder="Password"
        />

        <p className="py-2 text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 my-6 bg-red-700 w-full rounded-sm">
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
