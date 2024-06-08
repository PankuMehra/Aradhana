import { Box, Typography } from "@mui/material";
import React from "react";
import Reviewer1 from "../../Common/assets/Images/Reviewers/Reviewer1.png";

const ReviewCard = () => {
  return (
    <Box
      sx={{
        border: "3px solid #FFFFFF",
        borderRadius: "40px",
        width: "50%",
        p: "80px 40px 20px 40px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#565C4C"
      }}
    >
      <Box
        sx={{
          border: "2px solid #FFFFFF",
          width: "70px",
          height: "70px",
          position: "absolute",
          borderRadius: "50%",
          margin: "auto",
          top: "-35px",
        }}
      >
        <img
          alt="Review"
          src={Reviewer1}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(80%)",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          color: "#FFFFFF",
          textAlign: "center",
          mb: "30px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Typography>
      <Typography
        sx={{
          fontSize: "26px",
          fontWeight: "400",
          color: "#BAA98F",
          textAlign: "center",
        }}
      >
        Rick Wright
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "400",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        Executive Engineer
      </Typography>
    </Box>
  );
};

export default ReviewCard;
