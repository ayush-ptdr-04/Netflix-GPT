import React from "react";
import { BG_POSTER } from "../utils/constant";

import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

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
            type="text"
            className="col-span-9 bg-white p-4 m-4 rounded-lg "
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="col-span-3 m-4 bg-red-900 py-2 px-4 text-white rounded-lg">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
