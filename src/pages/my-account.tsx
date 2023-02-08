import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import MyAccount from "../components/shop-components/my-account";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const MyaccountV1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="My Account"/>
    <MyAccount/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default MyaccountV1

