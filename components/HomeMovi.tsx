"use client";
import React, { Suspense } from "react";
import MovieWrapper from "./MovieWrapper";

const HomeMovi = () => {
  return (
        <Suspense fallback={<div className="skeleton h-[75vh] w-full"></div>}>
          <MovieWrapper />
        </Suspense>
  );
};

export default HomeMovi;
