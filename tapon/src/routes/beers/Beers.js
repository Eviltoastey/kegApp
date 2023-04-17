import React from "react";
import BeersTeasers from "../../components/Beers/BeerTeasers";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const BeerOverviewPage = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Beer collection
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          A collection of all the beers I've brewed so far. Check the active
          beers to see which ones are currently being served in the brewery!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">See active beers</Button>
        </Stack>
      </Container>
      <BeersTeasers></BeersTeasers>
    </>
  );
};

export default BeerOverviewPage;
