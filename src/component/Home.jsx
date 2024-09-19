import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import Slider from "react-slick"; // Import the carousel
import Homeimg0 from "../assets/Homeimg1.jpg";
import Homeimg1 from "../assets/Homeimg1.jpg";
import Homeimg2 from "../assets/Homeimg2.jpg";
import Homeimg3 from "../assets/Homeimg3.jpg";
import Homeimg4 from "../assets/Homeimg4.jpg";

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
  // border: "2px solid green",
  float: "left",
  display: "flex",
  alignItems: "center",
  justifyCOntent: "center",
  textShadow: "3px 4px 5px black, -2px -1px 1px red",



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
          <Container image={Homeimg1}>
            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container image={Homeimg0}>

            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container image={Homeimg2}>
            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container image={Homeimg3}>

            <Text>
              Transform your home with stunning, affordable interiors.
              Experience exceptional craftsmanship and on-time delivery with
              unparalleled precision.
            </Text>
            <Form>
              <ContactUs />
            </Form>
          </Container>
          <Container image={Homeimg4}>

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
