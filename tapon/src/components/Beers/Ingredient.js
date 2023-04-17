import React from 'react';
import YourSvg from "./hops.svg";

const Ingredient = (props) => {
  return (
    <div class="">
        <img 
        src={YourSvg}
        alt="triangle with all three sides equal"
        height="87px"
        width="100px" />
        <p>Chinook</p>
    </div>
  );
}

export default Ingredient;
