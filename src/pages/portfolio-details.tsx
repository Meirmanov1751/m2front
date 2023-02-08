import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import PortfolioDetails from "../components/section-components/portfolio-details";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";


const Portfolio_Details = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Portfolio Details"/>
    <PortfolioDetails/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Portfolio_Details

