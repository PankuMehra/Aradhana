import { Box, Typography } from "@mui/material";
import React from "react";
import ZaferBG from "../../Common/assets/Images/Zafers/Zafer_BG.jpg";
import mission from "../../Common/assets/Images/Zafers/mission.png";
import Corousel from "../../Common/UI/Corousel";
import zaf from "../../Common/assets/Images/Zafs/zaf.jpg";
import deliveryboy from "../../Common/assets/Images/Zafers/dilveryboy.png";
import zomato from "../../Common/assets/Images/Zafers/zomato-logo.png";
import swiggy from "../../Common/assets/Images/Zafers/swiggy-logo.png";
import Home from "../Home/Home";

const ZafsMore = () => {
  return (
    <>
      <Home />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            bottom: { xs: "120px", sm: "120px", md: "120px" },
            filter: "brightness(90%)",
            zIndex: "-1",
            width: "100%",
            height: { xs: "1200px", sm: "1000px", md: "800" },
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
            mb: { xs: "140px", sm: "120px", md: "100px" },
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
            Zaf's
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            At Zaf, tea is not just a beverage; it's an art form.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            Welcome to Zaf, where passion meets perfection in every sip. Rooted
            in a passion for tea, Zaf is more than a brand, but an experience
            dedicated to cherishing moments of joy with the aroma of tea. Join
            us on a journey where tradition meets innovation, and the art of tea
            is celebrated with every sip.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            With a rich heritage rooted in the ancient traditions of tea, we
            blend different tea flavors with modern flair to bring you an
            exceptional tea experience. From the lush tea gardens to your cup,
            our process is infused with dedication and expertise.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#ED641A",
          position: "relative",
          height: "400px",
          width: "100%",
        }}
      >
        <Corousel />
      </Box>
      <Box
        sx={{
          background: "#BAA98F",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: { xs: "30px", sm: "40px", md: "60px" },
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
              fontWeight: "600",
              color: "#FFFFFC",
            }}
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
