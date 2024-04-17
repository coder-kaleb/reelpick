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
    <main className="h-[250vh] w-full">
      <NavContext.Provider value={contextVale}>
        <Nav />
        <div className="flex h-full w-full items-start relative">
          <Sidebar />
          <MovieWrapper />
        </div>
      </NavContext.Provider>
    </main>
  );
};

export default HomeMovi;
