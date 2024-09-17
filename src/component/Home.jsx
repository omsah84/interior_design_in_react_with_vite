import { styled } from "@mui/system";
import Homeimg from "../assets/HomeImg.jpg";
import ContactUs from "./ContactUs";

const Container = styled("div")({
  height: "500px",
  backgroundImage: `url(${Homeimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  gap: "100px",
});

const Text = styled("div")({
  fontSize: "25px",
  width: "50%",
  color: "white",
  textAlign: "center",
  fontWeight: "600",
  padding: "30px 0px",
  // Media query for small devices
  "@media (max-width: 900px)": {
    width: "100%",
    fontSize: "20px",
    fontWeight: "500",
  },
});

const Form = styled("div")({
  // Media query for small devices
  "@media (max-width: 900px)": {
    display: "none",
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
          <ContactUs />
        </Form>
      </Container>
    </>
  );
};

export default Home;
