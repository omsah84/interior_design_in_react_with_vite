import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import ContactUs from "./ContactUs";
import { styled } from "@mui/system";
// import { useState } from "react";

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

// const Container = styled("div")({
//   position: "absolute",
//   // top: '400px',
//   left: "50%",
//   transform: "translate(-50%, 50%)",
//   zIndex: "1",
// });

const Header = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   if (open === false) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // };
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo>
          <Typography variant="h6" color="inherit">
            INTERIORCAFE
          </Typography>
          <div style={{ color: "#f00", marginLeft: 5 }}>▲</div>
        </Logo>
        {/* <StyledButton onClick={handleOpen}>GET STARTED</StyledButton> */}
        <StyledButton>GET STARTED</StyledButton>
        {/* {open && true ? (
          <Container>
            <ContactUs />
          </Container>
        ) : (
          <></>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
