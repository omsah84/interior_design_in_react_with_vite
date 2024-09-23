// import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import img from "../assets/estimatorImg.png";

const EstimatorContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "40px 20px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

const SubHeading = styled(Typography)({
  fontSize: "16px",
  marginBottom: "30px",
});

const EstimatorButton = styled(Button)({
  backgroundColor: "#FF0000",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#D00000",
  },
  marginTop: "10px",
});

const PriceEstimator = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <EstimatorContainer>
      <Heading>DesignCost Estimator</Heading>
      <SubHeading>Estimate Your Interior Makeover Costs</SubHeading>
      <Slider {...settings}>
        <Box>
          <img
            src={img}
            alt="Example"
            style={{
              width: "200px",
              height: "150px",
              // borderRadius: "50%", // Circular image
              margin: "auto", // Centers the image
              display: "block", // Ensures margin auto works
            }}
          />

          <Typography variant="h6">Full Home</Typography>
          <Typography>
            Get an approximate costing for your full home interiors.
          </Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
        <Box>
          <img
            src={img}
            alt="Example"
            style={{
              width: "200px",
              height: "150px",
              // borderRadius: "50%", // Circular image
              margin: "auto", // Centers the image
              display: "block", // Ensures margin auto works
            }}
          />

          <Typography variant="h6">Kitchen</Typography>
          <Typography>
            Get an approximate costing for your kitchen interior.
          </Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
        <Box>
          <img
            src={img}
            alt="Example"
            style={{
              width: "200px",
              height: "150px",
              // borderRadius: "50%", // Circular image
              margin: "auto", // Centers the image
              display: "block", // Ensures margin auto works
            }}
          />

          <Typography variant="h6">Wardrobe</Typography>
          <Typography>Get an approximate costing for your wardrobe.</Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
      </Slider>
    </EstimatorContainer>
  );
};

export default PriceEstimator;
