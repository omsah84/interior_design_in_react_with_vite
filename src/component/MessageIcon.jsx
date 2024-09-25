import { Call, WhatsApp } from "@mui/icons-material";
import { styled } from "@mui/material";

// Create a bounce animation using keyframes
// const bounce = keyframes`
//   /* 0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   } */
//   0% {
//     transform: translateY(0px);
//   }
//   40% {
//     transform: translateY(30px);
//   }
//   100% {
//     transform: translateY(-30px);
//   }
// `;

// Styled container
const Container = styled("div")({
  position: "fixed",
  right: "5px",
  bottom: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  // border:"3px solid red",
});

const ActionIcon = styled("div")({
  fontSize: "50px",
  cursor: "pointer",
  color: "#4CAF50", // WhatsApp green color
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // animation: `${bounce} 2s infinite`, // Apply the bounce animation
});

export default function MessageIcon() {
  const handleCallClick = () => {
    // Phone call functionality (works on mobile)
    window.location.href = "tel:+917975230478"; // Replace with a real number
  };

  const handleWhatsAppClick = () => {
    // WhatsApp functionality (opens WhatsApp with a preset message)
    window.open("https://wa.me/+917975230478?text=Hello", "_blank");
  };

  return (
    <Container>
      <ActionIcon onClick={handleWhatsAppClick}>
        <WhatsApp style={{ fontSize: "40px", color: "#25D366" }} />
      </ActionIcon>

      <ActionIcon onClick={handleCallClick}>
        <Call style={{ fontSize: "40px", color: "#1E90FF" }} />
      </ActionIcon>
    </Container>
  );
}
