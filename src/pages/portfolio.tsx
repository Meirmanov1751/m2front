import React from 'react';
import Navbar from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import PortfolioV1 from "../components/section-components/portfolio-v1";
import CallToActonV2 from "../components/section-components/call-to-action-v2";
import SponsorV2 from "../components/section-components/sponsor-v2";
import {Main} from "../templates/Main";
import {Meta} from "../layouts/Meta";


const Portfolio_V1 = () => {
  return <Main meta={<Meta title="Портфолио" description="Портфолио" />}>
    <Navbar/>
    <PageHeader headertitle="Our Portfolio" subheader="Portfolio"/>
    <PortfolioV1/>
    <CallToActonV2/>
    <BlogSlider sectionClass="pt-120"/>
    <SponsorV2/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default Portfolio_V1

