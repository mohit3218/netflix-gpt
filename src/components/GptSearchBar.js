import React, { useRef } from "react";
import lang from "../utlis/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import OpenAI from "../utlis/openai";
import { API_OPTIONS } from "../utlis/constants";
import { addGptMovieResult } from "../utlis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahed. Example Result: Hum Aapke Hain Koun, Don, Hera Pheri, Tirangaa, Maine Pyar Kiya";

    const gptResults = await OpenAI.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      //ToDO: Write Error Handling Page here
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log("tmdbResults ", tmdbResults);

    dispatch(
      addGptMovieResult({ moviesNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-32 sm:pt-40 md:pt-24 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-black px-4 py-6 rounded-lg grid gap-4 md:grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="col-span-12 md:col-span-9 p-4 rounded-md"
        />
        <button
          className="col-span-12 md:col-span-3 py-3 px-4 bg-red-700 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
