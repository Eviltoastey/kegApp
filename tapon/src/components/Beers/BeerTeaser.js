import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function BeerTeaser(props) {
  const Card = styled.div`
    margin: 0.5rem;
  `;

  return (
    <Card className="card p-3 text-right">
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">
          <small className="text-muted">{props.data.startDate}</small>
        </p>
        <Link to={"/beers/" + props.data.id} className="stretched-link"></Link>
      </div>
    </Card>
  );
}

export default BeerTeaser;
