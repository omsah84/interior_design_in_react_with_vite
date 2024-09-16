// import React from 'react'
import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

const OfferingsContainer = styled(Box)({
  backgroundColor: "#fbf5f5",
  padding: "40px 20px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

const ColumnHeading = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
});

const Container = styled(Stack)({
  display: "flex",
  justifyContent: "space-around",
  // margin:'0px 0px',

  "& > *": {
    backgroundColor: "white", // Adds space between children
    padding: "20px",
    flexBasis: "100%",
    borderRadius: "10px",

    "@media (max-width: 700px)": {
      // margin:'20px',
      // border:'2px solid red',
      padding: "20px",
    },
  },
  // Media query for small devices
  "@media (max-width: 700px)": {
    flexDirection: "column",
    gap: "20px",
    // border:'2px solid red',
  },
});

const ListItem = styled(Typography)({
  fontSize: "16px",
  marginBottom: "5px",
});

const Offerings = () => {
  return (
    <OfferingsContainer>
      <Heading>What we offer</Heading>
      <Container spacing={1} direction="row">
        <Stack item xs={12} md={4}>
          <ColumnHeading>Warranty</ColumnHeading>
          <ListItem>FLAT 10-year warranty on modular products</ListItem>
          <ListItem>Up to 1-year on-site service warranty</ListItem>
        </Stack>
        <Stack item xs={12} md={4}>
          <ColumnHeading>Our services</ColumnHeading>
          <ListItem>Modular kitchens</ListItem>
          <ListItem>Modular wardrobes</ListItem>
          <ListItem>Lighting</ListItem>
          <ListItem>Flooring</ListItem>
          <ListItem>Electrical work</ListItem>
          <ListItem>Civil work</ListItem>
          <ListItem>False ceiling</ListItem>
          <ListItem>Wall design & painting</ListItem>
        </Stack>

        <Stack item xs={12} md={4}>
          <ColumnHeading>Technology & science</ColumnHeading>
          <ListItem>AquaBloc® Technology</ListItem>
          <ListItem>DuraBuild™ Technology</ListItem>
          <ListItem>Design Science</ListItem>
        </Stack>
      </Container>
    </OfferingsContainer>
  );
};

export default Offerings;
