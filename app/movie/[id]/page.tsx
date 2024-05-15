import DetailMovie from "@/components/DetailMovie";
import React, { Suspense } from "react";

async function Movie({ params }: { params: { id: number } }) {
  return (
    <Suspense
      fallback={
        <div className="skeleton h-[calc(100vh-88px)] w-full overflow-y-auto"></div>
      }
    >
      <DetailMovie pid={params.id} />
    </Suspense>
  );
}

export default Movie;
