import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const TestimonialContainer = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "40px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 600px)": {
    padding: "20px 10px", // Adjust padding for smaller screens
  },
  "@media (min-width: 600px)": {
    flexDirection: "row", // Change to row layout for larger screens
    justifyContent: "center", // Center the cards horizontally
    flexWrap: "wrap", // Allow cards to wrap if they exceed the container width
  },
});


const CardTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#555",
  marginBottom: "10px",
  textAlign: "center", // Center align the card title
});

const TestimonialCard = styled(Card)({
  margin: "10px", // Add margin around cards for spacing
  width: "100%",
  maxWidth: "400px", // Maximum width for each card
  "@media (min-width: 600px)": {
    width: "40%", // Adjust width for larger screens
  },
  "@media (min-width: 1200px)": {
    width: "25%", // Further adjust for even larger screens
  },
});

const TestimonialText = styled(Typography)({
  fontSize: "18px",
  fontStyle: "italic",
  color: "#333",
  marginBottom: "10px",
  width: "100%",
  "@media (max-width: 600px)": {
    fontSize: "16px", // Adjust font size for smaller screens
    width: "90%", // Make width more flexible on smaller screens
  },
});

const Author = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#555",
  "@media (max-width: 600px)": {
    fontSize: "14px", // Smaller font size for the author on small screens
  },
});

const testimonials = [
  {
    title: "Excellent Service",
    text: "Our experience with InteriorCafe was enjoyable thanks to the project managers. The work was completed in less than 45 days, exactly as we had envisioned.",
    author: "Swati and Gaurav",
  },
  {
    title: "Beautiful Transformation",
    text: "InteriorCafe transformed our space beautifully! They listened to our ideas and made them a reality.",
    author: "Anjali and Ravi",
  },
  {
    title: "Professional Team",
    text: "The team was professional and very accommodating. We're thrilled with our new living room!",
    author: "Maya and Arjun",
  },
  {
    title: "Amazing Design",
    text: "Absolutely love the design! It’s everything we hoped for and more. Thank you, InteriorCafe!",
    author: "Priya and Rohan",
  },
];

const Testimonial = () => {
  return (
    <>
      <TestimonialContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <CardContent>
              <CardTitle>{testimonial.title}</CardTitle>{" "}
              {/* Title Above Card */}
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Author>- {testimonial.author}</Author>
            </CardContent>
          </TestimonialCard>
        ))}
      </TestimonialContainer>
    </>
  );
};

export default Testimonial;
