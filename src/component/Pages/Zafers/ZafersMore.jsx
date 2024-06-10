import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ZaferBG from "../../Common/assets/Images/Zafers/Zafer_BG.jpg";
import Zafs_packet from "../../Common/assets/Images/Zafs/Zafs_packet.png";
import mission from "../../Common/assets/Images/Zafers/mission.png";
import Corousel from "../../Common/UI/Corousel";
import deliveryboy from "../../Common/assets/Images/Zafers/dilveryboy.png";
import zomato from "../../Common/assets/Images/Zafers/zomato-logo.png";
import swiggy from "../../Common/assets/Images/Zafers/swiggy-logo.png";
import Home from "../Home/Home";
import HomeBG from "../../Common/assets/Images/HomeBG.png";
// import TestimonialCard from "./TestimonialCard";

const ZafersMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
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
                Zafar Tea
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
              width: { xs: "85%", md: "60%", lg: "60%" },
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
              width: { xs: "85%", md: "60%", lg: "60%" },
            }}
          >
            We are more than just a tea cafe; we endeavor to serve an experience
            to help friends connect, families unwind, and individuals find
            solace. Step into the soothing ambiance and attentive service that
            feels like a home away from home.
          </Typography>
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
              // animation: "swipeImage 5s ease-out 1",
              // animationFillMode: "forwards",
              // "@keyframes swipeImage": {
              //   "0%": {
              //     transform: "translateX(100%)",
              //     opacity: 0,
              //   },
              //   "20%": {
              //     transform: "translateX(100%)",
              //     opacity: 0,
              //   },
              //   "40%": {
              //     transform: "translateX(0%)",
              //     opacity: 1,
              //   },
              //   "60%": {
              //     transform: "translateX(0%)",
              //     opacity: 1,
              //   },
              //   "100%": {
              //     transform: "translateX(-600%)",
              //     opacity: 0,
              //   },
              // },
            }}
          >
            <img
              alt="ZafsPacket"
              src={Zafs_packet}
              style={{
                objectFit: "cover",
                width: "100%",
                display: "none",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#BAA98F",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: { xs: "30px", sm: "40px", md: "60px", lg: "120px 200px" },
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            alt="Home"
            src={Zafs_packet}
            width="100%"
            height="450px"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "600",
              color: "#FFFFFC",
            }}
          >
            <span style={{ color: "#ED641A" }}>Our</span> Story
          </Typography>
          <Box sx={{ paddingRight: { md: "30px" } }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", md: "20px" } }}
            >
              Our journey began with a goal to create a space that holds the
              essence of tradition with a concept to offer a space to unite
              people and help them value every moment. Beginning with a
              beautiful tea outlet built with a passion for exceptional tea
              lovers, today we cherish every individuals chai moments whether it
              is deep conversation, fun moments for friends or just a comforting
              space to embrace every sip peacefully.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: "30px", sm: "50px", md: "70px" },
        }}
      >
        <Box
          sx={{
            background: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "36px", md: "40px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              <span style={{ color: "#ED641A" }}>Our</span> Mission
            </Typography>
            <Box sx={{ paddingRight: { md: "30px" } }}>
              <Typography
                sx={{
                  color: "#151515",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                We look forward to elevate your tea experience by combining
                tradition with flavorful options. We aim to create a space where
                every sip of tea and every bite of our delightful snacks speaks
                of cultural richness with comforting space for all chai lovers.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "unset" } }}>
            <img
              alt="Home"
              src={mission}
              width="100%"
              height="300px"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            background: "white",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "unset" } }}>
            <img
              alt="Home"
              src={mission}
              width="100%"
              height="300px"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "36px", md: "40px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              <span style={{ color: "#ED641A" }}>Our</span> Vision
            </Typography>
            <Box sx={{ paddingRight: { md: "30px" } }}>
              <Typography
                sx={{
                  color: "#151515",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Our vision is to redefine experiences linked with serving tea.
                We aspire to craft a space where tea is not just a beverage but
                a shared moment of connection, and conversations. We invite you
                to embark on a flavorful adventure to redefine your chai moments
                one cup at a time.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          background: "white",
          m: { xs: "30px", md: "60px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#A5A5A5",
            borderRadius: "20px",
            p: { xs: "20px", sm: "40px" },
            width: { xs: "80%", md: "85%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            gap: { xs: "50px", md: "0" },
          }}
        >
          <Box>
            <img
              alt="deliveryboy_logo"
              src={deliveryboy}
              width={"100%"}
              height={"250px"}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: { xs: "25px", md: "35px" } }}
            >
              ALSO AVAILABLE ON
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "10px",
              }}
            >
              <img
                alt="zomato_logo"
                src={zomato}
                width="100%"
                height="40px"
                style={{
                  objectFit: "contain",
                }}
              />
              <img
                alt="swiggy_logo"
                src={swiggy}
                width="100%"
                height="40px"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ZafersMore;
