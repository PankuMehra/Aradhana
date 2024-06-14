import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./component/Main/AppLayout";
import MoreAboutUs from "./component/Pages/About/MoreAboutUs";
import Main from "./component/Main/Main";
import ContactUs from "./component/Pages/ContactUs/ContactUS";
import ZafersMore from "./component/Pages/Zafers/ZafersMore";
import ZafsMore from "./component/Pages/Zafs/ZafsMore";
import Blog from "./component/Pages/Blog/Blog";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const zafersRef = useRef(null);
  // const zafsRef = useRef(null);
  // const blogRef = useRef(null);
  // const contactRef = useRef(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
            // homeRef={homeRef}
            // aboutRef={aboutRef}
            // zafersRef={zafersRef}
            // zafsRef={zafsRef}
            // blogRef={blogRef}
            // contactRef={contactRef}
            />
          }
        >
          <Route
            index
            element={
              <Main
              // homeRef={homeRef}
              // aboutRef={aboutRef}
              // zafersRef={zafersRef}
              // zafsRef={zafsRef}
              // blogRef={blogRef}
              // contactRef={contactRef}
              />
            }
          />
          <Route path="about" element={<MoreAboutUs />} />
          <Route path="zafars" element={<ZafersMore />} />
          <Route path="zafs" element={<ZafsMore />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
      <ScrollToTop style={{ zIndex: 99999 }} smooth />
    </>
  );
};

export default App;
