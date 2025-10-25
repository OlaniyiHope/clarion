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
import t1 from "./img/t1.JPG"
import t3 from "./img/t3.JPG"
import t5 from "./img/t5.JPG"
import cy from "./img/5.JPG"
import promoImg from "./img/ja.png"; // ✅ path to your image
import headerBg from "./page-header-bg.jpg";


const Pricing = () => {
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
                <img loading="lazy" decoding="async" width="1200" height="800" src={t1} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
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
                <img loading="lazy" decoding="async" width="1200" height="800" src={t1} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">5 Tons</h4>
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
                <img loading="lazy" decoding="async" width="1200" height="800" src={t1} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">10 Tons</h4>
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
                <img loading="lazy" decoding="async" width="1200" height="800" src={t1} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />			</div>
        </a>
                <div class="awaiken-portfolio-grid-item__content">
                <div class="awaiken-portfolio-grid-title__wrap">
            <a class="awaiken-portfolio-grid-item__link" href="projects/parkview-plaza/index.html">
                <h4 class="awaiken-portfolio-grid-item__title">Twin 5 Tons</h4>
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
