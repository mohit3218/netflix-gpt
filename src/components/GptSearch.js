import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utlis/constants";

const GptSearch = () => {
  return (
    <>
      {/* Background Image Layer */}
      <div className="relative w-full h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src={BG_URL}
            alt="Netflix background"
          />
        </div>

        {/* Page Content (Header is already included globally) */}
        <main className="pt-20">
          {" "}
          {/* Add top padding to avoid overlap with fixed header */}
          <GptSearchBar />
          <GptMovieSuggestions />
        </main>
      </div>
    </>
  );
};

export default GptSearch;
