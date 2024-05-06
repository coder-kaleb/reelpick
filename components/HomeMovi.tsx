"use client";
import React, { Suspense, useState } from "react";
import Nav from "./Nav";
import { NavContext } from "@/context";
import Sidebar from "./Sidebar";
import MovieWrapper from "./MovieWrapper";

const HomeMovi = () => {
  const [navState, setNavState] = useState({
    isOpen: false,
    extendWidth: false,
  });
  const contextVale = {
    ...navState,
    setNavState,
  };
  return (
    <NavContext.Provider value={contextVale}>
      <Nav />
      <Sidebar />
      <Suspense fallback={<div className="skeleton h-[75vh] w-full"></div>}>
        <MovieWrapper />
      </Suspense>
    </NavContext.Provider>
  );
};

export default HomeMovi;
