import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const BannerContainer = styled(Box)({
  backgroundColor: "#f9ecec",
  padding: "40px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  // Media query for small devices
  "@media (max-width: 600px)": {
    padding: "10px",
    height: "100%",
  },
});

const Heading = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  color: "#000",
  marginBottom: "20px",
  // Media query for small devices
  "@media (max-width: 600px)": {
    fontSize: "25px",
  },
});

const Paragraph = styled(Typography)({
  fontSize: "16px",
  color: "#000",
  marginBottom: "30px",
  width: "80%",
  textAlign: "center",
  // Media query for small devices
  "@media (max-width: 600px)": {
    fontSize: "13px",
  },
});

const ActionButton = styled(Button)({
  backgroundColor: "#093a84",
  fontSize: "15px",
  color: "white",
  "&:hover": {
    backgroundColor: "#D00000",
  },
});

const Banner = () => {
  return (
    <BannerContainer>
      <Heading>We don’t renovate spaces, we redefine them.</Heading>
      <Paragraph>
        Our approach to interior design harmonizes architecture, environmental
        psychology, and product design. We carefully select colors, styles, and
        trends, always ensuring they align perfectly with our clients needs.
      </Paragraph>
      <ActionButton variant="contained">BOOK FREE CONSULTATION</ActionButton>
    </BannerContainer>
  );
};

export default Banner;

// const fadeInOut = keyframes`
//   0% {

//     width: 230px;
//     height: 40px;
//   }
//   50% {
//     width: 250px;
//     height: 50px;
//   }
//   100% {
//     width: 230px;
//     height: 40px;
//   }
// `;
