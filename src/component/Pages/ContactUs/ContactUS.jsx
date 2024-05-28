import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AboutBG from "../../Common/assets/Images/About/About_BG.jpg";

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-120px", sm: "-120px", md: "-120px" },
            filter: "brightness(90%)",
            zIndex: "-1",
            width: "100%",
            height: "800px",
          }}
        >
          <img
            alt="Home"
            src={AboutBG}
            width="100%"
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "70%", md: "60%", lg: "50%" },
            p: { xs: "40px 20px", sm: "60px 30px", md: "80px" },
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 400,
              color: "#FFFFFC",
              mb: "25px",
              textAlign: "center",
            }}
          >
            Connect with us.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
              textAlign: "center",
            }}
          >
            We can be reached via email at hello@ochahouse.com, or feel free to
            simply fill out the form below. We do our best to reply within 24
            business hours.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            p: { xs: "40px 20px", sm: "60px 30px", md: "80px" },
            bgcolor: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 400,
              color: "#FFFFFC",
              mb: "25px",
              textAlign: "center",
            }}
          >
            Connect with us.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
              textAlign: "center",
            }}
          >
            We can be reached via email at hello@ochahouse.com, or feel free to
            simply fill out the form below. We do our best to reply within 24
            business hours.
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default ContactUs;
