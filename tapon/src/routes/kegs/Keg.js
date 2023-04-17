import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import KegsTeasers from "../../components/Keg/KegTeasers";

const KegPage = () => {
  return (
    <div className="container">
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Keg collection
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          A collection of all the kegs in my brewery. Here you can see which
          kegs are active and which beer is currently in them.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        ></Stack>
      </Container>
      <KegsTeasers></KegsTeasers>
    </div>
  );
};

export default KegPage;
