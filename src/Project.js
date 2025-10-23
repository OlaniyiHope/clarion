import React, { Fragment, useState, useEffect, useRef } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import park from "./edu.PNG";
import Test from "./Test";
import Footer from "./Footer";
import one from "./img/1.png"
import six from "./img/sa.JPG"
import seven from "./img/7.JPG"
import nine from "./img/9.JPG"
import twelve from "./img/12.JPG"
import fourtn from "./img/14.JPG"
import ninetn from "./img/19.JPG"
import fiftn from "./img/15.JPG"
import twentys from "./img/26.JPG"
import two from "./img/2.JPG"
import sa from "./img/sb.png"
import cy from "./img/5.JPG"
import promoImg from "./img/ja.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";


const Project = () => {
  const headingRef = useRef(null);
  const [showModal, setShowModal] = useState(true); // ✅ show when page loads

 


  return (
    <div>
   <Header />

{showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <button className="close-btn3" onClick={() => setShowModal(false)}>
        &times;
      </button>
      <img src={promoImg} alt="Promotion" />
    </div>
  </div>
)}


<main id="content" class="site-main">
    <div class="page-header"  style={{ backgroundImage: `url(${headerBg})` }}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-12">
                    <div class="page-header-box">
                        <h1 class="entry-title">Project</h1>
                                                <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs"><ol class="trail-items"><li class="trail-item trail-begin"><a href="../index.html" rel="home"><span>Home</span></a></li><li class="trail-item trail-end"><span><span>Project</span></span></li></ol></div>					</div>
                </div>
            </div>
        </div>
    </div>

    <div class="page-content">
        <div class="page-blog-archive">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../10-essential-tips-for-choosing-the-right-builder/index.html"><figure class="image-anime"><img fetchpriority="high" width="800" height="450" src="../wp-content/uploads/2024/06/post-1.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../10-essential-tips-for-choosing-the-right-builder/index.html">10 Essential Tips for Choosing the Right Builder</a></h2>
                                    <a href="../10-essential-tips-for-choosing-the-right-builder/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../the-future-of-sustainable-construction-innovations/index.html"><figure class="image-anime"><img width="800" height="450" src="../wp-content/uploads/2024/06/post-2.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../the-future-of-sustainable-construction-innovations/index.html">The Future of Sustainable Construction Innovations</a></h2>
                                    <a href="../the-future-of-sustainable-construction-innovations/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../how-to-design-your-dream-home-a-step-by-step-guide/index.html"><figure class="image-anime"><img width="800" height="450" src="../wp-content/uploads/2024/06/post-3.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../how-to-design-your-dream-home-a-step-by-step-guide/index.html">How to Design Your Dream Home: A Step-by-Step Guide</a></h2>
                                    <a href="../how-to-design-your-dream-home-a-step-by-step-guide/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../renovation-vs-new-construction/index.html"><figure class="image-anime"><img loading="lazy" width="800" height="450" src="../wp-content/uploads/2024/06/post-4.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../renovation-vs-new-construction/index.html">Renovation vs. New Construction</a></h2>
                                    <a href="../renovation-vs-new-construction/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../top-5-modern-home-design-trends-for-2024/index.html"><figure class="image-anime"><img loading="lazy" width="800" height="450" src="../wp-content/uploads/2024/06/post-5.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../top-5-modern-home-design-trends-for-2024/index.html">Top 5 Modern Home Design Trends for 2024</a></h2>
                                    <a href="../top-5-modern-home-design-trends-for-2024/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                            <div class="col-lg-4 col-md-6">
                            <div class="blog-item ">
                                <div class="post-featured-image"><a href="../the-role-of-technology-in-modern-construction/index.html"><figure class="image-anime"><img loading="lazy" width="800" height="450" src="../wp-content/uploads/2024/06/post-6.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" /></figure></a></div>								<div class="post-item-body">
                                    <h2><a href="../the-role-of-technology-in-modern-construction/index.html">The Role of Technology in Modern Construction</a></h2>
                                    <a href="../the-role-of-technology-in-modern-construction/index.html" class="readmore-btn">Read More</a>								</div>
                            </div>
                        </div>
                                                <div class="col-md-12">
                                                            </div>
                        </div>
                    </div>
                                </div>
            </div>
        </div>
    </div>
</main>

           <Footer />
    </div>
  );
};

export default Project;
