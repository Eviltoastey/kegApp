import React from "react";
import BeersTeasers from "../components/Beers/BeerTeasers";
import Header from "../components/Header/Header";
import KegTeasers from "../components/Keg/KegTeasers";
import ReviewTeasers from "../components/Reviews/ReviewTeasers";

function HomePage() {
  return (
    <>
      <Header> </Header>
      <div className="container">
        <KegTeasers />

        <ReviewTeasers />

        <BeersTeasers />
      </div>
    </>
  );
}

export default HomePage;
