import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const Header = styled.header`
    height: 80vh;
    min-height: 500px;
    background-image: url("https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  return (
    <Header>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <Typography variant="h3">Lokaal gebrouwen bier</Typography>
            <Typography>
              Hier vind je alle bieren die ik heb gebrouwen en die nu
              beschikbaar zijn!
            </Typography>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Header;
