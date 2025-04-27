import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggelGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/");
      });
  };

  const handleSearchClick = () => {
    dispatch(toggelGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  //👉 sirf initial render pe chalega.
  useEffect(() => {
    // onAuthStateChanged(...) ye Firebase ka event listener hai.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []); // onAuthStateChanged trigger hota hai jab user auth state change hoti hai. Isliye baar-baar manually API call karne ki zarurat nahi hoti.

  return (
    <div className="flex z-10 w-full px-8 py-2 absolute bg-gradient-to-b from-black justify-between">
      <img className="w-44 " src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex p-3">
          {showGptSearch && (
            <select
              className="bg-gray-700 text-white py-2 px-4 m-2 mx-2 rounded-lg"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-blue-900 p-2 px-2 m-2 mx-2 rounded-lg text-white cursor-pointer"
            onClick={handleSearchClick}>
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            src={user.photoURL}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold p-2 text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
