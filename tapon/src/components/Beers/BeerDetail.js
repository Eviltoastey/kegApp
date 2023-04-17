import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { Chip, Divider, Grid, LinearProgress } from "@mui/material";

import { LOAD_BEER } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/system";

function BeerDetail(props) {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  const { loading, error, data } = useQuery(LOAD_BEER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <>
      <Container sx={{ py: 6 }} maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {data.beer.name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {data.beer.description}
        </Typography>
      </Container>

      <Divider sx={{ py: 0 }}>
        <Chip label="Profile" />
      </Divider>

      <Container sx={{ py: 4 }} maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {data.beer.style}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {data.beer.styleDescription}
        </Typography>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Sub style
            </Typography>
            <Stack
              sx={{ display: "flex", justifyContent: "center" }}
              border="1"
              direction="row"
              spacing={2}
            >
              <Typography
                variant="h7"
                align="center"
                color="text.secondary"
                paragraph
              >
                {data.beer.subStyle}
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={4}>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Flavour
            </Typography>
            <Stack
              sx={{ display: "flex", justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Typography
                variant="h7"
                align="center"
                color="text.secondary"
                paragraph
              >
                {data.beer.subFlavour}
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={4}>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Active
            </Typography>
            <Stack
              sx={{ display: "flex", justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Typography
                variant="h7"
                align="center"
                color="text.secondary"
                paragraph
              >
                {data.beer.active ? "YES" : "NO"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ py: 4 }}>
        <Chip label="Alcohol" />
      </Divider>

      <Container sx={{ py: 8 }} maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              {...{ value: beer.alcohol * 4 }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              data.beer.alcohol
            )}%`}</Typography>
          </Box>
        </Box>
        <Grid container sx={{ py: 2 }} spacing={2}>
          <Grid xs={2}>
            <Stack>No alcohol</Stack>
          </Grid>
          <Grid xs={2}>
            <Stack>Balanced</Stack>
          </Grid>
          <Grid xs={2}>
            <Stack>Boozy</Stack>
          </Grid>
          <Grid xs={2}>
            <Stack>Strong</Stack>
          </Grid>
          <Grid xs={2}>
            <Stack>Ice distilled</Stack>
          </Grid>
          <Grid xs={2}>
            <Stack>Liquor</Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BeerDetail;
