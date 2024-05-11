import Image from "next/image";
import React from "react";
import RatingIcon from "./RatingIcon";
import puss from "@/public/puss.jpg";
import { MoviePreview, allPro } from "@/constants";
import Link from "next/link";

const MovieInfo = ({
  release_date,
  vote_average,
  title,
  poster_path,
  id,
  genre_ids,
  media_type,
}: MoviePreview) => {
  const releaseYear = new Date(release_date).getFullYear();
  const vote = parseFloat(vote_average.toString()).toFixed(1);
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  console.log(media_type)
  return (
    <Link href={`${media_type}/${id}`} className="group relative min-w-52 cursor-pointer">
      <Image
        src={`${poster_path ? imageUrl : "/placeholder.jpg"}`}
        alt="puss in boots"
        className="h-72 rounded-xl transition group-hover:opacity-70"
        width={208}
        height={288}
      />
      <h3 className="mb-1 w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-white">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <RatingIcon rate={vote} bg={false} />
        <span className="text-md flex items-center justify-between rounded bg-banner-background px-2 font-semibold text-white">
          {releaseYear}
        </span>
      </div>
    </Link>
  );
};

export default MovieInfo;
