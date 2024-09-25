import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#f8f8f8",
  padding: "20px",
  textAlign: "center",
});

const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-around", // Space items evenly in a single row
  alignItems: "center", // Center items vertically
  flexWrap: "wrap", // Allow wrapping on smaller screens
  marginBottom: "30px",
  "@media (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "center", // Center items on smaller screens
  },
});

const FooterLink = styled(Link)({
  margin: "0 10px",
  color: "#000",
  textDecoration: "none",
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
      <Container m={3}>
        {/* Menu Links */}
        <Box display="flex" flexDirection={{ xs: "column", sm: "column" }}>
          <FooterLink href="#">Our Services</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
        </Box>
        <Box display="flex" flexDirection={{ xs: "column", sm: "column" }}>
          <FooterLink href="#">Interior Designers in Pune</FooterLink>
          <FooterLink href="#">Interior Designers in Kolkata</FooterLink>
          <FooterLink href="#">Interior Designers in Gurgaon</FooterLink>
        </Box>

        {/* Address Section */}
        <Address>
          123 Design Street, Suite 456
          <br />
          Pune, Maharashtra, 411001
          <br />
          Phone: (123) 456-7890
          <br />
          Email: contact@example.com
        </Address>
      </Container>

      <Typography variant="body2" color="textSecondary">
        Copyright © 2023. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
