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
import promoImg from "./img/ja.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap"; 
import mod from "./img/mod.png"
import ta from "./img/ta.png"


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

  // 🔹 Auto-show second modal after 2 minutes
  useEffect(() => {
    let timer;
    if (currentModal === null) {
      // When the first modal closes, start countdown for second
      timer = setTimeout(() => {
        setCurrentModal(2);
      }, 3000); // 120000ms = 2 minutes
    }
    return () => clearTimeout(timer);
  }, [currentModal]);

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
