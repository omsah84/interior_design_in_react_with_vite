import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialContainer = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '40px 20px',
  textAlign: 'center',
});

const TestimonialText = styled(Typography)({
  fontSize: '18px',
  fontStyle: 'italic',
  color: '#333',
  marginBottom: '20px',
});

const Author = styled(Typography)({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#555',
});

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialText>
        Our experience with Livspace was pleasurable because of the project managers. The work got done before 45 days just the way we wanted it to be.
      </TestimonialText>
      <Author>Swati and Gaurav</Author>
    </TestimonialContainer>
  );
};

export default Testimonial;
