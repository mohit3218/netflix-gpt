import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utlis/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utlis/constants";
import { toggleGptSearchView } from "../utlis/gptSlice";
import { changeLanguage } from "../utlis/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispacth(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispacth(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        } = user;
        dispacth(
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
        dispacth(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-full px-4 sm:px-6 md:px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      {/* Logo */}
      <img
        className="w-36 sm:w-40 md:w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />

      {/* User Actions */}
      {user && (
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 px-2">
          {/* Language Selector */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* Home Page / GPT Search Button */}
          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          {/* Profile Image */}
          <img
            className="w-10 h-10 rounded-full"
            src={user.photoURL}
            alt="user-icon"
          />

          {/* Sign Out */}
          <button
            className="text-white font-semibold text-sm"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
