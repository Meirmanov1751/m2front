import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogRightSidebar from "../components/blog-components/blog-right-sidebar";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const BlogRightSidebarPage = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Blog Right Sidebar" subheader="Blog"/>
    <BlogRightSidebar/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default BlogRightSidebarPage

