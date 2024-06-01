import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./component/Main/AppLayout";
import MoreAboutUs from "./component/Pages/About/MoreAboutUs";
import Main from "./component/Main/Main";
import ContactUs from "./component/Pages/ContactUs/ContactUS";
import ZafersMore from "./component/Pages/Zafers/ZafersMore";
import ZafsMore from "./component/Pages/Zafs/ZafsMore";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const zafersRef = useRef(null);
  const zafsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout
            homeRef={homeRef}
            aboutRef={aboutRef}
            zafersRef={zafersRef}
            zafsRef={zafsRef}
            blogRef={blogRef}
            contactRef={contactRef}
          />
        }
      >
        <Route
          index
          element={
            <Main
              homeRef={homeRef}
              aboutRef={aboutRef}
              zafersRef={zafersRef}
              zafsRef={zafsRef}
              blogRef={blogRef}
              contactRef={contactRef}
        
            />
          }
        />
        <Route path="about" element={<MoreAboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="zafers" element={<ZafersMore />} />
        <Route path="zafs" element={<ZafsMore />} />
      </Route>
    </Routes>
  );
};

export default App;
