import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import ContactUs from "./ContactUs";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const BannerContainer = styled(Box)({
  backgroundColor: '#f2e2e5',
  padding: '40px 20px',
  textAlign: 'center',
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"300px",
  // Media query for small devices
  '@media (max-width: 600px)': {
    padding:'10px',
    height:'100%',
  },

});

const Heading = styled(Typography)({
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '20px',
  // Media query for small devices
  '@media (max-width: 600px)': {
    fontSize:'25px'
  },
});

const Paragraph = styled(Typography)({
  fontSize: '16px',
  color: '#000',
  marginBottom: '30px',
  width:"80%",
  textAlign: 'center',
    // Media query for small devices
    '@media (max-width: 600px)': {
      fontSize:'13px'
    },
});

const ActionButton = styled(Button)({
  backgroundColor: '#FF0000',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
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

const Banner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BannerContainer>
      <Heading>The home design you crave</Heading>
      <Paragraph>
        When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that will last a very long time.
      </Paragraph>
      <ActionButton onClick={handleOpen} variant="contained">BOOK FREE CONSULTATION</ActionButton>
      <Modal
          open={open}
          onClick={handleClose}
        >
          <ContactUs sx={style} />
        </Modal>
    </BannerContainer>
  );
};

export default Banner;
