import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ZaferBG from "../../Common/assets/Images/Zafers/Zafer_BG.jpg";
import mission from "../../Common/assets/Images/Zafers/mission.png";
import Corousel from "../../Common/UI/Corousel";
import zaf from "../../Common/assets/Images/Zafs/zaf.jpg";
import deliveryboy from "../../Common/assets/Images/Zafers/dilveryboy.png";
import zomato from "../../Common/assets/Images/Zafers/zomato-logo.png";
import swiggy from "../../Common/assets/Images/Zafers/swiggy-logo.png";
import Home from "../Home/Home";
import Zafs_packet from "../../Common/assets/Images/Zafs_packet.png";
import HomeBG from "../../Common/assets/Images/HomeBG.png";

const ZafsMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
                Zaf's
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              width: { xs: "85%", md: "60%", lg: "60%" },
            }}
          >
            At Zaf, tea is not just a beverage; it's an art form.
            <br />
            <br />
            When it comes to vibing with a beverage in India, it has to be chai.
            At Zafar, we blend tradition, joy, and taste to unite communities
            with love. From classic chai to exotic herbal infusions, each sip at
            Zafar is filled with freshness, flavor that you find difficult to
            resist.
            <br />
            <br />
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
            src={zaf}
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
              color: "#FFFFFC",
            }}
            className="heading-font"
          >
            <span style={{ color: "#ED641A" }}>Why</span> Zaf?
          </Typography>
          <Box sx={{ paddingRight: { md: "30px" } }}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "16px", md: "20px" },
                mb: "25px",
              }}
            >
              Step into a Zaf store, and you'll instantly feel the inviting
              warmth and energy that defines our brand. Our space is designed to
              be your go-to comforting space for tea lovers, where you can
              immerse yourself in the world of exclusive tea flavors and
              delightful aromas. Whether you're seeking a moment of vibrant
              social setting, or a place to unwind with fresh aroma, Zaf offers
              a cozy place for all tea lovers.
            </Typography>
            <Typography sx={{ color: "white", fontSize: "20px" }}>
              Our artist curates a diverse range of teas, sourcing the finest
              leaves from around the globe. From classic black teas to exotic
              herbal infusions, each blend includes fresh flavors, carefully
              crafted to meet your taste buds and elevate your tea experience.
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
              <span style={{ color: "#ED641A" }}>Our</span> Products
            </Typography>
            <Box sx={{ paddingRight: "30px" }}>
              <Typography
                sx={{ color: "#151515", fontSize: { xs: "16px", md: "20px" } }}
              >
                Experience the convenience of Zaf's ready-to-make tea products
                that bring the art of tea brewing at your fingertips. Our
                innovative tea solutions are designed for the modern tea
                enthusiast who values both quality and convenience. Elevate your
                tea rituals with Zaf's premium tea offerings, making every
                moment count with flavorful sips.
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
              <span style={{ color: "#ED641A" }}>Join the</span> Zaf Community
            </Typography>
            <Box sx={{ paddingRight: "30px" }}>
              <Typography
                sx={{ color: "#151515", fontSize: { xs: "16px", md: "20px" } }}
              >
                At Zaf, we believe in fostering a global community of tea lovers
                who appreciate the beauty and diversity of tea. Become part of
                the Zaf family as we embark on a journey to serve exceptional
                experience with your cup of tea.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          background: "white",
          mb: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: { xs: "30px", md: "60px" },
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
              width="100%"
              height="250px"
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
    </>
  );
};

export default ZafsMore;
