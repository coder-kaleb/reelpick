import React from "react";

const LoadingSkeleton = () => {
  return (
    <>
      <div className="relative h-[700px] w-full overflow-hidden rounded-lg bg-surface-l"></div>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-loading"></div>
    </>
  );
};

export default LoadingSkeleton;
