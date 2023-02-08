import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogDetails from "../components/blog-components/blog-details";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const BlogDetailsPage = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="News Details"/>
    <BlogDetails/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default BlogDetailsPage

