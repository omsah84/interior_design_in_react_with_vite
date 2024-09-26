import { Box, Typography, Grid, Paper, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const AboutContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  maxWidth: "1200px", // Optional: Set a maximum width
  margin: "30px auto", // Centers the container
  padding: theme.spacing(4),
  backgroundColor: "#f9f9f9",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
  color: theme.palette.primary.main,
  textAlign: "center",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

const TeamMember = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#fff",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CenteredButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(3),
}));

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title variant="h4">About Us</Title>
      <SubTitle variant="h6">
        Welcome to InteriorCafe, where we turn your interior design dreams into
        reality. Our team of experts is dedicated to providing you with
        innovative design solutions tailored to your unique style and needs.
      </SubTitle>

      <Divider sx={{ marginY: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TeamMember>
            <Typography variant="h5">Our Mission</Typography>
            <Typography>
              At InteriorCafe, our mission is to create beautiful, functional
              spaces that enhance the way you live, work, and play.
            </Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} md={6}>
          <TeamMember>
            <Typography variant="h5">Our Vision</Typography>
            <Typography>
              Our vision is to be a leading interior design company recognized
              for creativity, quality, and customer satisfaction.
            </Typography>
          </TeamMember>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 4 }} />

      <Title variant="h4">Meet Our Team</Title>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Typography variant="h6">John Doe</Typography>
            <Typography>Lead Designer</Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Typography variant="h6">Jane Smith</Typography>
            <Typography>Interior Consultant</Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Typography variant="h6">Alice Johnson</Typography>
            <Typography>Project Manager</Typography>
          </TeamMember>
        </Grid>
      </Grid>

      {/* Centered Button */}
      <CenteredButtonContainer>
        <ButtonStyled variant="contained">
          Contact Us to Learn More
        </ButtonStyled>
      </CenteredButtonContainer>
    </AboutContainer>
  );
};

export default AboutUs;
