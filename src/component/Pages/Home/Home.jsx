import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HomeBG from "../../Common/assets/Images/HomeBG.png";

const Home = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-120px", sm: "-120px", md: "-120px" },
          filter: "brightness(50%)",
          zIndex: "-1",
          width: "100%",
          height: "800px",
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
          // width: { xs: "100%", md: "100%", lg: "85%" },
          p: { xs: "20px", sm: "40px", md: "60px", lg: "120px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "38px", lg: "48px" },
              fontWeight: 600,
              color: "#FFFFFC",
            }}
          >
            Welcome to
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "40px", md: "50px", lg: "64px" },
              fontWeight: 600,
              color: "#FFFFFC",
            }}
          >
            Aradhana Hospitality
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "28px" },
            fontWeight: 400,
            color: "#FFFFFF",
          }}
        >
          Since 1974, India's Top Tea Cafe serves quality chai, verse snacks and
          a vibe that leaves every customer smiling.
        </Typography>
        <Button
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
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
