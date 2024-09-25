// src/components/HomeSpaceInterior.js
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  styled,
  useMediaQuery, // Import useMediaQuery
} from "@mui/material";
import HomeImg from "../assets/Royal.jpg";

const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Change to column for better stacking on small screens
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto", // Allow height to adjust based on content
  padding: "10px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row", // Change back to row for medium and larger screens
    height: "400px",
  },
}));

const HomeSpaceInterior = () => {
  const isMediumScreen = useMediaQuery('(max-width: 1000px)'); // Check if screen width is less than 1000px

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#f5f5f5",
        margin: "auto",
      }}
    >
      <Container>
        {!isMediumScreen && ( // Only render CardMedia if screen is larger than 1000px
          <CardMedia
            component="img"
            height="90%"
            image={HomeImg} // Replace with your image URL
            alt="Interior Design"
            sx={{ objectFit: "cover", width: "100%" }} // Make image cover the space
          />
        )}
        <CardContent sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Interior Design Is Making The Best Possible Use Of The Available
            Space...
          </Typography>
          <Typography variant="body1">
            InteriorCafe is a premier interior design firm dedicated to clients
            who value quality and are meticulous about their design choices. We
            specialize in crafting elegant solutions for primary residences,
            luxury villas, vacation homes, and commercial spaces. Our
            collaborative design process empowers clients to express and refine
            their unique style and preferences.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px" }}
          >
            About InteriorCafe
          </Button>
        </CardContent>
      </Container>
    </Box>
  );
};

export default HomeSpaceInterior;
