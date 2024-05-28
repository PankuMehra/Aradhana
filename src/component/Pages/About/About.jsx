import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AboutOldMan from "../../Common/assets/Images/About/About_old_man.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "grid", md: "flex" },
        justifyContent: "space-between",
        gap: { xs: "0%", md: "6%", lg: "8%" },
        bgcolor: "#55443D",
        p: {
          xs: "20px",
          sm: "40px",
          md: "60px",
          lg: "70px 100px",
          xl: "70px 140px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: {
            xs: "10px",
            sm: "20px",
            md: "30px",
          },
          mb: "40px",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "40px",
            },
            fontWeight: "600",
            color: "#FFFFFC",
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          About <span style={{ color: "#ED641A" }}>Us</span>
        </Typography>
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "120px",
            },
            display: "flex",
            justifyContent: "space-between",
            mt: {
              xs: "10px",
              sm: "0",
            },
          }}
        >
          <Box sx={{ width: "90%", height: "2px", bgcolor: "#ED641A" }}></Box>
          <Box sx={{ width: "5%", height: "2px", bgcolor: "#ED641A" }}></Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xs: "100%", md: "45%" },
          height: "500px",
          position: "relative",
          mb: "40px",
        }}
      >
        <img
          alt="about"
          src={AboutOldMan}
          style={{
            width: "90%",
            height: "90%",
            objectFit: "cover",
            position: "absolute",
            borderRadius: "8px",
            top: 0,
            left: 0,
            zIndex: "1",
          }}
        />
        <Box
          sx={{
            width: "90%",
            height: "90%",
            backgroundColor: "#ED641A",
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRadius: "8px",
          }}
        />
      </Box>
      <Box width={{ xs: "100%", md: "55%" }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "30px",
            mb: "50px",
          }}
        >
          <Typography
            sx={{ fontSize: "40px", fontWeight: "600", color: "#FFFFFC" }}
          >
            About <span style={{ color: "#ED641A" }}>Us</span>
          </Typography>
          <Box
            sx={{
              width: "120px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "90%", height: "2px", bgcolor: "#ED641A" }}></Box>
            <Box sx={{ width: "5%", height: "2px", bgcolor: "#ED641A" }}></Box>
          </Box>
        </Box>
        <Box sx={{ mb: "50px" }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "400", color: "#FFFFFF" }}
          >
            Welcome to Aradhana Hospitality, where the magic of tea has been
            captivating since 1974. Dilavarbhai Palkharia and Jabarbhai
            Palkharia introduced a small tea stall near DH College in Rajkot.
          </Typography>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "400", color: "#FFFFFF" }}
          >
            Over time, Nasirbhai and Zafarbhai joined the business and
            collectively received great customer's response to Zafarbhai's cha.
            With increasing demand, we opened another outlet near DH college
            canteen around 2011-2012.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ED641A",
              borderRadius: "20px",
              height: "72px",
              width: "255px",
              fontSize: "20px",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#d75f1e",
              },
            }}
            onClick={() => navigate("/about")}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
