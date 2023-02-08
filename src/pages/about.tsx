import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import Testimonial from "../components/section-components/testimonial-v2";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import AboutV4 from "../components/section-components/about-v4";
import FeaturesV1 from "../components/section-components/features-v1";
import TeamV1 from "../components/section-components/team-v1";

const About = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="About Us"/>
    <AboutV4/>
    <FeaturesV1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
    <TeamV1/>
    <Testimonial/>
    <BlogSlider/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default About

