import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogGrid from "../components/blog-components/blog-grid";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const BlogGridPage = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Blog Grid"/>
    <BlogGrid/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default BlogGridPage

