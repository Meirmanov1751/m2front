import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import MyAccount from "../components/shop-components/my-account";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import {Meta} from "../layouts/Meta";
import {Main} from "../templates/Main";

const MyaccountV1 = () => {
  return <Main meta={<Meta title="Портфолио" description="Портфолио" />}>
    <NavbarV5/>
    <PageHeader headertitle="My Account"/>
    <MyAccount/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default MyaccountV1

