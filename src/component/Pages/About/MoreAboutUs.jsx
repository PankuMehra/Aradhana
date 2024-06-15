import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AboutBG from "../../Common/assets/Images/About/About_BG.jpg";
import OldMan from "../../Common/assets/Images/About/More_about_old_man.png";
import ZafsPacket from "../../Common/assets/Images/About/Zaf's_packet.png";
import Man from "../../Common/assets/Images/About/more_about_man.png";
import TeaSeeds from "../../Common/assets/Images/About/tea_seeds.jpg";
import DailyNewsLogo from "../../Common/assets/Images/About/Daily_News_logo.png";
import TechnologyLogo from "../../Common/assets/Images/About/Technology_logo.png";
import CybertechLogo from "../../Common/assets/Images/About/Cybertech_logo.png";
import FurturatechLogo from "../../Common/assets/Images/About/Furturatech_logo.png";
import TestimonialCard from "./TestimonialCard";

const MoreAboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            top: "-140px",
            filter: "brightness(90%)",
            zIndex: "-1",
            width: "100%",
            height: { xs: "2000px", sm: "1400px", md: "1000px" },
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
            // width: "100%",
            p: { xs: "20px", sm: "40px", md: "60px", lg: "120px 200px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "16px" },
              color: "#ed641a",
            }}
            className="heading-font"
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#FFFFFC",
              mb: "25px",
            }}
            className="heading-font"
          >
            Welcome to Aradhana Hospitality
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            Welcome to Aradhana Hospitality, where the magic of tea has been
            captivating since 1974. Dilavarbhai Palkharia and Jabarbhai
            Palkharia introduced a small tea stall near DH College in Rajkot.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            Over time, Nasirbhai and Zafarbhai joined the business and
            collectively received great customer's response to Zafarbhai's cha.
            With increasing demand, we opened another outlet near DH college
            canteen around 2011-2012.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            With increasing popularity and demand of customers over next 5-6
            years, extension of our proud legacy, led us to open our another tea
            stall - Aradhana Tea on Raiya Road Rajkot in 2018. This outlet
            turned the sales and inspired us to elevate branding style and
            introduce another outlet Aradhana Tea and Snacks on Homi Darshan
            Marg Rajkot in 2023. And, Zafar tea, located in Ayodhya Chowk in
            2024.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            Today, our goal is to make tea globally renowned, blending tradition
            and modern tech with Zafar tea. And to offer high-quality,
            user-friendly tea products and a diverse array of ready-to-enjoy
            treats.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
            }}
          >
            Aradhana Hospitality is not just a brand, but a blend of the warmth
            of tradition, and modern tech to make chai accessible and elevate
            your ritual with flavorful taste. Join our journey where tea serves
            an unforgettable moment, and each cup aspires to tell a story.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          bgcolor: "#FFFFFF",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
          alignItems: "flex-end",
          justifyItems: "center",
          justifyContent: "center",
          gap: "30px",
          p: { xs: "20px", sm: "40px", md: "60px 60px 20px 60px;" },
        }}
      >
        <Box sx={{ width: { xs: "90%", sm: "60%", md: "70%" } }}>
          <img alt="Home" src={Man} width={"100%"} />
        </Box>
        <Box
          sx={{
            width: { xs: "90%", sm: "60%", md: "120%" },
            position: "relative",
          }}
        >
          <img alt="Home" src={ZafsPacket} width={"100%"} />
        </Box>
        <Box sx={{ width: { xs: "90%", sm: "60%", md: "70%" } }}>
          <img alt="Home" src={OldMan} width={"100%"} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          gap: { xs: 2, sm: 4, md: "8%" },
          mb: { xs: "40px", sm: "60px", md: "80px" },
          bgcolor: "#F1F1F1",
          p: { xs: "20px", sm: "40px", md: "60px", lg: "120px 200px" },
        }}
      >
        <Box width={{ xs: "100%", md: "50%" }}>
          <Box
            sx={{
              mb: "25px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
                color: "#ed641a",
              }}
              className="heading-font"
            >
              Our <span style={{ color: "#000" }}>Goal</span>
            </Typography>
          </Box>
          <Box sx={{ mb: "50px" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: "500",
                color: "#151515",
              }}
            >
              Our aspiration is to revolutionize tea culture. By seamlessly
              blending heritage with modern tech, we aim to redefine the
              identity of tea, making it the most happening and loved beverage
              globally. Join us as we embark on this journey to transform tea
              into a cherished beverage, and a contemporary ritual for everyone.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: { xs: "10px", md: "20px" } }}>
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
              Our Goal
            </Button>
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
              Our Vision
            </Button>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", md: "45%" }}
          sx={{
            mt: { xs: "20px", md: "0" },
          }}
        >
          <img
            alt="about"
            src={TeaSeeds}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#55443D",
          p: {
            xs: "40px",
            md: "60px",
            lg: "70px 100px",
            xl: "80px 140px",
          },
        }}
      >
        <Box
          sx={{
            mb: "25px",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              color: "#ed641a",
              textAlign: "center",
            }}
            className="heading-font"
          >
            Our <span style={{ color: "#FFFFFF" }}>Testimonial</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2,1fr)",
            },
            gap: "30px",
            p: {
              lg: "120px 200px",
            },
          }}
        >
          <TestimonialCard />
          <TestimonialCard />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          p: {
            xs: "40px",
            md: "60px",
            lg: "70px 100px",
            lg: "120px 200px",
          },
        }}
      >
        <Box
          sx={{
            mb: { xs: "30px", md: "50px", lg: "75px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              color: "#ed641a",
              textAlign: "center",
            }}
            className="heading-font"
          >
            Media <span style={{ color: "#000" }}>Mentions</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(4,1fr)",
            },
            justifyItems: "center",

            gap: "30px",
          }}
        >
          <Box
            width={{ xs: "30%", sm: "25%", md: "60%" }}
            sx={{
              mt: { xs: "20px", md: "0" },
            }}
          >
            <img
              alt="DailyNewsLogo"
              src={DailyNewsLogo}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            width={{ xs: "30%", sm: "25%", md: "60%" }}
            sx={{
              mt: { xs: "20px", md: "0" },
            }}
          >
            <img
              alt="TechnologyLogo"
              src={TechnologyLogo}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            width={{ xs: "30%", sm: "25%", md: "60%" }}
            sx={{
              mt: { xs: "20px", md: "0" },
            }}
          >
            <img
              alt="CybertechLogo"
              src={CybertechLogo}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            width={{ xs: "30%", sm: "25%", md: "60%" }}
            sx={{
              mt: { xs: "20px", md: "0" },
            }}
          >
            <img
              alt="FurturatechLogo"
              src={FurturatechLogo}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
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
    </>
  );
};

export default MoreAboutUs;
