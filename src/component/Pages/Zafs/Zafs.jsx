import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ZafsPacket from "../../Common/assets/Images/Zafs/Zafs_packet.png";
import ZafsCard from "./ZafsCard";

const Zafs = () => {
  return (
    <Box
      sx={{
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          gap: { xs: 2, sm: 4, md: "8%" },
          mb: { xs: "40px", sm: "60px", md: "80px" },
        }}
      >
        <Box width={{ xs: "100%", md: "60%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              mb: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
                fontWeight: "600",
                color: "#FFFFFC",
              }}
              className="heading-font"
            >
              Flavorful, Quality Tea to Make up <br /> Your Mood -{" "}
              <span style={{ color: "#ED641A" }}>Anytime, Anywhere!</span>
            </Typography>
          </Box>
          <Box sx={{ mb: "50px" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Whether you have a stressful workload, or wish to share beautiful
              moments with loved ones, Zaf's tea embraces your mood for every
              occasion with one special cup of chai. Its refreshing aroma, taste
              is dedicated to improving your mood instantly.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ED641A",
                borderRadius: "20px",
                height: { xs: "48px", sm: "60px", md: "72px" },
                width: { xs: "180px", sm: "220px", md: "255px" },
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#d75f1e",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", md: "35%" }}
          sx={{
            mt: { xs: "20px", md: "0" },
          }}
        >
          <img
            alt="about"
            src={ZafsPacket}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(4, 1fr)",
          },
          // flexDirection: { xs: "column", md: "row" },
          gap: "30px",
        }}
      >
        <ZafsCard />
        <ZafsCard />
        <ZafsCard />
        <ZafsCard />
      </Box>
    </Box>
  );
};

export default Zafs;
