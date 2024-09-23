// import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
// import img from "../assets/image1.png"

const NewsContainer = styled(Box)({
  backgroundColor: "#f8f8f8",
  padding: "40px 20px",
  textAlign: "center",
});

const NewsItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: " 10px 20px",
  boxShadow: "0px 2px 0px black",
  padding: "10px 0px",
  // height:"160px"
});

// const NewsLogo = styled(Box)({
//   marginBottom: "10px",

//   '& img': {
//     width: '150px',
//     height: '150px',
//     borderRadius: '50%',
//     border: '2px solid blue',
//   },
// });

const NewsSection = () => {
  return (
    <NewsContainer>
      <Typography variant="h4" gutterBottom>
        In the news
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <NewsItem>
            {/* <NewsLogo>
              <img
                src={img}
                alt="The Economic Times"
              />
            </NewsLogo> */}
            <Typography variant="body1">
              InteriorCafe said it crossed the billion-dollar valuation mark
              after raising $180 million in a late-stage funding round led by
              KKR & Co ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            {/* <NewsLogo>
              <img src={img} alt="mint" />
            </NewsLogo> */}
            <Typography variant="body1">
              InteriorCafe has joined the unicorn club after the online home
              décor startup backed by private equity firm TPG raised $180 mn at
              a valuation of over $1.2 bn ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            {/* <NewsLogo>
              <img src={img} alt="ARCHITECT" />
            </NewsLogo> */}
            <Typography variant="body1">
              The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore,
              combines inspiration, information and technology ...
            </Typography>
          </NewsItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsItem>
            {/* <NewsLogo>
              <img
                src={img}
                alt="The Economic Times"
              />
            </NewsLogo> */}
            <Typography variant="body1">
              The company has also opened Experience Centres (ECs) spanning 1500
              sq ft each in prime locations in all four cities ...
            </Typography>
          </NewsItem>
        </Grid>
      </Grid>
    </NewsContainer>
  );
};

export default NewsSection;
