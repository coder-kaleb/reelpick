import React from "react";

const LoadingSkeleton = () => {
  return (
    <>
      <div className="relative h-[700px] w-full overflow-hidden rounded-lg bg-surface-l"></div>
      <div className="bg-loading animate-shimmer absolute inset-0 -translate-x-full"></div>
    </>
  );
};

export default LoadingSkeleton;
