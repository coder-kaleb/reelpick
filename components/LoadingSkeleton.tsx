import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden rounded-lg bg-surface-l">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-loading"></div>
    </div>
  );
};

export default LoadingSkeleton;
