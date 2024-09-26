import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#f3f0de",
  padding: "5px",
  textAlign: "center",
});

const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-around", // Space items evenly in a single row
  alignItems: "center", // Center items vertically
  flexWrap: "wrap", // Allow wrapping on smaller screens
  marginBottom: "20px",
  "@media (max-width: 700px)": {
    gap:"20px",
    flexDirection: "column",
    alignItems: "center", // Center items on smaller screens
  },
});

const FooterLink = styled(Link)({
  margin: "0 10px",
  color: "#000",
  textDecoration: "none",
  padding: "3px 0px",
  fontSize: "14px", // Adjusted font size for better visibility
  "&:hover": {
    textDecoration: "underline",
  },
});

const Address = styled(Typography)({
  margin: "10px 0", // Margin for spacing
  fontSize: "14px", // Adjusted font size
  color: "#555", // Slightly darker color for contrast
  textAlign: "center", // Center the address text
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container m={1}>
        {/* Address Section */}
        <Address>
          SY NO-101&156/2, Niladri, D Thogur
          <br />
          Bangalore, Karnataka - 560100
          <br />
          Phone: +91 7975230478
          <br />
          Email: contact@example.com
        </Address>

        {/* Menu Links */}
        <Box display="flex" flexDirection={{ xs: "column", sm: "column" }}>
          <FooterLink href="#">Design Ideas</FooterLink>
          <FooterLink href="#">Project Gallery</FooterLink>
          <FooterLink href="#">Room Designs</FooterLink>
          <FooterLink href="#">Style Guide</FooterLink>
          <FooterLink href="#">Materials & Finishes</FooterLink>
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", sm: "column" }}>
          {/* <FooterLink href="#">Interior Designers in Kolkata</FooterLink> */}
          {/* <FooterLink href="#">Interior Designers in Gurgaon</FooterLink> */}
          <FooterLink href="#">Interior Designers in Mumbai</FooterLink>
          <FooterLink href="#">Interior Designers in Delhi</FooterLink>
          <FooterLink href="#">Interior Designers in Hyderabad</FooterLink>
          <FooterLink href="#">Interior Designers in Bangalore</FooterLink>
          <FooterLink href="#">Interior Designers in Chennai</FooterLink>
          {/* <FooterLink href="#">Interior Designers in Ahmedabad</FooterLink> */}
          <FooterLink href="#">Interior Designers in Jaipur</FooterLink>
          <FooterLink href="#">Interior Designers in Chandigarh</FooterLink>
          <FooterLink href="#">Interior Designers in Noida</FooterLink>
        </Box>
      </Container>

      <Typography variant="body2" color="textSecondary">
        Copyright © 2018. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
