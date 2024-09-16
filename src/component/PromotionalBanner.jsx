// import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const BannerContainer = styled(Box)({
  backgroundColor: "#5719f4", // Purple background
  padding: "40px 20px",
  textAlign: "center",
  color: "#FFF",
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#FFEB3B", // Yellow text
});

const SubHeading = styled(Typography)({
  fontSize: "16px",
  marginBottom: "30px",
});

const ActionButton = styled(Button)({
  backgroundColor: "#FF5722", // Orange background
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#E64A19",
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

const PromotionalBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BannerContainer>
      <Heading>Your dream home is just a click away</Heading>
      <SubHeading>
        Book a free consultation with our expert interior designers.
      </SubHeading>
      <ActionButton onClick={handleOpen} variant="contained">
        START YOUR DESIGN JOURNEY
      </ActionButton>
      <Modal open={open} onClick={handleClose}>
        <ContactUs sx={style} />
      </Modal>
    </BannerContainer>
  );
};

export default PromotionalBanner;
