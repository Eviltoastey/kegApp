import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import { LOAD_BEERS } from "../../GraphQL/Queries";

function BeersTeasers() {
  const { error, loading, data } = useQuery(LOAD_BEERS);
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    if (data) {
      setBeerList(data.beers);
    }
  }, [data]);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {beerList.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
              <Button
                variant="filledTonal"
                href={"/beers/" + card.id}
                size="large"
              >
                View
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BeersTeasers;
