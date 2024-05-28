import { Box } from "@mui/material";
import React, { useRef } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Explore from "../Pages/Explore/Explore";
import Zafers from "../Pages/Zafers/Zafers";
import Zafs from "../Pages/Zafs/Zafs";
import Insta from "../Pages/Insta/Insta";
import Reviews from "../Pages/Reviews/Reviews";
import Delivery from "../Pages/Delivery/Delivery";

const Main = ({
  homeRef,
  aboutRef,
  zafersRef,
  zafsRef,
  blogRef,
  contactRef,
}) => {
  return (
    <Box>
      <Box ref={homeRef}>
        <Home />
      </Box>
      <Box>
        <Explore />
      </Box>
      <Box ref={aboutRef}>
        <About />
      </Box>
      <Box ref={zafersRef}>
        <Zafers />
      </Box>
      <Box ref={zafsRef}>
        <Zafs />
      </Box>
      <Box>
        <Insta />
      </Box>
      <Box ref={blogRef}>
        <Reviews />
      </Box>
      <Box ref={contactRef}>
        <Delivery />
      </Box>
    </Box>
  );
};

export default Main;
