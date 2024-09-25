import { useState } from "react";
import { Link, styled, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const NavBarStyled = styled("div")(({ theme }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  position: "sticky",
  top: "40px",
  backgroundColor: "lightGray",

  // Media query for mobile devices
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center", // Centering the hamburger icon
    padding: "0 20px",
  },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
  color: "black",
  transition: "color 0.3s ease",

  "&:hover": {
    color: "blue",
    textDecoration: "underline",
  },

  // Hide links on mobile view
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuIconStyled = styled(IconButton)(({ theme }) => ({
  display: "none",

  // Show the hamburger icon on mobile and center it
  [theme.breakpoints.down("sm")]: {
    display: "block",
    color: "black",
    position: "absolute",
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Adjust for centering
  },
}));

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["HOME", "DESIGN IDEAS", "CONTACT US", "ABOUT US","TERMS & POLICY"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <NavBarStyled>
        <MenuIconStyled onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MenuIconStyled>

        <LinkStyled href="#">HOME</LinkStyled>
        <LinkStyled href="#">DESIGN IDEAS</LinkStyled>
        <LinkStyled href="#">CONTACT US</LinkStyled>
        <LinkStyled href="#">ABOUT US</LinkStyled>
        <LinkStyled href="#">TERMS & POLICY</LinkStyled>
      </NavBarStyled>

      {/* Drawer (Side Slider) for Mobile */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
