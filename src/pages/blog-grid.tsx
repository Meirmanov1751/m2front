import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import {Main} from "../templates/Main";
import {Meta} from "../layouts/Meta";
import BlogGrid from "../components/blog-components/blog-grid";

const BlogGridPage = () => {
  return <Main meta={
    <Meta
      title="Новости"
      description="M2."
    />
  }>
    <NavbarV5/>
    <PageHeader headertitle="Новости"/>
    <BlogGrid/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default BlogGridPage

