import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styling for the container
const ConnectContainer = styled(Box)({
  backgroundColor: '#f1eded',
  padding: '50px 20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '300px',
});

// Styling for the buttons container
const ButtonsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
});

// Styling for the Call Now button
const ConnectButton = styled(Button)({
  backgroundColor: '#FF0000', // Red background for CALL NOW button
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
});

// Styling for the WhatsApp button
const WhatsAppButton = styled(Button)({
  backgroundColor: '#25D366', // Green background for WHATSAPP button
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#1DA851',
  },
});

const ConnectWithUs = () => {
  const phoneNumber = '+917975230478'; // Replace with your phone number
  const whatsappNumber = '+917975230478'; // Replace with your WhatsApp number

  return (
    <ConnectContainer>
      <Typography variant="h4" gutterBottom>
        Connect with us
      </Typography>
      <Typography variant="body1">
        Reach out on WhatsApp or give us a call for the best home design experience.
      </Typography>
      <ButtonsContainer>
        <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
          <ConnectButton variant="contained">CALL NOW</ConnectButton>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          style={{ textDecoration: 'none' }}
        >
          <WhatsAppButton variant="contained">WHATSAPP</WhatsAppButton>
        </a>
      </ButtonsContainer>
    </ConnectContainer>
  );
};

export default ConnectWithUs;
