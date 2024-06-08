import { Avatar, Box, Divider, Typography } from "@mui/material";
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
          lg: "60px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "grid", sm: "flex" },
          gap: { xs: 2, sm: 8 },
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
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
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: "30px",
          }}
        >
          <Link
            href="https://www.instagram.com/aradhanahospitality"
            target="_blank"
          >
            <InstaLogo />
          </Link>
          <Link href="https://www.facebook.com/aradhanahospitality">
            <FacebookLogo />
          </Link>
          <Link href="https://www.linkedin.com/company/aradhanahospitality">
            <LinkedinLogo />
          </Link>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "#ffffff" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "flex-start",
          alignItems: {
            xs: "center",
            md: "center",
          },
          gap: 8,
          mt: 5,
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
            justifyContent: "flex-start",
            alignItems: "center",
            textTransform: "uppercase",
            gap: {
              xs: "10px",
              md: 4,
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
    </Box>
  );
};

export default Footer;
