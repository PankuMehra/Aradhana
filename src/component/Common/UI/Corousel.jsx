import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import coffecup from "../../Common/assets/Images/Zafers/coffecup.jpg";
import coffecups from "../../Common/assets/Images/Zafers/coffecups.jpg";
import garden from "../../Common/assets/Images/Zafers/tesgraden.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco - Oakland Bay Bridge, United States",
    imgPath: coffecup,
  },
  {
    label: "Bird",
    imgPath: coffecups,
  },
  {
    label: "Bali, Indonesia",
    imgPath: garden,
  },
];

function Corousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleDotClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "-140px",
        left: "50%",
        transform: "translate(-50%)",
        width: { xs: "95%", md: "70%" },
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "450px",
                  display: "block",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 10,
              width: 10,
              borderRadius: "50%",
              backgroundColor:
                index === activeStep ? "primary.main" : "grey.400",
              margin: 1,
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Corousel;
