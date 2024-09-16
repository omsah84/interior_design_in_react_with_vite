import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)({
  backgroundColor: '#FFC0CB',
  padding: '40px 20px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '20px',
});

const Paragraph = styled(Typography)({
  fontSize: '16px',
  color: '#000',
  marginBottom: '30px',
});

const ActionButton = styled(Button)({
  backgroundColor: '#FF0000',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#D00000',
  },
});

const Banner = () => {
  return (
    <BannerContainer>
      <Heading>The home design you crave</Heading>
      <Paragraph>
        When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that will last a very long time.
      </Paragraph>
      <ActionButton variant="contained">BOOK FREE CONSULTATION</ActionButton>
    </BannerContainer>
  );
};

export default Banner;
