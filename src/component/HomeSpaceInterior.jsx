// src/components/HomeSpaceInterior.js
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  styled,
} from "@mui/material";
import HomeImg from "../assets/Royal.jpg";

const Container = styled(Card)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "400px",
  padding: "10px",
});

const HomeSpaceInterior = () => {
  return (
    <Box
      sx={{
        padding: 2,
        // textAlign: "center",
        backgroundColor: "#f5f5f5",
        margin: "auto",
      }}
    >
      <Container>
        <CardMedia
          component="img"
          height="90%"
          image={HomeImg} // Replace with your image URL
          alt="Interior Design"
        />
        <CardContent sx={{ padding: "30px" }}>
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
            About Home Space Interior
          </Button>
        </CardContent>
      </Container>
    </Box>
  );
};

export default HomeSpaceInterior;
