// import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)({
  backgroundColor: '#FFC0CB', // Pink background
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

const DownloadButton = styled(Button)({
  backgroundColor: '#FF0000', // Red background
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
});

const DownloadBanner = () => {
  return (
    <BannerContainer>
      <Heading>Download home interior guide</Heading>
      <SubHeading>
        {`Don't forget to consider these fundamental design guidelines to know before you start interior designing!`}
      </SubHeading>
      <DownloadButton variant="contained">DOWNLOAD NOW</DownloadButton>
    </BannerContainer>
  );
};

export default DownloadBanner;
