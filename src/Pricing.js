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
import fours from "./img/9.JPG"
import teen from "./img/14.JPG"
import sa from "./img/sb.png"
import t1 from "./img/t1.JPG"
import t3 from "./img/t3.JPG"
import t6 from "./img/t6.JPG"
import t5 from "./img/t5.JPG"
import cy from "./img/5.JPG"
import promoImg from "./img/ja.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";
import pump from "./img/pump.JPG"
import { gsap } from "gsap"; 
import mod from "./img/mod.png"
import ta from "./img/ta.png"
import "./instagram.css";
import "./whatsapp.css"
const Pricing = () => {
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

//   // 🔹 Auto-show second modal after 2 minutes
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
                        <h1 class="entry-title">Pricing</h1>
                                                <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs"><ol class="trail-items"><li class="trail-item trail-begin"><a href="../index.html" rel="home"><span>Home</span></a></li><li class="trail-item trail-end"><span><span>Pricing</span></span></li></ol></div>					</div>
                </div>
            </div>
        </div>
    </div>

	<div data-elementor-type="wp-page" data-elementor-id="10" class="elementor elementor-10">
    <div class="elementor-element elementor-element-a2545d6 e-con-full e-flex e-con e-parent" data-id="a2545d6" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div class="elementor-element elementor-element-128d785 e-flex e-con-boxed e-con e-child" data-id="128d785" data-element_type="container">
                    <div class="e-con-inner">
        <div class="elementor-element elementor-element-ab5180f e-con-full e-flex e-con e-child" data-id="ab5180f" data-element_type="container">
                <div class="elementor-element elementor-element-762e6d9 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="762e6d9" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div class="elementor-widget-container">
                    <h3 class="elementor-heading-title elementor-size-default">Our Pricing</h3>				</div>
                </div>
                <div class="elementor-element elementor-element-8e04e0a at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="8e04e0a" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">Explore our different price range</h2>				</div>
                </div>
                <div class="elementor-element elementor-element-c61dc47 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="c61dc47" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                                    <p> Our pricing showcases a range of metric tons foreign tanks with locally assembled dispenser and LPG materials — from LPG 1.5 Metric Tons to 10 Tons  .</p>								</div>
                </div>
                </div>
                    </div>
                </div>
        <div class="elementor-element elementor-element-cf3dc23 e-con-full e-flex e-con e-child" data-id="cf3dc23" data-element_type="container">
                <div class="elementor-element elementor-element-f5e48a0 elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 awaiken-portfolio-gutter-30  elementor-widget elementor-widget-builtup-portfolio-grid" data-id="f5e48a0" data-element_type="widget" data-settings="{&quot;columns&quot;:&quot;4&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;grid_layout&quot;:&quot;grid&quot;,&quot;aspect_ratio&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;columns_tablet&quot;:&quot;2&quot;,&quot;columns_mobile&quot;:&quot;1&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="builtup-portfolio-grid.default">
                <div class="elementor-widget-container">
                            <div id="awaiken-portfolio-f5e48a0">
                <div class="awaiken-portfolio-grid elementor-grid awaiken-portfolio-layout-grid awaiken-portfolio-item-design-1">
                <article class="awaiken-portfolio-grid-item  post-4672 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/aspen-heights/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={t5} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/aspen-heights/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">1.5 Tons</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>6,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" >view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4670 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" >
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={two} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" >
                <h4 class="awaiken-portfolio-grid-item__title">2.5 Tons</h4>
                    <p class="awaiken-portfolio-grid-item__title" style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N8,700,000</p>
                
            </a>
                
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/forest-hill-towers/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4668 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/bayside-residences/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={t3} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/bayside-residences/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">3.5 Tons</h4>
            
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N10,700,0000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/bayside-residences/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4666 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={t1} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">Twin 2.5 Tons</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N15,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/parkview-plaza/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4666 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={fours} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">Twin 3.5 Tons</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N18,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/parkview-plaza/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4666 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={teen} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">5 Tons</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N17,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/parkview-plaza/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4666 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={t6} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">10 Tons</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N38,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/parkview-plaza/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
                <article class="awaiken-portfolio-grid-item  post-4666 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry">
        <div class="awaiken-portfolio-grid-item__wrapper">
                <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
            <div class="awaiken-portfolio-grid-item__img">
                <img loading="lazy" decoding="async" width="1200" height="800" src={pump} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">Pumps</h4>
            </a>
                    <div class="awaiken-portfolio-grid-item__excerpt">
                <p  style={{color: "white", fontWeight: "900", fontSize: "20px"}}>N7,000,000</p>
            </div>
        </div>

        <div class="awaiken-portfolio-grid-item__readmore">
            <a class="awaiken-portfolio-grid-item__link btn-default" href="projects/parkview-plaza/index.html">view more</a>
        </div>
                </div>
                </div>
        </article>
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

export default Pricing;
