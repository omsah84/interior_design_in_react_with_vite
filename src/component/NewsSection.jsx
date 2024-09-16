// import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const NewsContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "40px 20px",
  textAlign: "center",
});

const NewsItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
});

const NewsLogo = styled(Box)({
  width: "100px",
  height: "auto",
  marginBottom: "10px",
});

const NewsSection = () => {
  return (
    <NewsContainer>
      <Typography variant="h4" gutterBottom>
        In the news
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <NewsItem>
            <NewsLogo>
              <img
                src="path/to/economic-times-logo.png"
                alt="The Economic Times"
              />
            </NewsLogo>
            <Typography variant="body1">
              Livspace said it crossed the billion-dollar valuation mark after
              raising $180 million in a late-stage funding round led by KKR & Co
              ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            <NewsLogo>
              <img src="path/to/mint-logo.png" alt="mint" />
            </NewsLogo>
            <Typography variant="body1">
              Livspace has joined the unicorn club after the online home décor
              startup backed by private equity firm TPG raised $180 mn at a
              valuation of over $1.2 bn ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            <NewsLogo>
              <img src="path/to/architect-logo.png" alt="ARCHITECT" />
            </NewsLogo>
            <Typography variant="body1">
              The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore,
              combines inspiration, information and technology ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            <NewsLogo>
              <img
                src="path/to/economic-times-logo.png"
                alt="The Economic Times"
              />
            </NewsLogo>
            <Typography variant="body1">
              The company has also opened Experience Centres (ECs) spanning
              1500 sq ft each in prime locations in all four cities ...
            </Typography>
          </NewsItem>
        </Grid>
      </Grid>
    </NewsContainer>
  );
};

export default NewsSection;
