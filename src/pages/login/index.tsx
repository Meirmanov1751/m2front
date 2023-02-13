import React, {useEffect} from 'react';
import Navbar from "../../components/global-components/navbar-v5";
import CallToActionV1 from "../../components/section-components/call-to-action-v1";
import Footer from "../../components/global-components/footer";
import Login from "../../components/section-components/login";
import PageHeader from "../../components/global-components/page-header";
import {Main} from "../../templates/Main";
import {Meta} from "../../layouts/Meta";
import useUser from "../../data/useUser";
import Router from "next/router";

const LoginV1 = () => {
  const { mutate, isLoggedIn } = useUser();
  useEffect(() => {
    if (isLoggedIn) Router.replace("/");
  }, [isLoggedIn]);

  return <Main meta={
    <Meta
        title="Войти"
        description="M2."
    />
  }>
    <Navbar/>
    <PageHeader headertitle="Войти" subheader="Войти"/>
    <Login/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default LoginV1
