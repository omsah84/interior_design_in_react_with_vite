import { styled } from "@mui/system";
import Homeimg from "../assets/HomeImg.jpg";
import ContactUs from "./ContactUs";
import Slider from "react-slick"; // Import the carousel

const MainContainer = styled("div")({
  height: "500px",
  width: "100%",
});

const Container = styled("div")({
  height: "500px",
  backgroundImage: `url(${Homeimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // border:"2px solid red",
});

const Text = styled("div")({
  fontSize: "25px",
  width: "50%",
  height: "100%",
  color: "white",
  textAlign: "center",
  fontWeight: "600",
  padding: "30px 0px",
  // border: "2px solid green",
  float: "left",
  display: "flex",
  alignItems: "center",
  justifyCOntent: "center",

  // Media query for small devices
  "@media (max-width: 900px)": {
    width: "100%",
    fontSize: "20px",
    fontWeight: "500",
  },
});

const Form = styled("div")({
  // border: "2px solid blue",
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
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = () => {
  return (
    <>
      <MainContainer>
        <Slider {...settings}>
          <Container>
            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container>
            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container>
            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
        </Slider>
      </MainContainer>
    </>
  );
};

export default Home;
