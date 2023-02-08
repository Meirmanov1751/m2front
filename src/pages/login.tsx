import React from 'react';
import Navbar from "../components/global-components/navbar-v5";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import Login from "../components/section-components/login";
import PageHeader from "../components/global-components/page-header";

const LoginV1 = () => {
  return <div>
    <Navbar/>
    <PageHeader headertitle="Account" subheader="Login"/>
    <Login/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default LoginV1
