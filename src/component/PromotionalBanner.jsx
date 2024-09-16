// import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)({
  backgroundColor: '#5719f4', // Purple background
  padding: '40px 20px',
  textAlign: 'center',
  color: '#FFF',
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#FFEB3B', // Yellow text
});

const SubHeading = styled(Typography)({
  fontSize: '16px',
  marginBottom: '30px',
});

const ActionButton = styled(Button)({
  backgroundColor: '#FF5722', // Orange background
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#E64A19',
  },
});

const PromotionalBanner = () => {
  return (
    <BannerContainer>
      <Heading>Your dream home is just a click away</Heading>
      <SubHeading>
        Book a free consultation with our expert interior designers.
      </SubHeading>
      <ActionButton variant="contained">START YOUR DESIGN JOURNEY</ActionButton>
    </BannerContainer>
  );
};

export default PromotionalBanner;
