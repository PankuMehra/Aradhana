import { Box, Typography } from "@mui/material";
import React from "react";
import { InstaAccount } from "../../Common/assets/Icons";
import Insta1 from "../../Common/assets/Images/Insta/Insta1.png";
import Insta2 from "../../Common/assets/Images/Insta/Insta2.png";
import Insta3 from "../../Common/assets/Images/Insta/Insta3.png";
import Insta4 from "../../Common/assets/Images/Insta/Insta4.png";
import Insta5 from "../../Common/assets/Images/Insta/Insta5.png";
import Insta6 from "../../Common/assets/Images/Insta/Insta6.png";
import Insta7 from "../../Common/assets/Images/Insta/Insta7.png";
import Insta8 from "../../Common/assets/Images/Insta/Insta8.png";
import { Link } from "react-router-dom";

const images1 = [Insta1, Insta2, Insta3, Insta4];
const images2 = [Insta5, Insta6, Insta7, Insta8];

const Insta = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 2, md: "8%" },
        bgcolor: "#FFFFFF",
        pl: { xs: 2, sm: 4, md: "160px" },
        m: "2px 0px",
        overflow: "hidden",
        p: {
          xs: "20px",
          sm: "40px",
          md: "0px 0px 0px 60px",
          lg: "0px 0px 0px 100px",
          xl: "0px 0px 0px 140px",
        },
      }}
    >
      <Box width={{ xs: "100%", md: "45%", lg: "33%" }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "36px", md: "42px", lg: "52px" },
            fontWeight: "600",
            color: "#55443D",
            mb: { xs: "20px", sm: "30px", md: "40px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Follow Us on Instagram to know more about us!
        </Typography>
        <Link
          to={"https://www.instagram.com/aradhanahospitality/"}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <InstaAccount />
        </Link>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%", lg: "60%" },
          height: "600px",
          position: "relative",
          overflow: "hidden",
          mt: { xs: "20px", sm: "30px", md: "unset" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            animation: "scroll 10s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateY(0%)" },
              "100%": { transform: "translateY(-40%)" },
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            {images1.map((src, index) => (
              <img
                key={index}
                alt="InstaImage"
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              position: "relative",
              top: "-150px",
            }}
          >
            {images2.map((src, index) => (
              <img
                key={index}
                alt="InstaImage"
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "grid" },
              gap: "20px",
            }}
          >
            {images1.map((src, index) => (
              <img
                key={index}
                alt="InstaImage"
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
          {/* <Box
            sx={{
              display: { xs: "none", lg: "grid" },
              gap: "20px",
              position: "relative",
              top: "-150px",
            }}
          >
            {images2.map((src, index) => (
              <img
                key={index}
                alt="InstaImage"
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Insta;
