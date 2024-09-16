// import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const HowItWorksContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "40px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StepContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
});

const StepIcon = styled(Box)({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
});

const StepText = styled(Typography)({
  fontSize: "16px",
  padding:'10px',
  marginBottom: "5px",
});

const Container = styled(Box)({
  display: "flex",
});

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <Typography variant="h4" gutterBottom>
        How it works
      </Typography>

      <Container>
        <StepContainer>
          <StepIcon>1</StepIcon>
          <StepText>Meet a designer</StepText>
        </StepContainer>
        <StepContainer>
          <StepIcon>2</StepIcon>
          <StepText>(5% payment) Book a renovation</StepText>
        </StepContainer>
        <StepContainer>
          <StepIcon>3</StepIcon>
          <StepText>(50% payment) Execution begins</StepText>
        </StepContainer>
        <StepContainer>
          <StepIcon>4</StepIcon>
          <StepText>(100% payment) Final installations</StepText>
        </StepContainer>
        <StepContainer>
          <StepIcon>5</StepIcon>
          <StepText>Move in and enjoy!</StepText>
        </StepContainer>
      </Container>
      <Button variant="contained" color="primary">
        BOOK FREE CONSULTATION
      </Button>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
