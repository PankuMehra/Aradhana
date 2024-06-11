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
        p: { xs: "20px 40px", sm: "40px", md: "80px 0px 80px 160px" },
        p: {
          xs: "40px 40px",
          sm: "40px",
          md: "60px 0px 60px 60px",
          lg: "120px 0px 120px 200px",
          xl: "120px 0px 120px 200px",
        },
        overflow: "hidden",
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
            className="heading-font"
          >
            The Story Behind <br /> Our Ocha House
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
          display: "flex",
          gap: { xs: "8px", sm: "12px", md: "20px" },
          overflow: "hidden",
          height: "500px",
          width: { xs: "100%", md: "60%" },
          position: "relative",
          // right: { sm: "0px", md: "-200px", lg: "-150px" },
        }}
      >
        <Box
          sx={{
            // height: "560px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "auto auto",
              gap: { xs: "8px", sm: "12px", md: "20px" },
            }}
          >
            <img
              alt={"Zafers 1"}
              src={Zafers1}
              style={{
                width: "100%",
                objectFit: "fill",
                height: "280px",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "16px",
              }}
            />
            <img
              alt={"Zafers 2"}
              src={Zafers2}
              style={{
                width: "100%",
                objectFit: "fill",
                height: "280px",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "16px",
              }}
            />
          </Box>
          <img
            alt={"Zafers 3"}
            src={Zafers3}
            style={{
              width: "100%",
              objectFit: "fill",
              height: "220px",
              objectFit: "cover",
              filter: "brightness(80%)",
              borderRadius: "16px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            // gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto auto",
            gap: { xs: "8px", sm: "12px", md: "20px" },
            height: "520px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <img
            alt={"Zafers 4"}
            src={Zafers4}
            style={{
              width: "100%",
              objectFit: "fill",
              height: "280px",
              objectFit: "cover",
              filter: "brightness(80%)",
              borderRadius: "16px",
            }}
          />
          <img
            alt={"Zafers 5"}
            src={Zafers5}
            style={{
              width: "100%",
              objectFit: "fill",
              height: "280px",
              objectFit: "cover",
              filter: "brightness(80%)",
              borderRadius: "16px",
            }}
          />
        </Box>
        <Box
          sx={{
            // height: "560px",
            overflow: "hidden",
            borderRadius: "16px",
            display: { xs: "none", sm: "unset", md: "none", lg: "unset" },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "auto auto",
              gap: "20px",
            }}
          >
            <img
              alt={"Zafers 6"}
              src={Zafers6}
              style={{
                width: "100%",
                objectFit: "fill",
                height: "280px",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "16px",
              }}
            />
            <img
              alt={"Zafers 7"}
              src={Zafers7}
              style={{
                width: "100%",
                objectFit: "fill",
                height: "280px",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "16px",
              }}
            />
          </Box>
          <img
            alt={"Zafers 8"}
            src={Zafers8}
            style={{
              width: "100%",
              objectFit: "fill",
              height: "220px",
              objectFit: "cover",
              filter: "brightness(80%)",
              borderRadius: "16px",
            }}
          />
        </Box>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default Zafers;
