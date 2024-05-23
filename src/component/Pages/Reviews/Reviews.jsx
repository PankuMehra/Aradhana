import { Box, Typography } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <Box
      sx={{
        bgcolor: "#484F3C",
        p: { xs: "20px 0px", sm: "40px 0px", md: "60px 0px", lg: "120px 0px" },
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography
          sx={{
            width: { xs: "90%", md: "50%" },
            m: "auto",
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
            fontWeight: "700",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          India's #1 Selling Farm - Direct Organic Japanese Matcha
        </Typography>
      </Box>
      <Box
        sx={{
          width: {xs: "240%", sm: "160%", md: "120%"},
          position: "relative",
          left: {xs: "-70%", sm: "-30%", md: "-10%"},
          display: "flex",
          justifyContent: "space-between",
          mt: "100px",
        }}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Reviews;
