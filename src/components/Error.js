import React from "react";
import { ERROR_404_URL } from "../utlis/constants";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img
        alt="404 Background"
        src={ERROR_404_URL}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white text-3xl font-bold">404</p>
        <h1 className="text-white text-2xl md:text-4xl font-semibold mt-2">
          Page not found
        </h1>
        <p className="text-white text-base md:text-lg mt-2 max-w-md">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          to="/"
          className="mt-6 text-white underline hover:text-gray-300 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
