import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { useQuery, gql } from "@apollo/client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { LOAD_KEG } from "../../GraphQL/Queries";
import { useParams } from "react-router-dom";

const Root = styled("div")({
  flexGrow: 1,
  margin: "16px",
});

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "16px",
});

const ProductDescription = styled(Typography)({
  marginBottom: "16px",
});

const ProductName = styled(Typography)({
  marginBottom: "16px",
});

const ProductPrice = styled(Typography)({
  marginBottom: "16px",
});

const AddToCartButton = styled(Button)({
  marginRight: "16px",
});

const AddToWishlistButton = styled(Button)({
  marginRight: "16px",
});

function KegDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_KEG, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <Root>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <ProductImage src={data.keg.image} alt="Product Image" />
            <ProductName variant="h4">{data.keg.name}</ProductName>
            <ProductDescription variant="body2">
              {data.keg.active
                ? `This keg is currently serving a nice cold , ${data.keg.beer.name} enjoy!`
                : "This keg is currently offline and not serving any beer"}
            </ProductDescription>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <ProductName variant="h4">{data.keg.beer.name}</ProductName>
            <ProductPrice variant="h6">
              {data.keg.beer.styleDescription}
            </ProductPrice>
            <AddToWishlistButton
              variant="contained"
              href={"/beers/" + data.keg.beer.id}
            >
              More info about this beer
            </AddToWishlistButton>
            <AddToWishlistButton variant="contained" color="secondary">
              write review
            </AddToWishlistButton>
          </Paper>
        </Grid>
      </Grid>
    </Root>
  );
}

export default KegDetail;
