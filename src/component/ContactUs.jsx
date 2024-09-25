import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  padding: "20px 20px",
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
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({}); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}; // Object to store error messages

    // Validation
    if (!name) {
      newErrors.name = "Please enter your name.";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Please enter your phone number.";
    }
    if (!email) {
      newErrors.email = "Please enter your email address.";
    }
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set the error messages state
    } else {
      // Handle form submission logic here, e.g., send data to an API
      console.log("Name:", name);
      console.log("Phone Number:", phoneNumber);
      console.log("Email:", email);

      // Clear form fields after submission (optional)
      setName("");
      setPhoneNumber("");
      setEmail("");
      setErrors({}); // Clear error messages

      // Show success alert
      alert("Successfully submitted!");
    }
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
            error={!!errors.name} // Show red border if there's an error
          />

          <TextField
            fullWidth
            label="Phone number"
            margin="normal"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={!!errors.phoneNumber} // Show red border if there's an error
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email} // Show red border if there's an error
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
