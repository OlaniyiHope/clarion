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
import t1 from "./img/t1.JPG"
import t2 from "./img/t2.JPG"
import t3 from "./img/t3.JPG"
import t4 from "./img/t4.JPG"
import t5 from "./img/t5.JPG"
import fourtn from "./img/14.JPG"
import ninetn from "./img/19.JPG"
import fiftn from "./img/15.JPG"
import twentys from "./img/26.JPG"
import two from "./img/2.JPG"
import sa from "./img/sb.png"
import cy from "./img/5.JPG"
import promoImg from "./img/new3.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap"; 
import mod from "./img/new1.png"
import ta from "./img/new2.png"
import "./instagram.css";
import "./whatsapp.css"

const Help = () => {
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

  // 🔹 Close modal handler
  const handleClose = () => {
    if (currentModal === 1) {
      setCurrentModal(null); // close first, trigger timer for second
    } else {
      setCurrentModal(null); // close second too
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
                        <h1 class="entry-title">Help</h1>
                                                <div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs"><ol class="trail-items"><li class="trail-item trail-begin"><a href="../index.html" rel="home"><span>Home</span></a></li><li class="trail-item trail-end"><span><span>Help</span></span></li></ol></div>					</div>
                </div>
            </div>
        </div>
    </div>



    	<div data-elementor-type="wp-page" data-elementor-id="10" class="elementor elementor-10">

 <div class="elementor-element elementor-element-3207e83 e-flex e-con-boxed e-con e-parent" data-id="3207e83" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-83e4aef e-con-full e-flex e-con e-child" data-id="83e4aef" data-element_type="container">
				<div class="elementor-element elementor-element-9d835f3 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="9d835f3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Faqs</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-96f7ef1 at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="96f7ef1" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h1 class="elementor-heading-title elementor-size-default">Got questions? we've got answers</h1>				</div>
				</div>
				<div class="elementor-element elementor-element-1c43542 elementor-widget__width-initial  elementor-widget elementor-widget-text-editor" data-id="1c43542" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>								</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-ecb1ae8 e-con-full e-flex e-con e-child" data-id="ecb1ae8" data-element_type="container">
		<div class="elementor-element elementor-element-c5fdc0a e-con-full e-flex e-con e-child" data-id="c5fdc0a" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div class="elementor-element elementor-element-cf92a7a e-con-full e-flex e-con e-child" data-id="cf92a7a" data-element_type="container">
				<div class="elementor-element elementor-element-300c568 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="300c568" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="268" height="268" src={t1} class="attachment-large size-large wp-image-1835" alt="" />															</div>
				</div>
				<div class="elementor-element elementor-element-3f41a94 image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="3f41a94" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="203" height="197" src={t2} class="attachment-full size-full wp-image-1837" alt="" />															</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-d8cafeb e-con-full e-flex e-con e-child" data-id="d8cafeb" data-element_type="container">
				<div class="elementor-element elementor-element-2474a8b image-anime at-image-animation at-animation-image-style-1 elementor-widget elementor-widget-image" data-id="2474a8b" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="268" height="268" src={t3} class="attachment-full size-full wp-image-1832" alt="" />															</div>
				</div>
				<div class="elementor-element elementor-element-19fe1fc at-image-animation at-animation-image-style-1 image-anime elementor-widget elementor-widget-image" data-id="19fe1fc" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="203" height="197" src={t4} class="attachment-full size-full wp-image-1833" alt="" />															</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-28b912b elementor-view-stacked elementor-absolute our-faqs-bulitup elementor-shape-circle elementor-widget elementor-widget-icon" data-id="28b912b" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="icon.default">
				<div class="elementor-widget-container">
							<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="58" height="65" viewBox="0 0 58 65" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8747 26.2883V14.8521H24.3109V0.500244L46.6304 10.1268V18.8484L56.1312 23.9759V62.683H57.9122V64.8949H53.9194V25.2829L46.6304 21.3619V64.8949H37.8082V14.1232L44.4186 17.6671V11.5846L26.5479 3.86828V14.8521H33.1332V64.8949H24.3109V17.0639H15.0866V26.2883H21.6718V64.8949H12.8747V28.5001H6.33977V64.8949H0.25V62.683H4.12794V26.2883H12.8747ZM30.9213 62.683V17.0639H26.5479V62.683H30.9213ZM19.46 62.683V28.5001H15.0866V62.683H19.46ZM44.4186 20.1806L40.02 17.8179V62.683H44.4186V20.1806Z" fill="#fa5a04"></path></svg>			</div>
		</div>
						</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-0416ec5 e-con-full e-flex  e-con e-child" data-id="0416ec5" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
				<div class="elementor-element elementor-element-b8d919a faq-accordion elementor-widget elementor-widget-elementskit-accordion" data-id="b8d919a" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-accordion.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con" >
        <div class="elementskit-accordion accoedion-primary" id="accordion-68f020e1d8284">

            
                <div class="elementskit-card active">
                    <div class="elementskit-card-header" id="primaryHeading-0-b8d919a">
                        <a href="#collapse-d4f2ee468f020e1d8284" class="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-d4f2ee468f020e1d8284" aria-expanded="true" aria-controls="Collapse-d4f2ee468f020e1d8284">
                            
                            <span class="ekit-accordion-title">What is the process of setting up a skid gas plant? </span>

                            
                                <div class="ekit_accordion_icon_group">
                                    <div class="ekit_accordion_normal_icon">
                           
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>

                                    <div class="ekit_accordion_active_icon">
                          
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>
                                </div>

                            
                                                    </a>
                    </div>

                    <div id="Collapse-d4f2ee468f020e1d8284" class=" show collapse" aria-labelledby="primaryHeading-0-b8d919a" data-parent="#accordion-68f020e1d8284">

                        <div class="elementskit-card-body ekit-accordion--content">
                            <p>Setting up a skid gas plant begins with a detailed site assessment and design to determine the right capacity and layout for your needs. We handle everything — from engineering design, regulatory approvals, procurement, construction, and equipment installation, to testing and commissioning..</p>                        </div>

                    </div>

                </div>

                
                <div class="elementskit-card ">
                    <div class="elementskit-card-header" id="primaryHeading-1-b8d919a">
                        <a href="#collapse-738b5c168f020e1d8284" class="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-738b5c168f020e1d8284" aria-expanded="false" aria-controls="Collapse-738b5c168f020e1d8284">
                            
                            <span class="ekit-accordion-title">Can you help with the supply of LPG equipment and materials?</span>

                            
                                <div class="ekit_accordion_icon_group">
                                    <div class="ekit_accordion_normal_icon">
                  
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>

                                    <div class="ekit_accordion_active_icon">
                          
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>
                                </div>

                            
                                                    </a>
                    </div>

                    <div id="Collapse-738b5c168f020e1d8284" class=" collapse" aria-labelledby="primaryHeading-1-b8d919a" data-parent="#accordion-68f020e1d8284">

                        <div class="elementskit-card-body ekit-accordion--content">
                            <p>Absolutely. We supply a wide range of LPG and gas-related equipment, including cylinders, pumps, valves, meters, dispensers, and safety accessories. All our equipment is sourced from trusted manufacturers and meets international standards.</p>                        </div>

                    </div>

                </div>

                
                <div class="elementskit-card ">
                    <div class="elementskit-card-header" id="primaryHeading-2-b8d919a">
                        <a href="#collapse-724e9da68f020e1d8284" class="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-724e9da68f020e1d8284" aria-expanded="false" aria-controls="Collapse-724e9da68f020e1d8284">
                            
                            <span class="ekit-accordion-title">What kind of maintenance services do you offer for gas plants?</span>

                            
                                <div class="ekit_accordion_icon_group">
                                    <div class="ekit_accordion_normal_icon">
                              
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>

                                    <div class="ekit_accordion_active_icon">
                 
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>
                                </div>

                            
                                                    </a>
                    </div>

                    <div id="Collapse-724e9da68f020e1d8284" class=" collapse" aria-labelledby="primaryHeading-2-b8d919a" data-parent="#accordion-68f020e1d8284">

                        <div class="elementskit-card-body ekit-accordion--content">
                            <p>We offer comprehensive LPG plant maintenance services, including preventive inspections, leak detection, calibration, safety testing, and system upgrades..</p>                        </div>

                    </div>

                </div>

                
                <div class="elementskit-card ">
                    <div class="elementskit-card-header" id="primaryHeading-3-b8d919a">
                        <a href="#collapse-e5b1f7768f020e1d8284" class="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-e5b1f7768f020e1d8284" aria-expanded="false" aria-controls="Collapse-e5b1f7768f020e1d8284">
                            
                            <span class="ekit-accordion-title">Do you assist with government approvals and certifications?</span>

                            
                                <div class="ekit_accordion_icon_group">
                                    <div class="ekit_accordion_normal_icon">
                                      
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>

                                    <div class="ekit_accordion_active_icon">
                 
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>
                                </div>

                            
                                                    </a>
                    </div>

                    <div id="Collapse-e5b1f7768f020e1d8284" class=" collapse" aria-labelledby="primaryHeading-3-b8d919a" data-parent="#accordion-68f020e1d8284">

                        <div class="elementskit-card-body ekit-accordion--content">
                            <p>Yes, we assist clients through all regulatory and approval processes, including DPR licensing, fire service clearance, environmental impact assessments, and pressure vessel certifications.</p>                        </div>

                    </div>

                </div>
                
                {/* <div class="elementskit-card ">
                    <div class="elementskit-card-header" id="primaryHeading-3-b8d919a">
                        <a href="#collapse-e5b1f7768f020e1d8284" class="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-e5b1f7768f020e1d8284" aria-expanded="false" aria-controls="Collapse-e5b1f7768f020e1d8284">
                            
                            <span class="ekit-accordion-title">Do you provide training for staff or clients on gas handling?</span>

                            
                                <div class="ekit_accordion_icon_group">
                                    <div class="ekit_accordion_normal_icon">
                                      
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>

                                    <div class="ekit_accordion_active_icon">
                 
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_263_1413)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93794 22.4683L8.62581 21.7826L11.7662 24.9225C13.4935 26.6495 14.9277 28.0625 14.9534 28.0625C14.979 28.0625 15 21.7484 15 14.0312V0L16 0L17 0V14.0312C17 21.7484 17.021 28.0625 17.0466 28.0625C17.0723 28.0625 18.5065 26.6495 20.2337 24.9225L23.3742 21.7826L24.0621 22.4683C24.4404 22.8455 24.75 23.1828 24.75 23.2179C24.75 23.2529 22.795 25.2362 20.4055 27.6252L16.0611 31.9688L16.5149 32.0044C16.8031 32.027 16.5924 32.0398 15.9375 32.0396C15.2101 32.0393 15.0584 32.0288 15.4225 32.004L15.9388 31.9688L11.5944 27.6252C9.205 25.2362 7.25 23.2529 7.25 23.2179C7.25 23.1828 7.55956 22.8455 7.93794 22.4683ZM16 0.0254375C16.5672 0.0254375 16.7992 0.0349375 16.5156 0.0465C16.232 0.0580625 15.7679 0.0580625 15.4844 0.0465C15.2008 0.0349375 15.4328 0.0254375 16 0.0254375Z" fill="#fa5a04"></path></g><defs><clipPath id="clip0_263_1413"><rect width="32" height="32" fill="white" transform="matrix(0 1 1 0 0 0)"></rect></clipPath></defs></svg>                                    </div>
                                </div>

                            
                                                    </a>
                    </div>

                    <div id="Collapse-e5b1f7768f020e1d8284" class=" collapse" aria-labelledby="primaryHeading-3-b8d919a" data-parent="#accordion-68f020e1d8284">

                        <div class="elementskit-card-body ekit-accordion--content">
                            <p>Yes, we conduct LPG safety and handling training for operators, technicians, and facility managers</p>                        </div>

                    </div>

                </div> */}

                                        </div>
    </div>				</div>
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

export default Help;
