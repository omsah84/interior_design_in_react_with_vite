// import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const ConnectContainer = styled(Box)({
  backgroundColor: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
});

const ConnectButton = styled(Button)({
  backgroundColor: '#FF0000', // Red background for CALL NOW button
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
});

const WhatsAppButton = styled(Button)({
  backgroundColor: '#25D366', // Green background for WHATSAPP button
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#1DA851',
  },
});

const ConnectWithUs = () => {
  return (
    <ConnectContainer>
      <Typography variant="h4" gutterBottom>
        Connect with us
      </Typography>
      <Typography variant="body1">
        Reach out on WhatsApp or give us a call for the best home design experience.
      </Typography>
      <ButtonsContainer>
        <ConnectButton variant="contained">CALL NOW</ConnectButton>
        <WhatsAppButton variant="contained">WHATSAPP</WhatsAppButton>
      </ButtonsContainer>
    </ConnectContainer>
  );
};

export default ConnectWithUs;
