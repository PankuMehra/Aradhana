import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Explore from "../Pages/Explore/Explore";
import Zafers from "../Pages/Zafers/Zafers";
import Zafs from "../Pages/Zafs/Zafs";
import Insta from "../Pages/Insta/Insta";
import Reviews from "../Pages/Reviews/Reviews";
import deliveryboy from "../Common/assets/Images/Zafers/dilveryboy.png";
import zomato from "../Common/assets/Images/Zafers/zomato-logo.png";
import swiggy from "../Common/assets/Images/Zafers/swiggy-logo.png";

const Main = () =>
  //   {
  //   homeRef,
  //   aboutRef,
  //   zafersRef,
  //   zafsRef,
  //   blogRef,
  //   contactRef,
  // }
  {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <Box>
        <Box>
          <Home />
        </Box>
        <Box>
          <Explore />
        </Box>
        <Box>
          <About />
        </Box>
        <Box>
          <Zafers />
        </Box>
        <Box>
          <Zafs />
        </Box>
        <Box>
          <Insta />
        </Box>
        <Box>
          <Reviews />
        </Box>
        <Box>
          {/* <Delivery /> */}
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
        </Box>
      </Box>
    );
  };

export default Main;
