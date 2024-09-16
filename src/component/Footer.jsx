// import React from 'react';
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#f8f8f8",
  padding: "20px",
  textAlign: "center",
});

const Container = styled(Box)({
  display: "flex",
  "@media (max-width: 700px)": {
    flexDirection: "column",
    gap: "20px",
  },
});
const FooterLink = styled(Link)({
  margin: "10 10px",
  color: "#000",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "10px",
  flexBasis:'100%',

  "&:hover": {
    textDecoration: "underline",
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container m={3}>
        <FooterLink href="#">Interior designers in Pune</FooterLink>
        <FooterLink href="#">Interior designers in Kolkata</FooterLink>
        <FooterLink href="#">Interior designers in Gurgaon</FooterLink>
      </Container>
      <Typography variant="body4" color="textSecondary">
        © 2024 domain.com - All Rights Reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
