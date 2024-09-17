import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";
import { useState } from "react";
import Modal from "@mui/material/Modal";
// import { Box } from "@mui/material";

const Logo = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  backgroundColor: "#f00",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#d00",
  },
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo>
          <Typography variant="h6" color="inherit">
            INTERIORCAFE
          </Typography>
          <div style={{ color: "#f00", marginLeft: 5 }}>▲</div>
        </Logo>
        <StyledButton onClick={handleOpen}>GET STARTED</StyledButton>
        <Modal open={open} onClick={handleClose}>
          <ContactUs />
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
