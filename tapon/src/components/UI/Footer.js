import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Divider sx={{ py: 12 }}></Divider>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            <Link href="https://untappd.com/">My brewery on Untappd</Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022. [] Limited
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
