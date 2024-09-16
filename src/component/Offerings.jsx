// import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const OfferingsContainer = styled(Box)({
  backgroundColor: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const ColumnHeading = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const ListItem = styled(Typography)({
  fontSize: '16px',
  marginBottom: '5px',
});

const Offerings = () => {
  return (
    <OfferingsContainer>
      <Heading>What we offer</Heading>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ColumnHeading>Our services</ColumnHeading>
          <ListItem>Modular kitchens</ListItem>
          <ListItem>Modular wardrobes</ListItem>
          <ListItem>Lighting</ListItem>
          <ListItem>Flooring</ListItem>
          <ListItem>Electrical work</ListItem>
          <ListItem>Civil work</ListItem>
          <ListItem>False ceiling</ListItem>
          <ListItem>Wall design & painting</ListItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColumnHeading>Warranty</ColumnHeading>
          <ListItem>FLAT 10-year warranty on modular products</ListItem>
          <ListItem>Up to 1-year on-site service warranty</ListItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColumnHeading>Technology & science</ColumnHeading>
          <ListItem>AquaBloc® Technology</ListItem>
          <ListItem>AntiBubble® Technology</ListItem>
          <ListItem>DuraBuild™ Technology</ListItem>
          <ListItem>Design Science</ListItem>
        </Grid>
      </Grid>
    </OfferingsContainer>
  );
};

export default Offerings;
