import React, { Fragment } from "react";

import Blog from "./componet/Blog.jsx";
import Home from "./componet/Home.jsx";
import CompanyLogo from "./componet/CompanyLogo.jsx";
import HeaderTop from "./componet/HeaderTop.jsx";
import HeaderNavbar from "./componet/HeaderNavbar.jsx";
import Services from "./componet/Services.jsx";
import About from "./componet/About.jsx";
import HappyClients from "./HappyClients.jsx";
import WhyRegisterKaro from "./componet/WhyRegisterKaro.jsx";

import VideoIntro from "./componet/VideoIntro.jsx";
import Testimonial from "./componet/Testimonial.jsx";
import AppDownload from "./componet/AppDownload.jsx";
import ContactUs from "./componet/ContactUs.jsx";
import Footer from "./componet/Footer.jsx";
import Collaboration from "./componet/Collaboration.jsx";
import AskQuestions from "./componet/AskQuestions.jsx";

const App = () => {
  return (
    <>
      <HeaderTop></HeaderTop>
      <HeaderNavbar></HeaderNavbar>
      <Home></Home>
      <CompanyLogo></CompanyLogo>
      <Services></Services>
      <About></About>
      <WhyRegisterKaro></WhyRegisterKaro>
      <VideoIntro></VideoIntro>
      <HappyClients></HappyClients>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <AskQuestions></AskQuestions>

      <AppDownload></AppDownload>
      <Collaboration></Collaboration>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default App;
