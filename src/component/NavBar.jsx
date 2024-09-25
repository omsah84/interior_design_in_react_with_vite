import { useState } from "react";
import { Link, styled, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavBarStyled>
        <MenuIconStyled onClick={handleDrawerToggle}>
          <MenuIcon />
        </MenuIconStyled>

        <LinkStyled href="#">HOME</LinkStyled>
        <LinkStyled href="#">DESIGN IDEAS</LinkStyled>
        {/* <LinkStyled href="#">INTERIOR DESIGN</LinkStyled>
        <LinkStyled href="#">EXTERIOR DESIGN</LinkStyled>
        <LinkStyled href="#">FURNITURE IDEAS</LinkStyled> */}
        <LinkStyled href="#">CONTACT US</LinkStyled>
        <LinkStyled href="#">ABOUT US</LinkStyled>
        <LinkStyled href="#">TERMS & POLICY</LinkStyled>
      </NavBarStyled>

      {/* Drawer (Side Slider) for Mobile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: "75%" }, // Set the width of the Drawer to 75% of the viewport width
        }}
      >
        <List>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="DESIGN IDEAS" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="INTERIOR DESIGN" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="EXTERIOR DESIGN" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="FURNITURE IDEAS" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="CONTACT US" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="ABOUT US" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="TERMS & POLICY" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
