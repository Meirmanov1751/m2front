import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import Register from "../components/section-components/register";
import {Main} from "../templates/Main";
import {Meta} from "../layouts/Meta";


const RegisterV1 = () => {
  return <Main meta={<Meta title={"Регистрация"} description={'Страница для регистрации в M2'}/>}
  >
    <NavbarV5/>
    <PageHeader headertitle="Регистрация" subheader="Регистрация"/>
    <Register/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default RegisterV1
