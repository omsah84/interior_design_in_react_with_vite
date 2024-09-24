import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
  padding: '20px 20px',
});

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  width: "100%", // Full width on smaller screens
  maxWidth: "350px", // Max width to limit size on larger screens
  margin: "0 auto",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  height: "400px",

  // Responsive design using media queries
  [theme.breakpoints.down("sm")]: {
    width: "90%", // Slightly reduce padding on small screens
    padding: "15px",
    height: "auto", // Adjust height for better responsiveness
  },
  [theme.breakpoints.up("md")]: {
    width: "80%", // Adjust width for medium devices
    padding: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "350px", // Maintain the original size on larger screens
  },
}));

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('WhatsApp Updates:', whatsappUpdates);
    
    // Example of how to handle WhatsApp updates opt-in
    if (whatsappUpdates) {
      // Here you can implement logic to handle WhatsApp updates, e.g., subscribing to updates
      console.log('User opted in for WhatsApp updates.');
    }

    // Clear form fields after submission (optional)
    setName('');
    setPhoneNumber('');
    setWhatsappUpdates(false);

    // Show success alert
    alert('Successfully submitted!');
  };

  return (
    <Container>
      <FormContainer>
        <Typography variant="h5" align="center" gutterBottom>
          Get a Free Quote
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Phone number"
            margin="normal"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={whatsappUpdates}
                onChange={(e) => setWhatsappUpdates(e.target.checked)}
                name="whatsappUpdates"
                color="primary"
              />
            }
            label="Send me updates on WhatsApp"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" mt={2}>
          By submitting this form, you agree to the privacy policy & terms and
          conditions.
        </Typography>
      </FormContainer>
    </Container>
  );
};

export default ContactUs;
