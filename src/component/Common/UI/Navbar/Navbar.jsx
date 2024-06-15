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
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () =>
  //   {
  //   homeRef,
  //   aboutRef,
  //   zafersRef,
  //   zafsRef,
  //   blogRef,
  //   contactRef,
  // }
  {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

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

    // const handleNavClick = (ref) => {
    //   if (ref === contactRef) {
    //     navigate("/contact");
    //   } else if (ref === zafersRef) {
    //     navigate("/zafers");
    //   } else if (ref === zafsRef) {
    //     navigate("/zafs");
    //   } else if (location.pathname !== "/") {
    //     navigate("/", { replace: true });
    //     setTimeout(() => {
    //       scrollToRef(ref);
    //     }, 100);
    //   } else {
    //     scrollToRef(ref);
    //   }
    // };

    // const scrollToRef = (ref) => {
    //   window.scrollTo({
    //     top: ref.current.offsetTop - 180,
    //     behavior: "smooth",
    //   });
    // };

    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };

    const handleNavClick = (route) => {
      navigate(`/${route}`);
    };

    // const navItems = [
    //   { label: "Home", ref: homeRef },
    //   { label: "About Us", ref: aboutRef },
    //   { label: "Zafer's", ref: zafersRef },
    //   { label: "Zafs", ref: zafsRef },
    //   { label: "Blog", ref: blogRef },
    //   { label: "Contact Us", ref: contactRef },
    // ];
    const navItems = [
      { label: "Home", ref: "" },
      { label: "About Us", ref: "about" },
      { label: "Zafar's", ref: "zafars" },
      { label: "Zafs", ref: "zafs" },
      { label: "Blog", ref: "blog" },
      { label: "Contact Us", ref: "contact" },
    ];

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
          p: isScrolled
            ? {
                xs: "15px 30px 10px",
                sm: "15px 45px 10px",
                md: "15px 60px 10px",
                lg: "15px 200px 10px",
              }
            : {
                xs: "15px 30px 10px",
                sm: "15px 45px 10px",
                md: "15px 60px 10px",
                lg: "15px 200px 10px",
              },
          position: "sticky",
          top: 0,
          zIndex: 999,
          transition: "padding 0.3s ease, background-color 0.3s ease",
        }}
      >
        <Box sx={{ cursor: "pointer" }} onClick={() => handleNavClick("")}>
          {/* <Logo /> */}
          <img
            src="https://aradhanahospitality.com/demo/wp-content/uploads/2024/02/Aradhana-White.svg"
            alt="logo"
            srcset=""
            width={"90px"}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-around",
            alignItems: "center",
            textTransform: "uppercase",
            width: { md: "60%", lg: "50%" },
          }}
        >
          {navItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color:
                  location.pathname === `/${item.ref}` ? "#ed641a" : "#FFFFFC",
                cursor: "pointer",
                fontFamily: "Urbanist, sans-serif",
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
          <MenuIcon
            sx={{
              bgcolor: "#ed641a",
              color: "#151515",
              borderRadius: "2px",
              p: "4px",
            }}
          />
        </IconButton>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              bgcolor: "rgba(0, 0, 0, 0.8)",
              width: "100%",
              color: "#ed641a",
              bgcolor: "white",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#352D29",
              p: 2,
              zIndex: 9999
            }}
          >
            <Box sx={{ cursor: "pointer" }} onClick={() => handleNavClick("")}>
              <img
                src="https://aradhanahospitality.com/demo/wp-content/uploads/2024/02/Aradhana-White.svg"
                alt="logo"
                srcset=""
                width={"90px"}
              />
            </Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon
                sx={{
                  bgcolor: "#ed641a",
                  color: "#151515",
                  borderRadius: "2px",
                  p: "4px",
                }}
              />
            </IconButton>
          </Box>
          <List sx={{ p: 0 }}>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  handleNavClick(item.ref);
                  setDrawerOpen(false);
                }}
                sx={{
                  bgcolor:
                    location.pathname === `/${item.ref}`
                      ? "#3f444b"
                      : "transparent",
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "Urbanist, sans-serif",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  };

export default Navbar;
