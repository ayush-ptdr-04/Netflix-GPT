import React, { useRef } from "react";
import { BG_POSTER } from "../utils/constant";
// import openai from "../utils/openai";

import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText?.current?.value);
    const getQuery =
      "Act as a Movie Reccomendation system and suggest some movies for the query" +
      searchText?.current?.value +
      ". only give me names of five movies, comma seprated like the movie result given ahead. example result : Gadar, Sholey, Don, koi mil gaya, padosan ";
    // make an api call to GPT API and get movie Results
    const getResults = await openai.chat.completions.create({
      messages: [{ role: "movies ", content: getQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(getResults.choices);
  };

  return (
    <div>
      <div className="absolute -z-20">
        <img src={BG_POSTER} alt="Bg-Logo" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/2 bg-black grid grid-cols-12">
          <input
            ref={searchText}
            type="text"
            className="col-span-9 bg-white p-4 m-4 rounded-lg "
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            onClick={handleGptSearchClick}
            className="col-span-3 m-4 bg-red-900 py-2 px-4 text-white rounded-lg">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
