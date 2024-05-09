import React from "react";

function ButtonSlider({isSlide, setIsSlide}: {isSlide: "movie" | "tv", setIsSlide: React.Dispatch<React.SetStateAction<"movie" | "tv">>}) {
  return (
    <div className="relative isolate  font-medium text-white">
      <button
        className="rounded-full px-4 py-2"
        onClick={() => setIsSlide("movie")}
      >
        Movie
      </button>
      <button
        className="rounded-full px-4 py-2"
        onClick={() => setIsSlide("tv")}
      >
        Tv Series
      </button>

      <div
        className={`absolute top-0 isolate -z-10 h-full w-20 rounded-full bg-red-600 transition-all duration-500  ${isSlide === "movie" ? "translate-x-0" : "w-[87px] translate-x-full"}`}
      ></div>
    </div>
  );
}

export default ButtonSlider;
