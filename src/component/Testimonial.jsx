import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialContainer = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '40px 20px',
  textAlign: 'center',
  height:'200px',
  display:'flex',
  justifyContent:"center",
  alignItems:"center"
});

const TestimonialText = styled(Typography)({
  fontSize: '18px',
  fontStyle: 'italic',
  color: '#333',
  marginBottom: '20px',
  width:"80%",
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
      <Author>Swati and Gaurav</Author>
      </TestimonialText>
    </TestimonialContainer>
  );
};

export default Testimonial;
