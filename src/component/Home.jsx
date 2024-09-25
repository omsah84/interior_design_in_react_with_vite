import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import Slider from "react-slick"; // Import the carousel
import Homeimg0 from "../assets/Homeimg1.jpg";
import Homeimg1 from "../assets/Homeimg1.jpg";
import Homeimg2 from "../assets/Homeimg2.jpg";
import Homeimg3 from "../assets/Homeimg3.jpg";
import Homeimg4 from "../assets/Homeimg4.jpg";
import { Button } from "@mui/material"; // Import MUI Button component

const MainContainer = styled("div")({
  height: "500px",
  width: "100%",
});

// Container accepts image as a prop
const Container = styled("div")(({ image }) => ({
  height: "500px",
  backgroundImage: `url(${image})`, // Use the image prop here
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const Text = styled("div")({
  fontSize: "30px",
  width: "50%",
  height: "100%",
  color: "white",
  textAlign: "center",
  fontWeight: "600",
  padding: "30px 0px",
  float: "left",
  display: "flex",
  flexDirection: "column", // Stack buttons below text
  alignItems: "center",
  justifyContent: "center",
  textShadow: "3px 4px 5px black, -2px -1px 1px red",

  // Media query for small devices
  "@media (max-width: 900px)": {
    width: "100%",
    fontSize: "20px",
    fontWeight: "500",
  },
});

const Form = styled("div")({
  width: "50%",
  height: "100%",
  float: "right",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // Media query for small devices
  "@media (max-width: 900px)": {
    display: "none",
  },
});

// Carousel configuration
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
};

const Home = () => {
  return (
    <MainContainer>
      <Slider {...settings}>
        {[Homeimg3, Homeimg0, Homeimg1, Homeimg2, Homeimg4].map((image, index) => (
          <Container key={index} image={image}>
            <Text>
              <div>
                Transform your home with stunning, affordable interiors.
                Experience exceptional craftsmanship and on-time delivery with unparalleled precision.
              </div>
              {/* WhatsApp and Call buttons */}
              <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#c43232", color: "white" }}
                  onClick={() => window.open('tel:+917975230478')}
                >
                  Call Us
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#25d366", color: "white" }}
                  onClick={() =>
                    window.open('https://wa.me/+917975230478?text=Hello%20I%20am%20interested%20in%20your%20services')
                  }
                >
                  WhatsApp Us
                </Button>
              </div>
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
        ))}
      </Slider>
    </MainContainer>
  );
};

export default Home;
