import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate= useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src="/netflix-logo.png" alt="logo" />

      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user.photoURL} alt="ussr-icon" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
