import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../../assets/Images/FooterLogo.png";
import { FacebookLogo, InstaLogo, LinkedinLogo } from "../../assets/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#55443D",
        p: {
          xs: "20px",
          sm: "40px",
          lg: "70px 100px",
          xl: "70px 140px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          mb: {
            xs: "20px",
            md: "0",
          },
        }}
      >
        <img
          alt="Footerlogo"
          src={FooterLogo}
          style={{
            width: "200px",
            marginBottom: {
              xs: "20px",
              md: "0",
            },
          }}
        />
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "70%",
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-around",
            alignItems: "center",
            textTransform: "uppercase",
            gap: {
              xs: "10px",
              md: "0",
            },
          }}
        >
          {[
            "About",
            "Zafer’s",
            "Zafs",
            "Blog",
            "Privacy",
            "Terms",
            "Contact",
          ].map((text) => (
            <Link
              key={text}
              href="#"
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#FFFFFC",
                textDecoration: "none",
                mb: {
                  xs: "10px",
                  md: "0",
                },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#ED641A",
            my: "30px",
            textTransform: "uppercase",
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          Follow Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: "30px",
          }}
        >
          <Link
            href="https://www.instagram.com/aradhanahospitality/"
            target="_blank"
          >
            <InstaLogo />
          </Link>
          <Link href="#">
            <FacebookLogo />
          </Link>
          <Link href="#">
            <LinkedinLogo />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
