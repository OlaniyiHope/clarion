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
import con from "./img/con.png"
import cus from "./img/cus.png"
import two from "./img/2.JPG"
import sa from "./img/sb.png"
import cy from "./img/5.JPG"
import promoImg from "./img/new3.png"; // ✅ path to your image
import { gsap } from "gsap"; 
import mod from "./img/new2.png"
import ta from "./img/new1.png"
import "./instagram.css";
import "./whatsapp.css"

const Services = () => {
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


<div data-elementor-type="wp-page" data-elementor-id="5534" class="elementor elementor-5534">
				<div class="elementor-element elementor-element-4ff380e e-con-full e-flex e-con e-parent" data-id="4ff380e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div class="elementor-element elementor-element-adbec9c e-con-full e-flex e-con e-child" data-id="adbec9c" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div class="elementor-element elementor-element-073d81c e-flex e-con-boxed e-con e-child" data-id="073d81c" data-element_type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-a4aee21 at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="a4aee21" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h1 class="elementor-heading-title elementor-size-default">Our Services</h1>				</div>
				</div>
				<div class="elementor-element elementor-element-ee2e9fe  elementor-widget elementor-widget-elementskit-breadcrumb" data-id="ee2e9fe" data-element_type="widget" data-settings="{&quot;_animation_mobile&quot;:&quot;fadeInUp&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-breadcrumb.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con" ><ol class="ekit-breadcrumb"><li class="ekit_breadcrumbs_start"><a href="https://demo.awaikenthemes.com/builtup">Home</a></li> <li class="brd_sep"><span class="separate_icon"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12"><path d="M0.283883 11.68L4.95988 0.129999H6.70988L2.03388 11.68H0.283883Z" fill="white"></path></svg></span></li> <li><a href="../index.html" title="Services">Services</a></li> <li class="brd_sep"><span class="separate_icon"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12"><path d="M0.283883 11.68L4.95988 0.129999H6.70988L2.03388 11.68H0.283883Z" fill="white"></path></svg></span></li>  <li></li></ol></div>				</div>
				</div>
					</div>
				</div>
				</div>
				</div>
		
	
		<div class="elementor-element elementor-element-55a8107 e-flex e-con-boxed e-con e-parent" data-id="55a8107" data-element_type="container">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-7f03635 e-con-full e-flex e-con e-child" data-id="7f03635" data-element_type="container">
				<div class="elementor-element elementor-element-ba580bc at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="ba580bc" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Our Services</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-41fa485 at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="41fa485" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">...Excellent Energy Solutions</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-e7d31aa elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="e7d31aa" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>We provide end-to-end services across the gas and petroleum industry — from the design, construction, and installation of LPG storage and skid plants to the bulk supply and distribution of LPG, CNG, LNG, PMS, and AGO.</p>								</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-730041b e-con-full e-flex e-con e-child" data-id="730041b" data-element_type="container">
		<div class="elementor-element elementor-element-e44b114 e-con-full e-flex e-con e-child" data-id="e44b114" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
				<div class="elementor-element elementor-element-11848e7 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="11848e7" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">01.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-66368c3 elementor-widget elementor-widget-image-box" data-id="66368c3" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Skid Plant Setup</h3><p class="elementor-image-box-description">   Design, construction and installation of gas plants/skid plants    </p></div></div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-e0a06a6 e-con-full e-flex e-con e-child" data-id="e0a06a6" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
				<div class="elementor-element elementor-element-996cf5b at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="996cf5b" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">02.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-4c9bb12 elementor-widget elementor-widget-image-box" data-id="4c9bb12" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Central Gas System</h3><p class="elementor-image-box-description">   Gas piping and reticulation for estates, hostels, hospitals, restuarants and industries </p></div></div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-b55975e e-con-full e-flex e-con e-child" data-id="b55975e" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
				<div class="elementor-element elementor-element-159aa51 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="159aa51" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">03.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-6a72015 elementor-widget elementor-widget-image-box" data-id="6a72015" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Procurement and Supply</h3><p class="elementor-image-box-description">                LPG equipment, cylinders, pumps, valves, meters and safety tools.</p></div></div>				</div>
				</div>
				</div>
                	<div class="elementor-element elementor-element-b55975e e-con-full e-flex e-con e-child" data-id="b55975e" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
				<div class="elementor-element elementor-element-159aa51 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="159aa51" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">04.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-6a72015 elementor-widget elementor-widget-image-box" data-id="6a72015" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">  Fuel and Storage Facilities</h3><p class="elementor-image-box-description">                 Filling Stations, tank farms, storage tanks and dispensing systems   </p></div></div>				</div>
				</div>
				</div>
                	<div class="elementor-element elementor-element-b55975e e-con-full e-flex e-con e-child" data-id="b55975e" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
				<div class="elementor-element elementor-element-159aa51 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="159aa51" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">05.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-6a72015 elementor-widget elementor-widget-image-box" data-id="6a72015" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">  Maintenance and Repair</h3><p class="elementor-image-box-description">                Servicing, Leak Detection, Safety Audit and Upgrade  </p></div></div>				</div>
				</div>
				</div>
                	<div class="elementor-element elementor-element-b55975e e-con-full e-flex e-con e-child" data-id="b55975e" data-element_type="container" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
				<div class="elementor-element elementor-element-159aa51 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="159aa51" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">06.</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-6a72015 elementor-widget elementor-widget-image-box" data-id="6a72015" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">  Consultancy and Training</h3><p class="elementor-image-box-description">           Licensing Support, Feasibility Studies, Operator training and Safety Maintenance </p></div></div>				</div>
				</div>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-8a28620 e-flex e-con-boxed e-con e-parent" data-id="8a28620" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-108c75e e-con-full e-flex e-con e-child" data-id="108c75e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-1f344b0 at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="1f344b0" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Let’s Secure Your Future and Earn While You Sleep!
</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-7c155ee elementor-widget elementor-widget-text-editor" data-id="7c155ee" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:100,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Invest in a profitable future with our expert gas plant construction and installation services.</p>								</div>
				</div>
				<div class="elementor-element elementor-element-f3df212 btn-transparent elementor-widget elementor-widget-button" data-id="f3df212" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="/contact">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>			</span>
									<span class="elementor-button-text">Get Started Today</span>
					</span>
					</a>
				</div>
								</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-37eb797 e-con-full e-flex e-con e-child" data-id="37eb797" data-element_type="container">
				<div class="elementor-element elementor-element-adbd00d at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="adbd00d" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="283" height="255" src={con} class="attachment-large size-large wp-image-1251" alt="" />															</div>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-9d2f21b e-flex e-con-boxed e-con e-parent" data-id="9d2f21b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-6e8e7c1 e-con-full e-flex e-con e-child" data-id="6e8e7c1" data-element_type="container">
		<div class="elementor-element elementor-element-0a2771f e-con-full e-flex e-con e-child" data-id="0a2771f" data-element_type="container">
		<div class="elementor-element elementor-element-954dfbe e-con-full contact-sidebar e-flex  e-con e-child" data-id="954dfbe" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
				<div class="elementor-element elementor-element-1a6c4b0 contact-info ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="1a6c4b0" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con" >     
         

        <div class="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                    <div class="elementskit-box-header elementor-animation-">
                <div class="elementskit-info-box-icon  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"><g clip-path="url(#clip0_389_16083)"><path d="M68.5417 32.0833C67.7367 32.0833 67.0833 31.43 67.0833 30.625C67.0833 15.3475 54.6525 2.91667 39.375 2.91667C38.57 2.91667 37.9167 2.26333 37.9167 1.45833C37.9167 0.653333 38.57 0 39.375 0C56.2625 0 70 13.7375 70 30.625C70 31.43 69.3467 32.0833 68.5417 32.0833ZM58.3333 30.625C58.3333 20.1717 49.8283 11.6667 39.375 11.6667C38.57 11.6667 37.9167 12.32 37.9167 13.125C37.9167 13.93 38.57 14.5833 39.375 14.5833C48.2213 14.5833 55.4167 21.7788 55.4167 30.625C55.4167 31.43 56.07 32.0833 56.875 32.0833C57.68 32.0833 58.3333 31.43 58.3333 30.625ZM64.8492 64.9571L67.7017 61.6758C69.1833 60.1942 70 58.2225 70 56.1283C70 54.0342 69.1833 52.0596 67.5588 50.4554L60.4246 44.9925C57.3679 41.9358 52.395 41.9329 49.3325 44.9838L44.8642 49.3413C34.1308 44.9692 25.3867 36.2163 20.6733 25.1242L25.0133 20.6763C28.0729 17.6167 28.0729 12.6379 25.1388 9.72125L19.425 2.30417C16.4587 -0.662083 11.2204 -0.592083 8.4 2.23708L4.97583 5.22375C1.76458 8.4175 0 12.7546 0 17.43C0 40.0312 29.9688 70 52.57 70C57.2454 70 61.5796 68.2354 64.8492 64.9571ZM17.2346 4.2175L22.9483 11.6346C24.8704 13.5567 24.8704 16.6863 22.9367 18.6229L17.9142 23.7738C17.5117 24.1879 17.3892 24.8004 17.605 25.3371C22.6479 37.8933 32.5179 47.7604 44.6892 52.4037C45.22 52.6079 45.8208 52.4825 46.2262 52.0887L51.3771 47.0662C51.3771 47.0662 51.3858 47.0575 51.3887 47.0517C53.2525 45.185 56.3588 45.0654 58.5054 47.1771L65.6396 52.64C67.5617 54.5621 67.5617 57.6888 65.5725 59.6867L62.7171 62.9679C60.0688 65.6221 56.4638 67.0833 52.57 67.0833C31.6867 67.0833 2.91667 38.3133 2.91667 17.43C2.91667 13.5363 4.37792 9.93125 6.96208 7.35L10.3892 4.36042C11.3692 3.38042 12.6613 2.90208 13.9329 2.90208C15.155 2.90208 16.3567 3.34542 17.2375 4.22042L17.2346 4.2175Z" fill="#FFB703"></path></g><defs><clipPath id="clip0_389_16083"><rect width="70" height="70" fill="white"></rect></clipPath></defs></svg>
                </div>
          </div>
                        <div class="box-body">
                            <h3 class="elementskit-info-box-title">
                    Call Support Center 24/7                </h3>
                        		  	<p><a href="tel:+1 809 120 6705">+234 903 577 5544 </a></p>
                                </div>
        
        
                </div>
        </div>				</div>
				</div>
				<div class="elementor-element elementor-element-1fd9eb2 contact-info ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="1fd9eb2" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con" >       
        

        <div class="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                    <div class="elementskit-box-header elementor-animation-">
                <div class="elementskit-info-box-icon  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"><g clip-path="url(#clip0_392_16117)"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0304 0.224684C31.5221 0.548024 30.5569 1.07384 27.5532 3.20843C26.0006 4.31175 24.5101 5.36394 24.2409 5.5466L23.7516 5.87869L17.9942 5.88088C12.2749 5.8832 12.2334 5.88525 11.6928 6.19136C11.3878 6.36418 11.0135 6.73851 10.8407 7.04353C10.5413 7.57209 10.5324 7.69746 10.5302 11.4308L10.528 15.274L5.43522 18.8786C2.63413 20.861 0.267528 22.577 0.175926 22.6917C-0.0831556 23.016 -0.0614173 66.8527 0.198075 67.5801C0.505965 68.4431 1.06665 69.1205 1.81792 69.5369L2.52995 69.9314H35.0007H67.4714L68.1915 69.5325C68.9487 69.1129 69.6795 68.2029 69.8222 67.5018C69.8646 67.2934 69.9528 67.0899 70.0183 67.0494C70.0851 67.0081 70.1374 57.2555 70.1374 44.8274C70.1374 31.0635 70.0888 22.709 70.009 22.7583C69.9384 22.8019 69.8308 22.7561 69.7697 22.6564C69.7088 22.5569 67.3672 20.8531 64.5661 18.8704L59.4733 15.2654L59.4711 11.4266C59.4689 7.69773 59.46 7.57209 59.1606 7.04353C58.9878 6.73851 58.6135 6.36418 58.3085 6.19136C57.7679 5.88525 57.7266 5.8832 52.0029 5.88088L46.2414 5.87869L43.7314 4.10271C39.8144 1.33115 39.3074 1.0022 38.4602 0.683239C36.6343 -0.00390927 34.8139 -0.157718 33.0304 0.224684ZM33.9069 2.41834C33.266 2.52552 31.9256 3.01566 31.4424 3.31959C30.671 3.80466 28.1725 5.61892 28.0884 5.75468C28.043 5.82824 30.8892 5.87869 35.0838 5.87869C38.9733 5.87869 42.13 5.85695 42.0987 5.83056C41.3607 5.20658 38.3609 3.18 37.8235 2.94224C36.6547 2.42545 35.1048 2.21804 33.9069 2.41834ZM12.8522 19.8632V31.5237L21.0037 38.2861C25.4869 42.0055 29.532 45.3743 29.9929 45.7721C31.6871 47.2354 33.0389 47.7764 35.0007 47.7766C37.0862 47.7767 38.2306 47.2747 40.5011 45.364C40.9754 44.9649 44.9152 41.6909 49.2562 38.0885L57.1491 31.5386V19.8708V8.20291H35.0007H12.8522V19.8632ZM35.2741 12.7998C31.3113 13.2116 28.5228 14.4579 25.6522 17.1004C23.6329 18.9594 21.8714 21.7746 21.1679 24.2674C20.9151 25.163 20.8586 25.7078 20.8566 27.2752C20.8534 29.5764 21.0567 30.4915 22.0109 32.4705C23.7378 36.052 26.6585 38.1383 31.2682 39.0833C37.8571 40.4339 43.6384 39.2824 47.4434 35.8612C48.904 34.5482 49.299 33.5972 48.6383 32.9851C48.3445 32.7128 48.0537 32.6252 47.5573 32.6598C47.4328 32.6685 46.8442 33.1583 46.2493 33.7483C44.0126 35.9672 41.1751 37.0979 37.3932 37.2775C34.8054 37.4004 31.9809 37.0225 29.5319 36.2257C25.9157 35.0493 23.3488 31.6392 23.1411 27.7363C23.052 26.0591 23.334 24.7073 24.1217 23.0369C25.8595 19.3512 29.4243 16.3995 33.2917 15.4441C34.8065 15.0699 37.1563 15.0341 38.6792 15.3619C41.964 16.0692 44.6828 18.7386 45.4518 22.0115C45.721 23.1569 45.7243 25.4098 45.4584 26.4603C44.9725 28.3803 43.6202 30.327 42.3835 30.887C41.5323 31.2726 40.166 31.2784 39.7858 30.8982C39.4454 30.5578 39.4439 30.6039 39.8464 29.0089C40.2515 27.4037 41.6999 20.2461 41.6999 19.8493C41.6999 19.6934 41.554 19.3962 41.3759 19.1891C41.1289 18.9021 40.9292 18.8123 40.5378 18.8123C39.8792 18.8123 39.4292 19.3047 39.3 20.1669L39.2068 20.7884L38.5574 20.181C35.3147 17.1477 30.504 18.7747 28.0912 23.7205C27.3607 25.2177 27.0756 26.3716 27.073 27.8419C27.0671 31.0422 28.9787 33.2807 31.9736 33.5804C33.4299 33.7261 35.4777 33.0889 36.7899 32.0814L37.3779 31.6301L37.7967 32.1869C38.0407 32.5116 38.5287 32.9048 38.9665 33.1299C39.6695 33.4912 39.8048 33.5128 41.0846 33.4681C42.272 33.4266 42.5709 33.3644 43.3573 32.9949C44.4411 32.4857 45.2071 31.8205 46.017 30.6855C46.814 29.5688 47.3766 28.338 47.7311 26.9362C47.9824 25.9424 48.0122 25.5264 47.9511 23.8649C47.8765 21.8414 47.6593 20.827 46.9853 19.3545C45.8552 16.8861 43.4968 14.6388 40.9781 13.6305C39.5895 13.0746 36.6916 12.6526 35.2741 12.7998ZM6.81075 20.7471C4.80399 22.157 3.17362 23.3546 3.1877 23.4088C3.20192 23.4629 4.84391 24.8647 6.83659 26.524L10.4596 29.541L10.4966 26.6557C10.5169 25.0688 10.5169 22.5135 10.4966 20.9772L10.4596 18.1841L6.81075 20.7471ZM59.4733 23.8582C59.4733 29.3227 59.483 29.5395 59.7208 29.3679C60.3937 28.8822 66.8552 23.4671 66.8485 23.3943C66.8419 23.3206 60.1583 18.5618 59.6644 18.2791C59.502 18.1862 59.4733 19.0261 59.4733 23.8582ZM33.8 21.1112C32.0898 21.6677 30.2698 23.8582 29.5981 26.1686C29.2756 27.2783 29.3609 28.8339 29.793 29.7174C30.4173 30.9941 31.8593 31.5336 33.5138 31.1096C34.6597 30.8161 35.538 30.2302 36.4585 29.1451C37.6739 27.7124 37.8413 27.3871 38.1654 25.8264L38.4657 24.3812L38.0522 23.4975C37.309 21.9095 36.3379 21.1018 35.0255 20.98C34.6735 20.9474 34.122 21.0063 33.8 21.1112ZM0.0673717 44.9803C0.0673717 57.1995 0.0835045 62.1982 0.103192 56.0886C0.12288 49.979 0.12288 39.9814 0.103192 33.8719C0.0835045 27.7622 0.0673717 32.761 0.0673717 44.9803ZM2.32487 46.0695C2.32487 65.1036 2.33895 66.3304 2.55647 66.1542C5.76048 63.5583 26.5924 46.1659 26.5924 46.0869C26.5924 46.0253 21.2399 41.5288 14.6979 36.0946C8.15593 30.6605 2.69565 26.1204 2.56413 26.0057C2.33636 25.8074 2.32487 26.7742 2.32487 46.0695ZM55.4811 35.9386C48.8112 41.4755 43.3663 46.0475 43.3815 46.0987C43.3965 46.1499 48.8537 50.7151 55.5085 56.2434L67.6081 66.295L67.6431 56.1845C67.6624 50.6237 67.6624 41.5285 67.6431 35.9728L67.6081 25.8716L55.4811 35.9386ZM16.4904 57.6114L4.47436 67.6072L19.7375 67.6419C28.1322 67.6611 41.8719 67.6611 50.2701 67.6419L65.5395 67.6072L54.2691 58.2505C48.0704 53.1044 42.6591 48.604 42.2441 48.2496L41.4896 47.6055L40.6719 48.2273C38.6728 49.7475 36.0066 50.4345 33.6298 50.0417C31.915 49.7584 30.5997 49.1669 28.9243 47.9253L28.5065 47.6158L16.4904 57.6114Z" fill="#FFB703"></path></g><defs><clipPath id="clip0_392_16117"><rect width="70" height="70" fill="white"></rect></clipPath></defs></svg>
                </div>
          </div>
                        <div class="box-body">
                            <h3 class="elementskit-info-box-title">
                    Write To Us                </h3>
                        		  	<p><a href="mailto:info@domain.com">clarionglobalenergylimited@gmail.com</a></p>
                                </div>
        
        
                </div>
        </div>				</div>
				</div>
				<div class="elementor-element elementor-element-7dd5f0f at-image-animation at-animation-image-none elementor-widget elementor-widget-image" data-id="7dd5f0f" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="301" height="420" src={cus} class="attachment-full size-full wp-image-1857" alt="" />															</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-2f1fa89 e-con-full e-flex  e-con e-child" data-id="2f1fa89" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
				<div class="elementor-element elementor-element-f04bd54 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="f04bd54" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h3 class="elementor-heading-title elementor-size-default">Contact us</h3>				</div>
				</div>
				<div class="elementor-element elementor-element-81de5cb at-heading-animation at-animation-heading-style-3 elementor-widget elementor-widget-heading" data-id="81de5cb" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Get in touch with us</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-3e99949 contact-form elementor-widget elementor-widget-elementskit-contact-form7" data-id="3e99949" data-element_type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-contact-form7.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con" ><div class="ekit-form">
<div class="wpcf7 no-js" id="wpcf7-f6-p5534-o1" lang="en-US" dir="ltr" data-wpcf7-id="6">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="https://demo.awaikenthemes.com/builtup/services/building-construction/#wpcf7-f6-p5534-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<fieldset class="hidden-fields-container"><input type="hidden" name="_wpcf7" value="6" /><input type="hidden" name="_wpcf7_version" value="6.1.2" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f6-p5534-o1" /><input type="hidden" name="_wpcf7_container_post" value="5534" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</fieldset>
<div class="row">
	<div class="form-group col-md-6 mb-4">
		<p><span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="your-name" aria-required="true" aria-invalid="false" placeholder="Enter Your name" value="" type="text" name="your-name" /></span>
		</p>
	</div>
	<div class="form-group col-md-6 mb-4">
		<p><span class="wpcf7-form-control-wrap" data-name="email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" id="email" aria-required="true" aria-invalid="false" placeholder="Enter Your email" value="" type="email" name="email" /></span>
		</p>
	</div>
	<div class="form-group col-md-6 mb-4">
		<p><span class="wpcf7-form-control-wrap" data-name="phone"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="phone" aria-required="true" aria-invalid="false" placeholder="Phone number" value="" type="text" name="phone" /></span>
		</p>
	</div>
	<div class="form-group col-md-6 mb-4">
		<p><span class="wpcf7-form-control-wrap" data-name="Subject"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="subject" aria-required="true" aria-invalid="false" placeholder="Subject" value="" type="text" name="Subject" /></span>
		</p>
	</div>
	<div class="form-group col-md-12 mb-4">
		<p><span class="wpcf7-form-control-wrap" data-name="message"><textarea cols="40" rows="10" maxlength="2000" class="wpcf7-form-control wpcf7-textarea form-control" id="msg" aria-invalid="false" placeholder="Message" name="message"></textarea></span>
		</p>
	</div>
	<div class="col-md-12 form-btn">
		<p><input class="wpcf7-form-control wpcf7-submit has-spinner btn-default" id="msgSubmit" type="submit" value="Submit" />
		</p>
	</div>
</div><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div></div>				</div>
				</div>
				</div>
				</div>
					</div>
				</div>
				</div>

           <Footer />
    </div>
  );
};

export default Services;
