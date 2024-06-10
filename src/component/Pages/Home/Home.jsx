import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HomeBG from "../../Common/assets/Images/HomeBG.png";
import Zafs_packet from "../../Common/assets/Images/Zafs_packet.png";

const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "-140px",
          filter: "brightness(50%)",
          zIndex: "-1",
          width: "100%",
          height: { xs: "1400px", sm: "1200px", md: "1000px" },
        }}
      >
        <img
          alt="Home"
          src={HomeBG}
          width="100%"
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: { xs: 1, sm: 2, md: 3, lg: 6 },
          p: { xs: "20px", sm: "40px", md: "60px", lg: "120px 200px" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box>
          <Box
            sx={{
              width: "85%",
              position: "absolute",
              animation: "swipe 4s ease-out 1",
              animationFillMode: "forwards",
              "@keyframes swipe": {
                "0%": {
                  transform: "translateY(0%)",
                  opacity: 1,
                },
                "80%": {
                  transform: "translateY(0%)",
                  opacity: 1,
                },
                "100%": {
                  transform: "translateY(-70%)",
                  opacity: 0,
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "30px", md: "38px", lg: "48px" },
                fontWeight: 600,
                color: "#FFFFFC",
              }}
              className="heading-font"
            >
              Welcome to
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "40px", md: "50px", lg: "64px" },
                fontWeight: 600,
                color: "#FFFFFC",
              }}
              className="heading-font"
            >
              Aradhana Hospitality
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "85%",
            animation: "swipe2 4s ease-out 1",
            animationFillMode: "forwards",
            "@keyframes swipe2": {
              "0%": {
                transform: "translateY(70%)",
                opacity: 0,
              },
              "90%": {
                transform: "translateY(70%)",
                opacity: 0,
              },
              "100%": {
                transform: "translateY(0%)",
                opacity: 1,
              },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "40px", md: "50px", lg: "64px" },
              fontWeight: 600,
              color: "#FFFFFC",
            }}
            className="heading-font"
          >
            Tea-Trends
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "38px", lg: "48px" },
              fontWeight: 600,
              color: "#FFFFFC",
            }}
            className="heading-font"
          >
            That thrills you with every golder sip.
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "28px" },
            fontWeight: 400,
            color: "#FFFFFF",
            width: { xs: "85%", md: "60%", lg: "60%" },
          }}
        >
          Since 1974, India's Top Tea Cafe serves quality chai, verse snacks and
          a vibe that leaves every customer smiling.
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            bgcolor: "#ED641A",
            borderRadius: "20px",
            height: { xs: "40px", sm: "50px", md: "64px", lg: "72px" },
            width: { xs: "150px", sm: "200px", md: "230px", lg: "255px" },
            fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "20px" },
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#d75f1e",
            },
          }}
        >
          Explore Now
        </Button> */}

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ED641A",
            borderRadius: "8px",
            height: { xs: "36px", sm: "46px", md: "56px" },
            width: { xs: "140px", sm: "160px", md: "180px" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#d75f1e",
            },
          }}
        >
          Explore Now
        </Button>
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", md: "unset" },
            bottom: {
              xs: "10px",
              sm: "1200px",
              md: "80px",
              lg: "80px",
              xl: "60px",
            },
            width: { md: "40%", lg: "40%" },
            right: "0px",
            zIndex: "-1",
            animation: "swipeImage 5s ease-out 1",
            animationFillMode: "forwards",
            "@keyframes swipeImage": {
              "0%": {
                transform: "translateX(100%)",
                opacity: 0,
              },
              "20%": {
                transform: "translateX(100%)",
                opacity: 0,
              },
              "40%": {
                transform: "translateX(0%)",
                opacity: 1,
              },
              "60%": {
                transform: "translateX(0%)",
                opacity: 1,
              },
              "100%": {
                transform: "translateX(-600%)",
                opacity: 0,
              },
            },
          }}
        >
          <img
            alt="ZafsPacket"
            src={Zafs_packet}
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
