import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Comments from './comments';
import Sidebar from './sidebar';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown'
import useNews from "../../data/useNews";

const BlogDetails = function (props: any) {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const date = new Date(props.data.createdAt)
    const formattedDate = date.toLocaleDateString("ru", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })

    return (
      <div className="ltn__page-details-area ltn__blog-details-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__blog-details-wrap">
                <div className="ltn__page-details-inner ltn__blog-details-inner">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-category">
                        <Link href="/shop">Недвижимость</Link>
                      </li>
                    </ul>
                  </div>
                  <h2 className="ltn__blog-title">{props.data.title}
                  </h2>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author go-top">
                        <Link href="/team-details"><Image src={publicUrl + "assets/img/blog/author.jpg"} alt="#"/>By:
                          Ethan</Link>
                      </li>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"/>{formattedDate}
                      </li>
                      {/*<li>
                        <Link href="#"><i className="far fa-comments"/>35 Comments</Link>
                      </li>*/}
                    </ul>
                  </div>
                  {parse(`${props.data.content}`)}

                </div>
                {/* blog-tags-social-media */}
                <div className="ltn__blog-tags-social-media mt-80 row">
                  <div className="ltn__tagcloud-widget col-lg-8 go-top">
                    <h4>Releted Tags</h4>
                    <ul>
                      <li>
                        <Link href="/shop">Popular</Link>
                      </li>
                      <li>
                        <Link href="/shop">Business</Link>
                      </li>
                      <li>
                        <Link href="/shop">ux</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media text-right text-end col-lg-4">
                    <h4>Social Share</h4>
                    <ul>
                      <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
                      <li><a href="#" title="Twitter"><i className="fab fa-twitter"/></a></li>
                      <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>
                      <li><a href="#" title="Youtube"><i className="fab fa-youtube"/></a></li>
                    </ul>
                  </div>
                </div>
                <hr/>
                {/* prev-next-btn */}
                <div className="ltn__prev-next-btn row mb-50">
                  <div className="blog-prev col-lg-6">
                    <h6>Prev Post</h6>
                    <h3 className="ltn__blog-title"><Link href="#">Tips On Minimalist</Link></h3>
                  </div>
                  <div className="blog-prev blog-next text-right text-end col-lg-6">
                    <h6>Next Post</h6>
                    <h3 className="ltn__blog-title"><Link href="#">Less Is More</Link></h3>
                  </div>
                </div>
                <hr/>
                {/* related-post */}
                <div className="related-post-area mb-50">
                  <h4 className="title-2">Related Post</h4>
                  <div className="row">
                    <div className="col-md-6">
                      {/* Blog Item */}
                      <div className="ltn__blog-item ltn__blog-item-6">
                        <div className="ltn__blog-img">
                          <Link href="/blog-details/blog-details"><Image src={publicUrl + "assets/img/blog/blog-details/11.jpg"}
                                                                         alt="Image"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-date ltn__secondary-color">
                                <i className="far fa-calendar-alt"/>June 22, 2020
                              </li>
                            </ul>
                          </div>
                          <h3 className="ltn__blog-title"><Link href="/blog-details/blog-details">A series of iOS 7 inspire
                            vector icons sense.</Link></h3>
                          <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* Blog Item */}
                      <div className="ltn__blog-item ltn__blog-item-6">
                        <div className="ltn__blog-img">
                          <Link href="/blog-details/blog-details"><Image src={publicUrl + "assets/img/blog/blog-details/12.jpg"}
                                                                         alt="Image"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-date ltn__secondary-color">
                                <i className="far fa-calendar-alt"/>June 22, 2020
                              </li>
                            </ul>
                          </div>
                          <h3 className="ltn__blog-title"><Link href="/blog-details/blog-details">A series of iOS 7 inspire
                            vector icons sense.</Link></h3>
                          <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Comments/>
              </div>
            </div>
            <Sidebar/>
          </div>
        </div>
      </div>
    )
}

export default BlogDetails;
