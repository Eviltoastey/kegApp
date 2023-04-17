import React from "react";
import ReviewTeaser from "./ReviewTeaser";
import styled from "styled-components";

const ReviewTeasers = () => {
  const Collection = styled.div``;

  return (
    <>
      <h3>Reviews</h3>
      <Collection className="card-columns d-flex flex-row">
        <ReviewTeaser></ReviewTeaser>
      </Collection>
    </>
  );
};

export default ReviewTeasers;
