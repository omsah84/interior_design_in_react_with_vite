// import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const HowItWorksContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "40px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Container = styled(Box)({
  display: "flex",

  "@media (max-width: 700px)": {
    flexDirection: "column",
  },
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
  padding: "10px",
  marginBottom: "5px",
  "@media (max-width: 700px)": {
    fontSize: "15px",
    padding: "0px",
    marginBottom: "0px",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HowItWorks = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Button onClick={handleOpen} variant="contained" color="primary">
        BOOK FREE CONSULTATION
      </Button>
      <Modal open={open} onClick={handleClose}>
        <ContactUs sx={style} />
      </Modal>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
