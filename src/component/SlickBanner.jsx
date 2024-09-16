import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import img from "../assets/image1.png";

const BannerContainer = styled(Box)({
  padding: "40px 20px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

const SlideContainer = styled(Box)({
  padding: "20px",
  display: "flex",
  flexDirection: "column", // Ensure children stack vertically
  alignItems: "center", // Center children horizontally
  justifyContent: "center", // Center children vertically
  // border: '2px solid red',
  height: "100%", // Ensure the container takes full height
});

const SlideImage = styled("img")({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover", // Ensure the image retains its aspect ratio
  marginBottom: "10px", // Add some space between image and title
  margin: "0 auto",
});

const SlideTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "10px",
});

const SlideDescription = styled(Typography)({
  fontSize: "16px",
  marginTop: "5px",
  marginBottom: "10px",
});

const ActionButton = styled(Button)({
  backgroundColor: "#FF0000",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#D00000",
  },
});

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BannerContainer>
      <Heading>Homes for every style</Heading>
      <Typography>
        Superior finishes, trendy designs and quality modules at affordable
        prices.
      </Typography>
      <Slider {...settings}>
        <SlideContainer>
          <SlideImage src={img} alt="Royal & Elegant 3 BHK" />
          <SlideTitle>Royal & Elegant 3 BHK</SlideTitle>
          <SlideDescription>
            Add refinement and sophistication to your home.
          </SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
        <SlideContainer>
          <SlideImage src={img} alt="Contemporary & Classy 4 BHK" />
          <SlideTitle>Contemporary & Classy 4 BHK</SlideTitle>
          <SlideDescription>Classic and cosmopolitan designs.</SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
        <SlideContainer>
          <SlideImage src={img} alt="Classic Indian Bedroom" />
          <SlideTitle>Classic Indian Bedroom</SlideTitle>
          <SlideDescription>
            Bring in traditional elegance to your bedroom.
          </SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
        <SlideContainer>
          <SlideImage src={img} alt="Classic Indian Bedroom" />
          <SlideTitle>Classic Indian Bedroom</SlideTitle>
          <SlideDescription>
            Bring in traditional elegance to your bedroom.
          </SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
