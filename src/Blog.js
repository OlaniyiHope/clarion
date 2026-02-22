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
import ta from "./img/c9.png"
import mod from "./img/c10.png"
import promoImg from "./img/c1.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap"; 

import "./instagram.css";
import "./whatsapp.css"

const Blog = () => {
  const headingRef = useRef(null);
  const [currentModal, setCurrentModal] = useState(1); // 1 = first modal, 2 = second, null = none

 

  // 🔹 Modal animation
  useEffect(() => {
    if (currentModal) {
      gsap.fromTo(
        ".modal-box",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentModal]);

  // 🔹 Auto-show second modal after 2 minutes
//   useEffect(() => {
//     let timer;
//     if (currentModal === null) {
//       // When the first modal closes, start countdown for second
//       timer = setTimeout(() => {
//         setCurrentModal(2);
//       }, 3000); // 120000ms = 2 minutes
//     }
//     return () => clearTimeout(timer);
//   }, [currentModal]);

  const handleClose = () => {
    if (currentModal === 1) {
      setCurrentModal(2); // Show second modal after first closes
    } else if (currentModal === 2) {
      setCurrentModal(3); // Show third modal after second closes
    } else {
      setCurrentModal(null); // Stop after third modal
    }
  };



  return (
    <div>
        	      <a
        class="header-whatsapp"
        href="https://wa.me/2349035775544"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          class="whatsapp-icon svg-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z"></path>
        </svg>
      </a>
      <a
        class="header-instagram"
        href="https://www.instagram.com/clarion_global_energy"
        aria-label="Visit our Instagram profile"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 800 800"
          style={{ enableBackground: "new 0 0 800 800" }}
          class="instagram-icon svg-primary"
          xmlSpace="preserve"
        >
          <g id="_x31_3">
            <g>
              <g>
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="582.4734"
                  y1="565.3093"
                  x2="209.6897"
                  y2="227.5917"
                >
                  <stop offset="0" style={{ stopColor: "#FEC053" }} />
                  <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
                  <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
                  <stop offset="1" style={{ stopColor: "#5342D6" }} />
                </linearGradient>
                <path
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "url(#SVGID_1_)",
                  }}
                  d="M218.459,127.608h363.085
              c49.938,0,90.848,40.904,90.848,90.848v363.088c0,49.942-40.909,90.848-90.848,90.848H218.459
              c-49.947,0-90.851-40.906-90.851-90.848V218.456C127.608,168.512,168.512,127.608,218.459,127.608L218.459,127.608z"
                />
              </g>
              <g>
                <path
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF",
                  }}
                  d="M526.769,400.003c0-70.027-56.743-126.77-126.769-126.77
              c-70.027,0-126.767,56.743-126.767,126.77c0,70.023,56.74,126.767,126.767,126.767
              C470.026,526.769,526.769,470.026,526.769,400.003L526.769,400.003z M524.369,256.005c-11.316,0-20.399,9.172-20.399,20.399
              c0,11.316,9.083,20.402,20.399,20.402c11.229,0,20.398-9.086,20.398-20.402C544.768,265.177,535.599,256.005,524.369,256.005
              L524.369,256.005z M296.376,226.693h207.25c38.401,0,69.684,31.37,69.684,69.681v207.249c0,38.401-31.282,69.69-69.684,69.69
              h-207.25c-38.314,0-69.686-31.288-69.686-69.69V296.374C226.69,258.063,258.063,226.693,296.376,226.693L296.376,226.693z
              M503.626,203.463h-207.25c-51.087,0-92.913,41.826-92.913,92.91v207.249c0,51.174,41.826,92.916,92.913,92.916h207.25
              c51.171,0,92.91-41.742,92.91-92.916V296.374C596.536,245.289,554.797,203.463,503.626,203.463L503.626,203.463z
              M299.545,400.003c0-55.459,44.999-100.458,100.455-100.458s100.455,44.999,100.455,100.458
              c0,55.456-44.999,100.449-100.455,100.449S299.545,455.459,299.545,400.003L299.545,400.003z"
                />
              </g>
            </g>
          </g>
          <g id="Layer_1" />
        </svg>
      </a>

   <Header />

 {currentModal === 1 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>
              &times;
            </button>
            <img src={promoImg} alt="Promo Ad 1" />
          </div>
        </div>
      )}

      {currentModal === 2 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>
              &times;
            </button>
            <img src={mod} alt="Promo Ad 2" />
          </div>
        </div>
      )}
      {currentModal === 3 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>
              &times;
            </button>
            <img src={ta} alt="Promo Ad 3" />
          </div>
        </div>
      )}


<main id="content" class="site-main">
	<div class="page-header"  style={{ backgroundImage: `url(${headerBg})` }}>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<h1 class="entry-title">Blog</h1>
												<div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs"><ol class="trail-items"><li class="trail-item trail-begin"><a href="../index.html" rel="home"><span>Home</span></a></li><li class="trail-item trail-end"><span><span>Blog</span></span></li></ol></div>					</div>
				</div>
			</div>
		</div>
	</div>

	{/* <div class="page-content">
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
	</div> */}
<div class="page-content">
		<div class="page-blog-archive">
			<div class="container">

             <h2 style={{textAlign: "center"}}>Coming Soon</h2>       
            </div>

    </div>
    </div>
    
</main>

           <Footer />
    </div>
  );
};

export default Blog;
