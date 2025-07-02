import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utlis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { BG_URL, USER_AVATAR } from "../utlis/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const signUpName = !isSignInForm ? name.current.value : null;

    //Validate form data
    const message = checkValidData(
      signUpName,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("SignUp User", user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispacth(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("SignIn User", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    }
  };

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <img
      src={BG_URL}
      alt="Netflix BG"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Header */}
  <Header />

  {/* Form Container */}
  <div className="flex justify-center items-center min-h-screen px-4">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md bg-black bg-opacity-80 text-white p-6 sm:p-10 rounded-md"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {/* Full Name (Sign Up Only) */}
      {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="w-full p-4 mb-4 bg-gray-700 rounded"
        />
      )}

      {/* Email */}
      <input
        ref={email}
        type="email"
        placeholder="Email Address"
        className="w-full p-4 mb-4 bg-gray-700 rounded"
      />

      {/* Password */}
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-full p-4 mb-4 bg-gray-700 rounded"
      />

      {/* Error */}
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

      {/* Submit */}
      <button
        onClick={handleButtonClick}
        className="w-full p-4 bg-red-700 hover:bg-red-800 rounded mb-4 transition"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      {/* Toggle Text */}
      <p
        className="text-sm text-center hover:underline cursor-pointer"
        onClick={toggleSignInFrom}
      >
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already registered? Sign In Now"}
      </p>
    </form>
  </div>
</div>


  );
};

export default Login;
