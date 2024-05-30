import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ZaferBG from "../../Common/assets/Images/Zafers/Zafer_BG.jpg";
import OldMan from "../../Common/assets/Images/About/More_about_old_man.png";
import ZafsPacket from "../../Common/assets/Images/About/Zaf's_packet.png";
import Man from "../../Common/assets/Images/About/more_about_man.png";
import TeaSeeds from "../../Common/assets/Images/About/tea_seeds.jpg";
import DailyNewsLogo from "../../Common/assets/Images/About/Daily_News_logo.png";
import TechnologyLogo from "../../Common/assets/Images/About/Technology_logo.png";
import CybertechLogo from "../../Common/assets/Images/About/Cybertech_logo.png";
import FurturatechLogo from "../../Common/assets/Images/About/Furturatech_logo.png";
// import TestimonialCard from "./TestimonialCard";

const ZafersMore = () => {
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
            src={ZaferBG}
            width="100%"
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            // width: "100%",
            p: { xs: "20px", sm: "40px", md: "60px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "16px" },
              fontWeight: 600,
              color: "#ed641a",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#FFFFFC",
              mb: "25px",
            }}
          >
            Zafar Tea
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            When it comes to vibing with a beverage in India, it has to be chai.
            At Zafar, we blend tradition, joy, and taste to unite communities
            with love. From classic chai to exotic herbal infusions, each sip at
            Zafar is filled with freshness, flavor that you find difficult to
            resist.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            We are more than just a tea cafe; we endeavor to serve an experience
            to help friends connect, families unwind, and individuals find
            solace. Step into the soothing ambiance and attentive service that
            feels like a home away from home.
          </Typography>
        </Box>
      </Box>
      <Box>
        Corousel
      </Box>
    </>
  );
};

export default ZafersMore;
