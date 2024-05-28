import { Box } from "@mui/material";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Common/UI/Navbar/Navbar";
import Footer from "../Common/UI/Footer/Footer";

const AppLayout = ({
  homeRef,
  aboutRef,
  zafersRef,
  zafsRef,
  blogRef,
  contactRef,
}) => {
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
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
