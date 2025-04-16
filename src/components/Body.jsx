import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //👉 sirf initial render pe chalega.
  useEffect(() => {
    // onAuthStateChanged(...) ye Firebase ka event listener hai.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user sigIn or SignUp
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []); // onAuthStateChanged trigger hota hai jab user auth state change hoti hai. Isliye baar-baar manually API call karne ki zarurat nahi hoti.

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
