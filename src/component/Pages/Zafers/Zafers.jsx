import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Zafers1 from "../../Common/assets/Images/Zafers/zafers1.png";
import Zafers2 from "../../Common/assets/Images/Zafers/zafers2.png";
import Zafers3 from "../../Common/assets/Images/Zafers/zafers3.png";
import Zafers4 from "../../Common/assets/Images/Zafers/zafers4.png";
import Zafers5 from "../../Common/assets/Images/Zafers/zafers5.png";
import Zafers6 from "../../Common/assets/Images/Zafers/zafers6.png";
import Zafers7 from "../../Common/assets/Images/Zafers/zafers7.png";
import Zafers8 from "../../Common/assets/Images/Zafers/zafers8.png";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const Zafers = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "flex-start",
        gap: { xs: 4, md: "8%" },
        bgcolor: "#FFFFFF",
        p: { xs: "20px", sm: "40px", md: "80px 0px 80px 160px" },
        p: {
          xs: "20px",
          sm: "40px",
          md: "60px 0px 60px 60px",
          lg: "70px 0px 70px 100px",
          xl: "70px 0px 70px 140px",
        },
      }}
    >
      <Box width={{ xs: "100%", md: "32%" }}>
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
              color: "#55443D",
            }}
          >
            The Story Behind Our Ocha House
          </Typography>
        </Box>
        <Box sx={{ mb: "50px" }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: "500",
              color: "#666666",
            }}
          >
            We also specialize in bubble tea, a beverage originating from Taiwan
            that combines freshly brewed teas with a large variety of exotic
            natural fruit concentrates, served cold with delicious chewy tapioca
            pearls.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "20px" }}>
          <Link
            style={{
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              fontWeight: "700",
              color: "#ED641A",
            }}
          >
            Read more
          </Link>
          <EastIcon sx={{ color: "#ED641A" }} />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "20px",
        }}
      >
        {[
          Zafers1,
          Zafers2,
          Zafers3,
          Zafers4,
          Zafers5,
          Zafers6,
          Zafers7,
          Zafers8,
        ].map((src, index) => (
          <Box key={index}>
            <img
              alt={`Explore ${index + 1}`}
              src={src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Zafers;
