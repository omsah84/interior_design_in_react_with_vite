import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
    // backgroundColor:"red",
    padding:"20px 20px",
});

const FormContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "20px",
  width: "350px",
  margin: "0 auto",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius:'10px',
  height:"400px"
});


const ContactUs = () => {
  return (
    <Container>

      <FormContainer >
      <Typography variant="h5" align="center" gutterBottom>
        Get a Free Quote
      </Typography>
        <TextField fullWidth label="Name" margin="normal" variant="outlined" />
        <TextField
          fullWidth
          label="Phone number"
          margin="normal"
          variant="outlined"
        />
        <FormControlLabel
          control={<Checkbox name="whatsappUpdates" color="primary" />}
          label="Send me updates on WhatsApp"
        />
        <Button variant="contained" color="primary" fullWidth>
          GET FREE QUOTE
        </Button>
        <Typography variant="body2" color="textSecondary" mt={2}>
          By submitting this form, you agree to the privacy policy & terms and
          conditions.
        </Typography>
      </FormContainer>
    </Container>
  );
};

export default ContactUs;
