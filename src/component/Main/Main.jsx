import { Box } from "@mui/material";
import React, { useRef } from "react";
import Navbar from "../Common/UI/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Explore from "../Pages/Explore/Explore";
import Zafers from "../Pages/Zafers/Zafers";
import Zafs from "../Pages/Zafs/Zafs";
import Insta from "../Pages/Insta/Insta";
import Reviews from "../Pages/Reviews/Reviews";
import Delivery from "../Pages/Delivery/Delivery";
import Footer from "../Common/UI/Footer/Footer";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const zafersRef = useRef(null);
  const zafsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Box>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        zafersRef={zafersRef}
        zafsRef={zafsRef}
        blogRef={blogRef}
        contactRef={contactRef}
      />
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
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
