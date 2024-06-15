import { Box, Typography } from "@mui/material";
import React from "react";
import { ZafsEssence } from "../../Common/assets/Icons";

const ZafsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        bgcolor: "#FFFFFF",
        p: "20px 15px",
        borderRadius: "10px",
        zIndex: 9999,
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "700", color: "#55443D" }}
        >
          Fresh Aroma
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#BAA98F" }}
        >
          Indulge in Zaf tea's fresh aroma, capturing nature's essence in every
          sip
        </Typography>
      </Box>
      <Box>
        <ZafsEssence />
      </Box>
    </Box>
  );
};

export default ZafsCard;
