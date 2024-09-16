import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)({
  backgroundColor: '#4CAF50', // Green background
  padding: '40px 20px',
  textAlign: 'center',
  color: '#FFF', // White text
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const StatBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '20px',
});

const StatItem = styled(Box)({
  textAlign: 'center',
});

const StatNumber = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
});

const StatLabel = styled(Typography)({
  fontSize: '16px',
});

const CounterBanner = () => {
  return (
    <BannerContainer>
      <Heading>Let our numbers do the talking!</Heading>
      <StatBox>
        <StatItem>
          <StatNumber>75000+</StatNumber>
          <StatLabel>#LivspaceHomes</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>3500+</StatNumber>
          <StatLabel>designers</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>40</StatNumber>
          <StatLabel>cities</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>4</StatNumber>
          <StatLabel>countries</StatLabel>
        </StatItem>
      </StatBox>
    </BannerContainer>
  );
};

export default CounterBanner;
