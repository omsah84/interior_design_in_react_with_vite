// import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShieldIcon from '@mui/icons-material/Shield';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { styled } from '@mui/system'; // Correct import

const Container = styled(Box)({
  display:'flex',
  justifyContent:'space-around',
  height:'150px',
  alignItems:"center"
});

const IconsSection = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Container spacing={4}>
        <Box textAlign="center">
          <HomeIcon sx={{ fontSize: 40, color: '#000' }} />
          <Typography sx={{ marginTop: 1, fontSize: 16, color: '#000' }}>
            Personalized designs
          </Typography>
        </Box>
        <Box textAlign="center">
          <ShieldIcon sx={{ fontSize: 40, color: '#000' }} />
          <Typography sx={{ marginTop: 1, fontSize: 16, color: '#000' }}>
            Flat 10-year warranty
          </Typography>
        </Box>
        <Box textAlign="center">
          <PriceCheckIcon sx={{ fontSize: 40, color: '#000' }} />
          <Typography sx={{ marginTop: 1, fontSize: 16, color: '#000' }}>
            Transparent pricing
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default IconsSection;
