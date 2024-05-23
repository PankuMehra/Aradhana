import { Box, Typography } from "@mui/material";
import React from "react";
import DeliveryBoy from "../../Common/assets/Images/Delivery/Delivery_boy.png";
import Swiggy from "../../Common/assets/Images/Delivery/Swiggy_logo.png";
import Zomato from "../../Common/assets/Images/Delivery/Zomato_logo.png";

const Delivery = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "90%", md: "80%", lg: "60%" },
        bgcolor: "#FFFFFF",
        py: { xs: "40px", sm: "60px", md: "80px" },
        m: "auto",
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box mb={{ xs: 3, sm: 0 }} sx={{ width: { xs: "100%", sm: "auto" } }}>
        <img
          alt="DeliveryBoy"
          src={DeliveryBoy}
          style={{ width: "100%", maxWidth: "300px", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "42px" },
            fontWeight: "600",
            color: "#55443D",
            mb: { xs: "20px", sm: "50px" },
            fontFamily: "YoungSerif",
          }}
        >
          Also Available on
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: { xs: "10px", sm: "20px" },
          }}
        >
          <img
            alt="Swiggy"
            src={Swiggy}
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <img
            alt="Zomato"
            src={Zomato}
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
