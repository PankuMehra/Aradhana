// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ReviewCard from "./ReviewCard";

// // Example components
// // function FirstComponent() {
// //   return (
// //     <Paper elevation={3} sx={{ padding: 2 }}>
// //       <Typography variant="h5">First Component</Typography>
// //       <Typography>This is the content of the first component.</Typography>
// //     </Paper>
// //   );
// // }

// // function SecondComponent() {
// //   return (
// //     <Paper elevation={3} sx={{ padding: 2 }}>
// //       <Typography variant="h5">Second Component</Typography>
// //       <Typography>This is the content of the second component.</Typography>
// //     </Paper>
// //   );
// // }

// // function ThirdComponent() {
// //   return (
// //     <Paper elevation={3} sx={{ padding: 2 }}>
// //       <Typography variant="h5">Third Component</Typography>
// //       <Typography>This is the content of the third component.</Typography>
// //     </Paper>
// //   );
// // }

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const ReviewCorousel = () => {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const maxSteps = 3;

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
//   };

//   const handleBack = () => {
//     setActiveStep(
//       (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
//     );
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         top: "-140px",
//         left: "50%",
//         transform: "translate(-50%)",
//         width: { xs: "95%", md: "70%" },
//       }}
//     >
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         <Box
//           sx={{
//             height: 450, // Ensure a fixed height for the content
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 2,
//           }}
//         >
//           {activeStep === 0 && <ReviewCard />}
//           {activeStep === 1 && <ReviewCard />}
//           {activeStep === 2 && <ReviewCard />}
//         </Box>
//       </AutoPlaySwipeableViews>
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//         <Button
//           size="small"
//           onClick={handleBack}
//           disabled={activeStep === 0}
//           sx={{ marginRight: 1 }}
//         >
//           <ArrowBackIosIcon />
//           Back
//         </Button>
//         <Button
//           size="small"
//           onClick={handleNext}
//           disabled={activeStep === maxSteps - 1}
//         >
//           Next
//           <ArrowForwardIosIcon />
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ReviewCorousel;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewCard from "./ReviewCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
  {
    title: "First Review",
    content: "This is the content of the first review.",
  },
  {
    title: "Second Review",
    content: "This is the content of the second review.",
  },
  {
    title: "Third Review",
    content: "This is the content of the third review.",
  },
];

const ReviewCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = reviews.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        // top: "100px",
        left: "50%",
        transform: "translate(-50%)",
        width: { md: "70%" },
        mt: {
          xs: "10px",
        },
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              // height: "400px",
              mt:"40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? <ReviewCard /> : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{ display: "flex", justifyContent: "center", mt: 2, gap: "40px" }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "2px solid white",
            bgcolor: "#4C5045",
          }}
        >
          <ArrowBackIosIcon sx={{ color: "white" }} />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "2px solid white",
            bgcolor: "#4C5045",
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
