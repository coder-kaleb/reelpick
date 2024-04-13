"use client";
import React, { useState } from "react";
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
    <main className="relative mx-auto flex flex-col max-w-screen-2xl h-screen">
      <NavContext.Provider value={contextVale}>
        <Nav />
        <div className="flex w-full items-start h-full">
          <Sidebar />
          <MovieWrapper />
        </div>
      </NavContext.Provider>
    </main>
  );
};

export default HomeMovi;



