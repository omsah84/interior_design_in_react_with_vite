import { useState } from "react";
import { Call, Message, WhatsApp } from "@mui/icons-material";
import { styled, keyframes } from "@mui/material";

// Create a bounce animation using keyframes
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

// Styled container
const Container = styled("div")({
  position: "fixed",
  right: "15px",
  bottom: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  // border:"3px solid red",
});

// Styled Message icon with animation
const AnimatedMessage = styled(Message)({
  // border:"3px solid red",
  fontSize: "50px",
  color: "red",
  animation: `${bounce} 2s infinite`, // Apply the bounce animation
  cursor: "pointer", // Makes the icon clickable


});

const ActionIcon = styled("div")({
  fontSize: "50px",
  cursor: "pointer",
  color: "#4CAF50", // WhatsApp green color
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function MessageIcon() {
  const [showIcons, setShowIcons] = useState(false);

  const handleMessageClick = () => {
    setShowIcons(!showIcons); // Toggle icons on click
  };

  const handleCallClick = () => {
    // Phone call functionality (works on mobile)
    window.location.href = "tel:+917975230478"; // Replace with a real number
  };

  const handleWhatsAppClick = () => {
    // WhatsApp functionality (opens WhatsApp with a preset message)
    window.open("https://wa.me/+917975230478?text=Hello", "_blank"); // Replace with a real number
  };

  return (
    <Container>
      {showIcons && (
        <>
          {/* WhatsApp and Call icons shown on top of the message icon */}
          <ActionIcon onClick={handleWhatsAppClick}>
            <WhatsApp style={{ fontSize: "40px", color: "#25D366" }} />
          </ActionIcon>
          <ActionIcon onClick={handleCallClick}>
            <Call style={{ fontSize: "40px", color: "#1E90FF" }} />
          </ActionIcon>
        </>
      )}
      <AnimatedMessage onClick={handleMessageClick} />
    </Container>
  );
}
