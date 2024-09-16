// import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';

const EstimatorContainer = styled(Box)({
  backgroundColor: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const SubHeading = styled(Typography)({
  fontSize: '16px',
  marginBottom: '30px',
});

const EstimatorButton = styled(Button)({
  backgroundColor: '#FF0000',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
  marginTop: '10px',
});

const PriceEstimator = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <EstimatorContainer>
      <Heading>Interior Price Estimator</Heading>
      <SubHeading>Calculate the approximate cost of doing up your interiors</SubHeading>
      <Slider {...settings}>
        <Box>
          <Typography variant="h6">Full Home</Typography>
          <Typography>Get an approximate costing for your full home interiors.</Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
        <Box>
          <Typography variant="h6">Kitchen</Typography>
          <Typography>Get an approximate costing for your kitchen interior.</Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
        <Box>
          <Typography variant="h6">Wardrobe</Typography>
          <Typography>Get an approximate costing for your wardrobe.</Typography>
          <EstimatorButton variant="contained">CALCULATE</EstimatorButton>
        </Box>
      </Slider>
    </EstimatorContainer>
  );
};

export default PriceEstimator;
