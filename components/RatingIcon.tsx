import { Star } from "lucide-react";
import React from "react";

const RatingIcon = ({ rate, bg }: { rate: string; bg: boolean }) => {
  return (
    <div className="flex items-center gap-[2px]">
      <Star className="size-4 text-red-600" strokeWidth={4} />
      <span
        className={`flex items-center justify-between rounded font-semibold ${bg ? "bg-banner-background" : "bg-transparent text-white"}  px-1 `}
      >
        {rate}
      </span>
    </div>
  );
};

export default RatingIcon;
