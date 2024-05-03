import { Star } from "lucide-react";
import React from "react";

const RatingIcon = ({ rate, bg }: { rate: string; bg: boolean }) => {
  return (
    <div className="flex items-center gap-1">
      <Star className="size-4" />
      <span
        className={`flex items-center justify-between rounded font-semibold ${bg ? "bg-banner-background" : "bg-transparent"}  px-1 `}
      >
        {rate}
      </span>
      <span className="text-md">2022</span>
    </div>
  );
};

export default RatingIcon;
