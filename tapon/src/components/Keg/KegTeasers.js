import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { LOAD_KEGS } from "../../GraphQL/Queries";
import { Badge } from "@mui/material";

function KegsTeasers() {
  const { error, loading, data } = useQuery(LOAD_KEGS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {data.kegs?.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Badge
              color={card.active ? "success" : "error"}
              badgeContent={card.active ? "Active" : "Inactive"}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img" image={card.image} alt="random" />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>Currently serving {card.beer.name}</Typography>
                </CardContent>
                <Button
                  variant="filledTonal"
                  href={"/kegs/" + card.id}
                  size="large"
                >
                  View
                </Button>
              </Card>
            </Badge>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default KegsTeasers;
