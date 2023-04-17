import React, { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./routes/Home";
import KegPage from "./routes/kegs/Keg";
import BeersOverviewPage from "./routes/beers/Beers";
import BeerDetailPage from "./routes/beers/BeerDetail";

import NavBar from "./components/UI/NavBar";
import NotFoundPage from "./routes/404";
import Footer from "./components/UI/Footer";
import KegDetailPage from "./routes/kegs/KegDetail";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/kegs" element={<KegPage />} />
        <Route path="/kegs/:id" element={<KegDetailPage />} />

        <Route path="/beers" element={<BeersOverviewPage />} />
        <Route path="/beers/:id" element={<BeerDetailPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
