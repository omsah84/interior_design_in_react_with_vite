import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import img from "../assets/image1.png";

const BannerContainer = styled(Box)({
  padding: '40px 20px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const SlideContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
//   border: '2px solid red',
  height: '100%', // Ensure the container stretches fully to allow centering
});

const SlideImage = styled('img')({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover', // Ensure the image retains its aspect ratio
  marginBottom: '10px', // Add some space between image and title
});

const SlideTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '10px',
});

const SlideDescription = styled(Typography)({
  fontSize: '16px',
  marginTop: '5px',
  marginBottom: '10px',
});

const ActionButton = styled(Button)({
  backgroundColor: '#FF0000',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
});

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <BannerContainer>
      <Heading>Homes for every style</Heading>
      <Typography>Superior finishes, trendy designs and quality modules at affordable prices.</Typography>
      <Slider {...settings}>
        <SlideContainer>
          <SlideImage src={img} alt="Royal & Elegant 3 BHK" />
          <SlideTitle>Royal & Elegant 3 BHK</SlideTitle>
          <SlideDescription>Add refinement and sophistication to your home.</SlideDescription>
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
          <SlideDescription>Bring in traditional elegance to your bedroom.</SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
        <SlideContainer>
          <SlideImage src={img} alt="Classic Indian Bedroom" />
          <SlideTitle>Classic Indian Bedroom</SlideTitle>
          <SlideDescription>Bring in traditional elegance to your bedroom.</SlideDescription>
          <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
        </SlideContainer>
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
