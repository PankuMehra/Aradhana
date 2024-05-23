import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Logo } from "../../assets/Icons";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({
  homeRef,
  aboutRef,
  zafersRef,
  zafsRef,
  blogRef,
  contactRef,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 180,
      behavior: "smooth",
    });
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "About Us", ref: aboutRef },
    { label: "Zafer's", ref: zafersRef },
    { label: "Zafs", ref: zafsRef },
    { label: "Blog", ref: blogRef },
    { label: "Contact Us", ref: contactRef },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
        p: isScrolled
          ? {
              xs: "25px 40px",
              sm: "25px 55px",
              md: "35px 70px",
              lg: "50px 140px",
            }
          : {
              xs: "20px 30px",
              sm: "20px 50px",
              md: "30px 60px",
              lg: "40px 120px",
            },
        position: "sticky",
        top: 0,
        zIndex: 999,
        transition: "padding 0.3s ease, background-color 0.3s ease",
      }}
    >
      <Box sx={{ cursor: "pointer" }} onClick={() => handleNavClick(homeRef)}>
        <Logo />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          textTransform: "uppercase",
          width: { md: "70%", lg: "60%" },
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#FFFFFC",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick(item.ref)}
          >
            {item.label}
          </Typography>
        ))}
      </Box>
      <IconButton
        sx={{ display: { xs: "block", md: "none" }, color: "#FFFFFC" }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(0, 0, 0, 0.8)",
            width: "60%",
            color: "#ed641a",
            bgcolor: "white",
          },
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                handleNavClick(item.ref);
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
