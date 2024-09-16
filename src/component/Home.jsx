import { styled } from "@mui/system";
import Homeimg from "../assets/HomeImg.jpg";
import ContactUs from "./ContactUs";

// Correct way to apply background image using styled
const Container = styled("div")({
  height: "500px",
  backgroundImage: `url(${Homeimg})`, // Correct way to reference the image
  backgroundSize: "cover", // Ensures the image covers the entire container
  backgroundPosition: "center", // Centers the image
  backgroundRepeat: "no-repeat", // Prevents the image from repeating
  display: "flex",
  alignItems: "center",
  gap:"100px"
});

const Text = styled("div")({
  fontSize: "25px",
  width: "50%",
  color: "white",
  textAlign: "center",
  fontWeight: "600",
  padding:'30px 0px'
});

const Form = styled("div")({
    '@media (max-width:600px)': {
        display:"none"
      },
});

const Home = () => {
  return (
    <>
      <Container>
        <Text>
          Transform your home with stunning, affordable interiors. Experience
          exceptional craftsmanship and on-time delivery with unparalleled
          precision.
        </Text>
        <Form>
            <ContactUs/>
        </Form>
      </Container>
    </>
  );
};

export default Home;
