import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import TeamDetails from "../components/section-components/team-details";


const Team_Details = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Agent Details"/>
    <TeamDetails/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Team_Details

