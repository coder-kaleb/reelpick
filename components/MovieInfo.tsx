import Image from "next/image";
import React from "react";
import RatingIcon from "./RatingIcon";
import puss from "@/public/puss.jpg";

const MovieInfo = () => {
  return (
    <div className="relative h-72 min-w-52">
      <Image
        src={puss}
        alt="puss in boots"
        className="h-72 w-full rounded-xl "
      />
      <h3 className="mb-1 w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-white">
        Puss In Boots: The Last Wish
      </h3>
      <div className="flex justify-between">
        <RatingIcon rate="7.7" bg={false} />
        <span className="text-md flex items-center justify-between rounded bg-banner-background px-2 font-semibold text-white">
          2022
        </span>
      </div>
    </div>
  );
};

export default MovieInfo;
