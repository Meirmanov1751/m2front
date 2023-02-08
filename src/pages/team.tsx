import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import TeamV1 from "../components/section-components/team-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";


const Team_V1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Our Agent" subheader="Agent"/>
    <TeamV1/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Team_V1

