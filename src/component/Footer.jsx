// import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#f8f8f8',
  padding: '20px',
  textAlign: 'center',
});

const FooterLink = styled(Link)({
  margin: '0 10px',
  color: '#000',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="textSecondary">
        © 2022 Livspace.com - All Rights Reserved.
      </Typography>
      <Box mt={2}>
        <FooterLink href="#">Interior designers in Pune</FooterLink>
        <FooterLink href="#">Interior designers in Mumbai</FooterLink>
        <FooterLink href="#">Interior designers in Bangalore</FooterLink>
        <FooterLink href="#">Interior designers in Hyderabad</FooterLink>
        <FooterLink href="#">Interior designers in Chennai</FooterLink>
        <FooterLink href="#">Interior designers in Noida</FooterLink>
        <FooterLink href="#">Interior designers in Kolkata</FooterLink>
        <FooterLink href="#">Interior designers in Gurgaon</FooterLink>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
