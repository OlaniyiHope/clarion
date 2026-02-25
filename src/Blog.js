import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ta from "./img/c9.png";
import mod from "./img/c10.png";
import promoImg from "./img/c1.png";
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap";
import "./instagram.css";
import "./whatsapp.css";

// Blog post data
export const blogPosts = [
  {
    id: 1,
    slug: "lpg-skid-plant-investment-guide",
    title: "LPG Skid Plant Investment: What You Need to Know Before You Start",
    excerpt:
      "Investing in an LPG skid plant is one of the most profitable ventures in Nigeria's energy sector today. But before you commit your funds, here's what every savvy investor must understand.",
    date: "February 10, 2025",
    category: "Investment",
    readTime: "5 min read",
    image: null, // will use gradient placeholder
    color: "#fa5a04",
  },
  {
    id: 2,
    slug: "centralized-gas-systems-estates",
    title: "Why Estates & Developers Are Switching to Centralized Gas Systems",
    excerpt:
      "Gone are the days of managing dozens of gas cylinders across a housing estate. Centralized Gas Systems (CGS) are revolutionizing how residential and commercial properties handle cooking gas.",
    date: "January 25, 2025",
    category: "Technology",
    readTime: "4 min read",
    image: null,
    color: "#1a1a2e",
  },
  {
    id: 3,
    slug: "lpg-vs-petrol-autogas",
    title: "LPG Autogas vs Petrol: The Cost Breakdown Nigerian Fleet Owners Must See",
    excerpt:
      "With fuel prices continuing to rise, fleet operators and logistics companies across Nigeria are turning to LPG autogas as a more affordable and cleaner alternative to petrol and diesel.",
    date: "January 12, 2025",
    category: "Energy Solutions",
    readTime: "6 min read",
    image: null,
    color: "#0d2137",
  },
  {
    id: 4,
    slug: "safety-standards-lpg-plants",
    title: "Safety Standards Every LPG Plant Operator Must Follow in Nigeria",
    excerpt:
      "Operating an LPG plant without adhering to DPR and NUPRC safety standards isn't just illegal — it's life-threatening. Here's your complete guide to staying compliant and keeping your plant safe.",
    date: "December 20, 2024",
    category: "Safety",
    readTime: "7 min read",
    image: null,
    color: "#2c1810",
  },
  {
    id: 5,
    slug: "cng-lng-difference-nigeria",
    title: "CNG vs LNG vs LPG: What's the Difference and Which Is Right for Your Business?",
    excerpt:
      "These three acronyms often confuse business owners and investors alike. Understanding the differences between Compressed Natural Gas, Liquefied Natural Gas, and Liquefied Petroleum Gas is essential for making the right energy investment.",
    date: "December 5, 2024",
    category: "Education",
    readTime: "5 min read",
    image: null,
    color: "#1c3a1c",
  },
  {
    id: 6,
    slug: "tank-farm-construction-process",
    title: "From Ground to Gas: How We Build a Tank Farm from Scratch",
    excerpt:
      "Have you ever wondered what goes into constructing a petroleum tank farm? From site assessment and regulatory approval to final commissioning, here's a behind-the-scenes look at our construction process.",
    date: "November 18, 2024",
    category: "Construction",
    readTime: "8 min read",
    image: null,
    color: "#1a0a2e",
  },
];

const categoryColors = {
  Investment: "#fa5a04",
  Technology: "#0077b6",
  "Energy Solutions": "#023e8a",
  Safety: "#d62828",
  Education: "#2d6a4f",
  Construction: "#6d23b6",
};

