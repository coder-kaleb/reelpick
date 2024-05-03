import Image from "next/image";
import React from "react";
import RatingIcon from "./RatingIcon";
const WeaklyTrendingMovie = () => {
  return (
    <div>
      <Image src="/public/puss.jpg" alt="puss in boots" />
      <h3>Puss In Boots: The Last Wish</h3>
      <div>
        <RatingIcon rate="7.7" bg />
        <span className="text-md flex items-center justify-between rounded bg-banner-background font-semibold">
          2022
        </span>
      </div>
    </div>
  );
};

export default WeaklyTrendingMovie;
