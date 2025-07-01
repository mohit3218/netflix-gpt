import React, { useRef } from "react";
import lang from "../utlis/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import OpenAI from "../utlis/openai";
import { API_OPTIONS } from "../utlis/constants";
import {addGptMovieResult } from "../utlis/gptSlice"

const GptSearchBar = () => {
const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;
  }

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movie for the query: " + searchText.current.value + ". only give me names of 5 movies, comma seprated like the example result given ahed. Example Result: Hum Aapke Hain Koun, Don, Hera Pheri, Tirangaa, Maine Pyar Kiya";

    const gptResults = await OpenAI.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          {"role": "user", "content": gptQuery},
        ],
      });

      if(!gptResults.choices){
            //ToDO: Write Error Handling Page here
      }
      
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log("tmdbResults ", tmdbResults);

      dispatch(addGptMovieResult({moviesNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12 bg-black"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          name="search"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
