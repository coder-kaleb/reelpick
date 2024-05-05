"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import { NavContext } from "@/context";
import Sidebar from "./Sidebar";
import MovieWrapper from "./MovieWrapper";
import PopMovie from "./TrendingMovie";

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
      <MovieWrapper />
    </NavContext.Provider>
  );
};

export default HomeMovi;
