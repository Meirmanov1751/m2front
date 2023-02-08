import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import Register from "../components/section-components/register";


const RegisterV1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Account" subheader="Register"/>
    <Register/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default RegisterV1
