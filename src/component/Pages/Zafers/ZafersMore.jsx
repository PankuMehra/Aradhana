import { Box, Button, Typography } from "@mui/material";
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
import Carousel from "react-material-ui-carousel";
import CommonCarousel from "component/Common/Carousel/CommonCarousel";
// import TestimonialCard from "./TestimonialCard";

const ZafersMore = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imageUrl:
        "https://aradhanahospitality.com/demo/wp-content/uploads/2024/02/aradhana-2.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imageUrl:
        "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?t=st=1718395475~exp=1718399075~hmac=2204a6303a338f4e2b2f79cc66d6799646f610dfebb234f5d31298ace9b94da7&w=1380",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Box sx={{ position: "relative", height: "800px" }}>
        <Carousel
          cycleNavigation="true"
          animation="slide"
          interval={15000}
          sx={{
            position: "absolute",
            top: "-200px",
            left: 0,
            right: 0,
            width: "100%",
          }}
          height={1000}
          indicators={false}
        >
          {items.map((item, i) => (
            <CommonCarousel key={i} item={item} />
          ))}
        </Carousel>
      </Box>
      <Box
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: { xs: "30px", sm: "40px", md: "60px", lg: "120px 300px" },
          justifyContent: "center",
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
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "600",
              color: "#55443D",
            }}
          >
            <span style={{ color: "#ED641A" }}>About</span> Us
          </Typography>
          <Box sx={{ paddingRight: { md: "30px" } }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#55443D",
                mb: "25px",
              }}
            >
              When it comes to vibing with a beverage in India, it has to be
              chai. At Zafar, we blend tradition, joy, and taste to unite
              communities with love. From classic chai to exotic herbal
              infusions, each sip at Zafar is filled with freshness, flavor that
              you find difficult to resist.
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#55443D",
                mb: "25px",
              }}
            >
              We are more than just a tea cafe; we endeavor to serve an
              experience to help friends connect, families unwind, and
              individuals find solace. Step into the soothing ambiance and
              attentive service that feels like a home away from home.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            alt="Home"
            src={
              "https://aradhanahospitality.com/demo/wp-content/uploads/2024/02/aradhana-1-2.jpg"
            }
            width="100%"
            height="450px"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      *****
      <Box
        sx={{
          background: "#BAA98F",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: { xs: "30px", sm: "40px", md: "60px", lg: "120px 300px" },
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
      <Box
        sx={{
          p: {
            xs: "40px",
            md: "60px",
            lg: "70px 100px",
            xl: "80px 140px",
          },
          bgcolor: "#F1F1F1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "400",
            color: "#ed641a",
            textAlign: "center",
          }}
        >
          Want to franchise with us?
        </Typography>

        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#151515",
            textAlign: "center",
          }}
        >
          Request a free franchise consultation
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#151515",
            borderRadius: "8px",
            height: { xs: "36px", sm: "46px", md: "56px" },
            width: { xs: "140px", sm: "160px", md: "180px" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#ED641A",
            },
          }}
        >
          Apply now
        </Button>
      </Box>
    </Box>
  );
};

export default ZafersMore;
