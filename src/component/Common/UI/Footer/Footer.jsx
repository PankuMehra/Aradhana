import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../../assets/Images/FooterLogo.png";
import facebook from "../../assets/Images/png/facebook.png";
import instagram from "../../assets/Images/png/instagram.png";
import linkedIn from "../../assets/Images/png/linkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#55443D",
        p: {
          xs: "20px",
          sm: "40px",
          lg: "60px 350px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "flex" },
          gap: { xs: 2, sm: 8 },
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            // fontWeight: "600",
            color: "#ED641A",
            my: "30px",
            // textTransform: "uppercase",
            textAlign: { xs: "center", md: "unset" },
          }}
          className="heading-font"
        >
          Follow Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: "30px",
          }}
        >
          <Link
            href="https://www.instagram.com/aradhanahospitality"
            target="_blank"
          >
            <img className="footer-logo" src={instagram} alt="" />
          </Link>
          <Link href="https://www.facebook.com/aradhanahospitality">
            <img className="footer-logo" src={facebook} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/company/aradhanahospitality">
            <img className="footer-logo" src={linkedIn} alt="" />
          </Link>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "#ffffff" }} />
      <Box
        sx={{
          width: "100%",
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
          gap: { xs: 0, md: 8 },
          // mt: 5,
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
              md: "60%",
            },
            display: "flex",
            flexDirection: {
              md: "row",
            },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            textTransform: "uppercase",
            gap: {
              xs: "10px",
              md: 3,
            },
            flexWrap: { xs: "wrap" },
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
                fontSize: { xs: "8px", md: "18px" },
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
        <h2
          style={{
            fontSize: "16px",
            padding: "0",
            margin: "0",
            width: "20%",
            textAlign: "right",
            fontWeight: "600",
            color: "#ffffff",
          }}
        >
          MADE WITH BY <span style={{ fontWeight: "900" }}>AGHORI</span>
        </h2>
      </Box>
    </Box>
  );
};

export default Footer;
