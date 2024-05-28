import { Box, Typography } from "@mui/material";
import React from "react";
import TestimonialPlaceholder from "../../Common/assets/Images/About/Testimonial_Placeholder.png";

const TestimonialCard = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", p: "20px 15px", borderRadius: "10px" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#7a7a7a",
            mb: "25px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Box>
          <img
            src={TestimonialPlaceholder}
            alt="testimonial"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14xpx",
              fontWeight: "700",
              color: "#7a7a7a",
            }}
          >
            John Doe
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#ed641a",
            }}
          >
            CEO
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
