// import React from 'react';
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShieldIcon from "@mui/icons-material/Shield";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalculateIcon from "@mui/icons-material/Calculate";
import { styled } from "@mui/system"; // Correct import
import Slider from "react-slick"; // Import the carousel

const Container = styled(Box)({
  height: "130px",
  width: "100%",
  // border:'2px solid red',
  "@media (max-width:700px)": {
    height: "100px",
  },
});

// Carousel configuration
const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: true,
  responsive: [
    {
      breakpoint: 700, // For screens up to 768px wide
      settings: {
        slidesToShow: 2, // Show only 1 slide
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000, // For screens up to 768px wide
      settings: {
        slidesToShow: 3, // Show only 1 slide
        slidesToScroll: 1,
      },
    },
  ],
};

const ChooseUs = () => {
  return (
    <Box sx={{ padding: "20px 0" }}>
      <Typography variant="h4" align="center" p={4}>
        Why Choose Us
      </Typography>
      <Container spacing={4}>
        <Slider {...settings}>
          <Box textAlign="center">
            <HomeIcon sx={{ fontSize: 30, color: "#000" }} />
            <Typography sx={{ marginTop: 1, fontSize: 16, color: "#000" }}>
              Personalized designs
            </Typography>
          </Box>
          <Box textAlign="center">
            <ShieldIcon sx={{ fontSize: 30, color: "#000" }} />
            <Typography sx={{ marginTop: 1, fontSize: 16, color: "#000" }}>
              Flat 10-year warranty
            </Typography>
          </Box>
          <Box textAlign="center">
            <PriceCheckIcon sx={{ fontSize: 30, color: "#000" }} />
            <Typography sx={{ marginTop: 1, fontSize: 16, color: "#000" }}>
              Transparent pricing
            </Typography>
          </Box>
          <Box textAlign="center">
            <LocationCityIcon sx={{ fontSize: 30, color: "#000" }} />
            <Typography sx={{ marginTop: 1, fontSize: 16, color: "#000" }}>
              600+ <br />
              In-house Designer
            </Typography>
          </Box>
          <Box textAlign="center">
            <CalculateIcon sx={{ fontSize: 30, color: "#000" }} />
            <Typography sx={{ marginTop: 1, fontSize: 16, color: "#000" }}>
              Easy EMIs
            </Typography>
          </Box>
        </Slider>
      </Container>
    </Box>
  );
};

export default ChooseUs;