const BlogCard = ({ post, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out" }
      );
    }
  }, [index]);

  return (
    <div className="col-lg-4 col-md-6 mb-4" ref={cardRef}>
      <div className="blog-card-custom">
        {/* Image / Color Placeholder */}
        <div
          className="blog-card-img"
          style={{ background: `linear-gradient(135deg, ${post.color} 0%, #0a0a0a 100%)` }}
        >
          <div className="blog-card-category-badge" style={{ backgroundColor: categoryColors[post.category] || "#fa5a04" }}>
            {post.category}
          </div>
          <div className="blog-card-overlay-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" opacity="0.15">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-card-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#fa5a04" strokeWidth="2" />
                <path d="M16 2V6M8 2V6M3 10H21" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {post.date}
            </span>
            <span className="blog-card-readtime">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
                <circle cx="12" cy="12" r="9" stroke="#fa5a04" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {post.readTime}
            </span>
          </div>

          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>

          <Link to="/single-blog" className="blog-readmore-btn">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [currentModal, setCurrentModal] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const headingRef = useRef(null);

  const categories = ["All", "Investment", "Technology", "Energy Solutions", "Safety", "Education", "Construction"];

  useEffect(() => {
    if (currentModal) {
      gsap.fromTo(
        ".modal-box",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentModal]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    }
  }, []);

  const handleClose = () => {
    if (currentModal === 1) setCurrentModal(2);
    else if (currentModal === 2) setCurrentModal(3);
    else setCurrentModal(null);
  };

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* WhatsApp & Instagram */}
      <a className="header-whatsapp" href="https://wa.me/2349035775544" aria-label="Chat with us on WhatsApp">
        <svg className="whatsapp-icon svg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z" />
        </svg>
      </a>
      <a className="header-instagram" href="https://www.instagram.com/clarion_global_energy" aria-label="Visit our Instagram profile">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800" style={{ enableBackground: "new 0 0 800 800" }} className="instagram-icon svg-primary" xmlSpace="preserve">
          <g id="_x31_3"><g><g>
            <linearGradient id="SVGID_blog_" gradientUnits="userSpaceOnUse" x1="582.4734" y1="565.3093" x2="209.6897" y2="227.5917">
              <stop offset="0" style={{ stopColor: "#FEC053" }} />
              <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
              <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
              <stop offset="1" style={{ stopColor: "#5342D6" }} />
            </linearGradient>
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "url(#SVGID_blog_)" }} d="M218.459,127.608h363.085c49.938,0,90.848,40.904,90.848,90.848v363.088c0,49.942-40.909,90.848-90.848,90.848H218.459c-49.947,0-90.851-40.906-90.851-90.848V218.456C127.608,168.512,168.512,127.608,218.459,127.608L218.459,127.608z" />
          </g>
          <g>
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }} d="M526.769,400.003c0-70.027-56.743-126.77-126.769-126.77c-70.027,0-126.767,56.743-126.767,126.77c0,70.023,56.74,126.767,126.767,126.767C470.026,526.769,526.769,470.026,526.769,400.003L526.769,400.003z M524.369,256.005c-11.316,0-20.399,9.172-20.399,20.399c0,11.316,9.083,20.402,20.399,20.402c11.229,0,20.398-9.086,20.398-20.402C544.768,265.177,535.599,256.005,524.369,256.005L524.369,256.005z M296.376,226.693h207.25c38.401,0,69.684,31.37,69.684,69.681v207.249c0,38.401-31.282,69.69-69.684,69.69h-207.25c-38.314,0-69.686-31.288-69.686-69.69V296.374C226.69,258.063,258.063,226.693,296.376,226.693L296.376,226.693z M503.626,203.463h-207.25c-51.087,0-92.913,41.826-92.913,92.91v207.249c0,51.174,41.826,92.916,92.913,92.916h207.25c51.171,0,92.91-41.742,92.91-92.916V296.374C596.536,245.289,554.797,203.463,503.626,203.463L503.626,203.463z M299.545,400.003c0-55.459,44.999-100.458,100.455-100.458s100.455,44.999,100.455,100.458c0,55.456-44.999,100.449-100.455,100.449S299.545,455.459,299.545,400.003L299.545,400.003z" />
          </g></g></g>
          <g id="Layer_1" />
        </svg>
      </a>

      <Header />

      {/* Modals */}
      {currentModal === 1 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>&times;</button>
            <img src={promoImg} alt="Promo Ad 1" />
          </div>
        </div>
      )}
      {currentModal === 2 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>&times;</button>
            <img src={mod} alt="Promo Ad 2" />
          </div>
        </div>
      )}
      {currentModal === 3 && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn3" onClick={handleClose}>&times;</button>
            <img src={ta} alt="Promo Ad 3" />
          </div>
        </div>
      )}

      <main id="content" className="site-main">
        {/* Page Header */}
        <div className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-box">
                  <h1 className="entry-title" ref={headingRef}>News & Blog</h1>
                  <div role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ol className="trail-items">
                      <li className="trail-item trail-begin"><Link to="/" rel="home"><span>Home</span></Link></li>
                      <li className="trail-item trail-end"><span>Blog</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="page-content blog-page-content">
          <div className="container">

            {/* Section Heading */}
            <div className="row mb-4">
              <div className="col-md-12 text-center blog-section-header">
                <h3 className="elementor-heading-title elementor-size-default" style={{ color: "#fa5a04" }}>Our Blog</h3>
                <h2 style={{ color: "#fff", fontSize: "2rem", fontWeight: 700, marginBottom: "10px" }}>
                  Insights, Updates & Energy Industry News
                </h2>
                <p style={{ color: "#aaa", maxWidth: 600, margin: "0 auto 30px" }}>
                  Stay informed with the latest developments in the LPG, CNG, and petroleum industry. Expert insights from our team at Clarion Global Energy.
                </p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="blog-category-filter">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`blog-cat-btn ${activeCategory === cat ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Cards */}
            <div className="row">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

          </div>
        </div>

        {/* CTA Banner */}
        <div className="blog-cta-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2>Ready to Start Your Energy Project?</h2>
                <p>Get expert consultation from our team on LPG plant setup, gas supply, and more.</p>
              </div>
              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Link to="/contact" className="elementor-button elementor-button-link elementor-size-sm" style={{ backgroundColor: "#fa5a04" }}>
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Get A Free Quote</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Blog-specific styles */}
      <style>{`
        .blog-page-content {
          background: #0a0a0a;
          padding: 60px 0 80px;
        }

        .blog-section-header {
          padding: 20px 0 10px;
        }

        .blog-category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .blog-cat-btn {
          padding: 8px 20px;
          border: 1.5px solid #333;
          background: transparent;
          color: #aaa;
          border-radius: 30px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .blog-cat-btn:hover,
        .blog-cat-btn.active {
          background: #fa5a04;
          border-color: #fa5a04;
          color: #fff;
        }

        .blog-card-custom {
          background: #111;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #222;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card-custom:hover {
          transform: translateY(-6px);
          border-color: #fa5a04;
          box-shadow: 0 12px 40px rgba(250, 90, 4, 0.15);
        }

        .blog-card-img {
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .blog-card-overlay-icon {
          position: absolute;
          right: 20px;
          bottom: 20px;
        }

        .blog-card-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 5px 12px;
          border-radius: 20px;
        }

        .blog-card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-card-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .blog-card-date,
        .blog-card-readtime {
          font-size: 0.78rem;
          color: #888;
          display: flex;
          align-items: center;
        }

        .blog-card-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .blog-card-excerpt {
          color: #999;
          font-size: 0.88rem;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }

        .blog-readmore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fa5a04;
          color: #fff !important;
          text-decoration: none !important;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          width: fit-content;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .blog-readmore-btn:hover {
          background: #e04e00;
          transform: translateX(3px);
        }

        .blog-cta-banner {
          background: linear-gradient(135deg, #1a0500 0%, #fa5a04 100%);
          padding: 60px 0;
        }

        .blog-cta-banner h2 {
          color: #fff;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .blog-cta-banner p {
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Blog;
