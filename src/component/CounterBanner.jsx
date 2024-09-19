import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BannerContainer = styled(Box)({
  backgroundColor: "white", // Green background
  padding: "40px 20px",
  textAlign: "center",
  color: "black", // White text
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  // Media query for small devices
  "@media (max-width: 600px)": {
    fontSize: "20px",
  },
});

const StatBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  //   flexDirection:"column",
  marginBottom: "20px",
  // Media query for small devices
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "20px",
  },
});

const StatItem = styled(Box)({
  textAlign: "center",
});

const StatNumber = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  // Media query for small devices
  "@media (max-width: 600px)": {
    fontSize: "25px",
  },
});

const StatLabel = styled(Typography)({
  fontSize: "16px",
});

const CounterBanner = () => {
  return (
    <BannerContainer>
      <Heading>Let our numbers do the talking!</Heading>
      <StatBox>
        <StatItem>
          <StatNumber>7500+</StatNumber>
          <StatLabel>InteriorCafe</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>350+</StatNumber>
          <StatLabel>Designers</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>40</StatNumber>
          <StatLabel>Cities</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>2</StatNumber>
          <StatLabel>Countries</StatLabel>
        </StatItem>
      </StatBox>
    </BannerContainer>
  );
};

export default CounterBanner;
