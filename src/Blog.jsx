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

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8002/api";
const POSTS_PER_PAGE = 6;

// ─── BlogCard ─────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.55, delay: index * 0.08, ease: "power2.out" }
      );
    }
  }, [index]);

  // Format date nicely if it's in YYYY-MM-DD format
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.includes("-") && dateStr.length === 10) {
      const d = new Date(dateStr + "T00:00:00");
      return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    return dateStr;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4" ref={cardRef}>
      <div className="blog-card-custom">
        {/* Banner: use image if available, otherwise gradient */}
        <div
          className="blog-card-img"
          style={
            post.image
              ? { backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { background: `linear-gradient(135deg, ${post.color || "#fa5a04"} 0%, #050505 100%)` }
          }
        >
          {/* Dark overlay when image is present */}
          {post.image && (
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.6))",
            }} />
          )}
          <div className="blog-card-tag-pill">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                stroke="#fa5a04" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="7" cy="7" r="1.2" fill="#fa5a04" />
            </svg>
            {post.categories && post.categories.length > 0 ? post.categories[0] : "Oil & Gas"}
          </div>
          {!post.image && (
            <div className="blog-card-bg-icon">
              <svg width="90" height="90" viewBox="0 0 70 70" fill="none" opacity="0.06">
                <circle cx="35" cy="35" r="28" stroke="white" strokeWidth="1.5" />
                <path d="M35 10V35L50 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="35" cy="35" r="4" fill="white" />
              </svg>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-card-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#fa5a04" strokeWidth="2" />
                <path d="M16 2V6M8 2V6M3 10H21" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {formatDate(post.date)}
            </span>
            <span className="blog-card-readtime">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
                <circle cx="12" cy="12" r="9" stroke="#fa5a04" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {post.readTime}
            </span>
          </div>

          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>

 <Link to={`/single-blog/${post.slug}`}className="blog-readmore-btn">
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Skeleton Card ────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="blog-card-custom" style={{ overflow: "hidden" }}>
      <div className="blog-card-img skeleton-box" style={{ background: "#1a1a1a" }} />
      <div className="blog-card-body">
        <div className="skeleton-box" style={{ height: 12, width: "60%", borderRadius: 6, marginBottom: 12 }} />
        <div className="skeleton-box" style={{ height: 16, width: "90%", borderRadius: 6, marginBottom: 8 }} />
        <div className="skeleton-box" style={{ height: 16, width: "70%", borderRadius: 6, marginBottom: 16 }} />
        <div className="skeleton-box" style={{ height: 12, width: "100%", borderRadius: 6, marginBottom: 6 }} />
        <div className="skeleton-box" style={{ height: 12, width: "80%", borderRadius: 6, marginBottom: 24 }} />
        <div className="skeleton-box" style={{ height: 36, width: 130, borderRadius: 6 }} />
      </div>
    </div>
  </div>
);

// ─── Pagination ───────────────────────────────────────────────────────────────
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="blog-pagination">
      <button className="page-btn page-nav" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Prev
      </button>
      {pages.map((page) => (
        <button key={page} className={`page-btn page-number ${currentPage === page ? "active" : ""}`} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className="page-btn page-nav" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

// ─── Blog Page ────────────────────────────────────────────────────────────────
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentModal, setCurrentModal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const headingRef = useRef(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/blog`);
        if (!res.ok) throw new Error(`Failed to fetch blogs (${res.status})`);
        const data = await res.json();
        // Sort by createdAt descending (newest first)
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogPosts(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  useEffect(() => {
    if (currentModal) {
      gsap.fromTo(".modal-box", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [currentModal]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const handleClose = () => {
    if (currentModal === 1) setCurrentModal(2);
    else if (currentModal === 2) setCurrentModal(3);
    else setCurrentModal(null);
  };

  return (
    <div>
      {/* WhatsApp */}
      <a className="header-whatsapp" href="https://wa.me/2349035775544" aria-label="Chat with us on WhatsApp">
        <svg className="whatsapp-icon svg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z" />
        </svg>
      </a>

      {/* Instagram */}
      <a className="header-instagram" href="https://www.instagram.com/clarion_global_energy" aria-label="Visit our Instagram profile">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 800 800" style={{ enableBackground: "new 0 0 800 800" }} className="instagram-icon svg-primary" xmlSpace="preserve">
          <g id="_x31_3"><g><g>
            <linearGradient id="SVGID_blog_" gradientUnits="userSpaceOnUse" x1="582.4734" y1="565.3093" x2="209.6897" y2="227.5917">
              <stop offset="0" style={{ stopColor: "#FEC053" }} />
              <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
              <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
              <stop offset="1" style={{ stopColor: "#5342D6" }} />
            </linearGradient>
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "url(#SVGID_blog_)" }}
              d="M218.459,127.608h363.085c49.938,0,90.848,40.904,90.848,90.848v363.088c0,49.942-40.909,90.848-90.848,90.848H218.459c-49.947,0-90.851-40.906-90.851-90.848V218.456C127.608,168.512,168.512,127.608,218.459,127.608L218.459,127.608z" />
          </g><g>
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }}
              d="M526.769,400.003c0-70.027-56.743-126.77-126.769-126.77c-70.027,0-126.767,56.743-126.767,126.77c0,70.023,56.74,126.767,126.767,126.767C470.026,526.769,526.769,470.026,526.769,400.003L526.769,400.003z M524.369,256.005c-11.316,0-20.399,9.172-20.399,20.399c0,11.316,9.083,20.402,20.399,20.402c11.229,0,20.398-9.086,20.398-20.402C544.768,265.177,535.599,256.005,524.369,256.005L524.369,256.005z M296.376,226.693h207.25c38.401,0,69.684,31.37,69.684,69.681v207.249c0,38.401-31.282,69.69-69.684,69.69h-207.25c-38.314,0-69.686-31.288-69.686-69.69V296.374C226.69,258.063,258.063,226.693,296.376,226.693L296.376,226.693z M503.626,203.463h-207.25c-51.087,0-92.913,41.826-92.913,92.91v207.249c0,51.174,41.826,92.916,92.913,92.916h207.25c51.171,0,92.91-41.742,92.91-92.916V296.374C596.536,245.289,554.797,203.463,503.626,203.463L503.626,203.463z M299.545,400.003c0-55.459,44.999-100.458,100.455-100.458s100.455,44.999,100.455,100.458c0,55.456-44.999,100.449-100.455,100.449S299.545,455.459,299.545,400.003L299.545,400.003z" />
          </g></g></g>
          <g id="Layer_1" />
        </svg>
      </a>

      <Header />

      {/* Modals */}
      {currentModal === 1 && (
        <div className="modal-overlay"><div className="modal-box">
          <button className="close-btn3" onClick={handleClose}>&times;</button>
          <img src={promoImg} alt="Promo Ad 1" />
        </div></div>
      )}
      {currentModal === 2 && (
        <div className="modal-overlay"><div className="modal-box">
          <button className="close-btn3" onClick={handleClose}>&times;</button>
          <img src={mod} alt="Promo Ad 2" />
        </div></div>
      )}
      {currentModal === 3 && (
        <div className="modal-overlay"><div className="modal-box">
          <button className="close-btn3" onClick={handleClose}>&times;</button>
          <img src={ta} alt="Promo Ad 3" />
        </div></div>
      )}

      <main id="content" className="site-main">

        {/* ── Page Header ── */}
        <div className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-box">
                  <h1 className="entry-title" ref={headingRef}>News &amp; Blog</h1>
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

        {/* ── Blog Content ── */}
        <div className="page-content blog-page-content">
          <div className="container">

            {/* Section Intro */}
            <div className="row">
              <div className="col-12 blog-intro-row">
                <div className="blog-intro-left">
                  <h3 className="elementor-heading-title elementor-size-default">Our Blog</h3>
                  <h2 className="blog-main-heading">Insights &amp; Industry Updates</h2>
                  <p className="blog-sub-text">
                    Expert knowledge on LPG, CNG, petroleum products, plant construction, and energy investment — straight from the Clarion Global Energy team.
                  </p>
                </div>
                <div className="blog-intro-right">
                  <div className="blog-post-count-badge">
                    <span className="count-num">{loading ? "—" : blogPosts.length}</span>
                    <span className="count-label">Articles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="blog-divider" />

            {/* ── Error State ── */}
            {error && (
              <div style={{
                textAlign: "center", padding: "40px 20px",
                background: "rgba(253,48,5,0.05)", border: "1px solid rgba(253,48,5,0.2)",
                borderRadius: 12, marginBottom: 30,
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 12 }}>
                  <circle cx="12" cy="12" r="9" stroke="#fd3005" strokeWidth="2" />
                  <path d="M12 8V12M12 16H12.01" stroke="#fd3005" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p style={{ color: "#fd3005", fontWeight: 600, margin: 0 }}>Failed to load blog posts</p>
                <p style={{ color: "#888", fontSize: "0.85rem", marginTop: 6 }}>{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    marginTop: 14, background: "#fa5a04", color: "#fff", border: "none",
                    borderRadius: 8, padding: "9px 20px", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem",
                  }}
                >
                  Try Again
                </button>
              </div>
            )}

            {/* ── Cards (loading skeletons or real posts) ── */}
            <div className="row">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                : currentPosts.map((post, index) => (
                    <BlogCard key={post._id} post={post} index={index} />
                  ))
              }
            </div>

            {/* ── Empty State ── */}
            {!loading && !error && blogPosts.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 16, opacity: 0.3 }}>
                  <path d="M9 12h6M9 16h6M7 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3M9 4a2 2 0 0 1 4 0h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p style={{ color: "#555", fontSize: "1rem" }}>No blog posts yet.</p>
                <Link to="/admin/upload-blog" style={{ color: "#fa5a04", fontWeight: 600, fontSize: "0.9rem" }}>
                  Publish your first article →
                </Link>
              </div>
            )}

            {/* Pagination */}
            {!loading && totalPages > 1 && (
              <div className="row">
                <div className="col-12">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
              </div>
            )}

            {/* Count Info */}
            {!loading && blogPosts.length > 0 && (
              <p className="blog-count-info">
                Showing {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, blogPosts.length)} of {blogPosts.length} articles
              </p>
            )}

          </div>
        </div>

        {/* ── CTA Banner ── */}
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

      {/* ── All Styles ── */}
 <style>{`
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .skeleton-box {
    background: linear-gradient(90deg, #1a1a1a 25%, #252525 50%, #1a1a1a 75%);
    background-size: 800px 100%;
    animation: shimmer 1.4s infinite linear;
  }

  .blog-page-content { padding: 60px 0 50px; }

  .blog-intro-row {
    display: flex; align-items: flex-end; justify-content: space-between;
    flex-wrap: wrap; gap: 20px; margin-bottom: 0;
  }
  .blog-intro-left h3.elementor-heading-title {
    font-size: 0.85rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 2.5px; color: #0084ce; margin-bottom: 8px;
  }
  .blog-main-heading { color: #fff; font-size: 2rem; font-weight: 800; margin-bottom: 10px; line-height: 1.2; }
  .blog-sub-text { color: #888; font-size: 0.9rem; line-height: 1.75; max-width: 540px; margin: 0; }

  .blog-post-count-badge {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    width: 76px; height: 76px; border-radius: 50%;
    border: 2px solid #0084ce; background: rgba(0, 132, 206, 0.07);
  }
  .count-num { color: #0084ce; font-size: 1.5rem; font-weight: 800; line-height: 1; }
  .count-label { color: #777; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 3px; }

  .blog-divider {
    height: 1px;
    background: linear-gradient(to right, #fa5a04, #0084ce, transparent);
    margin: 28px 0 36px;
  }

  .blog-card-custom {
    background: #111; border-radius: 12px; overflow: hidden;
    border: 1px solid #1e1e1e; height: 100%; display: flex; flex-direction: column;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .blog-card-custom:hover {
    transform: translateY(-7px);
    border-color: #0084ce;
    box-shadow: 0 16px 44px rgba(0, 132, 206, 0.18);
  }
  .blog-card-img {
    height: 185px; position: relative; display: flex;
    align-items: center; justify-content: center; overflow: hidden;
  }
  .blog-card-tag-pill {
    position: absolute; top: 14px; left: 14px;
    background: rgba(0,0,0,0.6); border: 1px solid rgba(0, 132, 206, 0.45);
    color: #0084ce; font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 1px; padding: 5px 11px; border-radius: 20px;
    display: flex; align-items: center; backdrop-filter: blur(4px); z-index: 1;
  }
  .blog-card-bg-icon { position: absolute; right: 10px; bottom: 6px; pointer-events: none; }
  .blog-card-body { padding: 22px; flex: 1; display: flex; flex-direction: column; }
  .blog-card-meta { display: flex; gap: 14px; margin-bottom: 11px; flex-wrap: wrap; }
  .blog-card-date, .blog-card-readtime {
    font-size: 0.75rem; color: #666; display: flex; align-items: center;
  }
  .blog-card-title { color: #f0f0f0; font-size: 1rem; font-weight: 700; line-height: 1.55; margin-bottom: 10px; }
  .blog-card-excerpt { color: #888; font-size: 0.84rem; line-height: 1.75; flex: 1; margin-bottom: 20px; }
  .blog-readmore-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff !important; text-decoration: none !important;
    padding: 9px 18px; border-radius: 6px; font-size: 0.82rem; font-weight: 600;
    width: fit-content; transition: background 0.25s ease, transform 0.2s ease; margin-top: auto;
  }
  .blog-readmore-btn:hover {
    background: linear-gradient(135deg, #fd3005, #d42800);
    transform: translateX(4px);
  }

  .blog-pagination {
    display: flex; align-items: center; justify-content: center;
    gap: 8px; margin-top: 50px; flex-wrap: wrap;
  }
  .page-btn {
    border: none; cursor: pointer; border-radius: 8px; font-size: 0.86rem;
    font-weight: 600; transition: all 0.22s ease; line-height: 1; font-family: inherit;
  }
  .page-number {
    width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;
    background: #1a1a1a; color: #999; border: 1px solid #2a2a2a;
  }
  .page-number:hover { background: #1a1a1a; color: #0084ce; border-color: #0084ce; }
  .page-number.active {
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff; border-color: #fa5a04;
    box-shadow: 0 4px 18px rgba(250, 90, 4, 0.4); transform: scale(1.1);
  }
  .page-nav {
    display: flex; align-items: center; gap: 6px; padding: 0 16px;
    height: 42px; background: #1a1a1a; color: #999; border: 1px solid #2a2a2a;
  }
  .page-nav:hover:not(:disabled) { background: #0084ce; color: #fff; border-color: #0084ce; }
  .page-nav:disabled { opacity: 0.3; cursor: not-allowed; }

  .blog-count-info {
    text-align: center; color: #4a4a4a; font-size: 0.78rem; margin-top: 16px; letter-spacing: 0.3px;
  }

  .blog-cta-banner {
    background: linear-gradient(135deg, #00026d 0%, #0084ce 100%);
    padding: 55px 0; margin-top: 10px;
  }
  .blog-cta-banner h2 { color: #fff; font-size: 1.7rem; font-weight: 800; margin-bottom: 8px; }
  .blog-cta-banner p { color: rgba(255,255,255,0.8); margin: 0; font-size: 0.95rem; }

  @media (max-width: 767px) {
    .blog-intro-row { flex-direction: column; align-items: flex-start; }
    .blog-main-heading { font-size: 1.5rem; }
    .blog-post-count-badge { display: none; }
    .blog-cta-banner h2 { font-size: 1.3rem; }
    .page-nav { padding: 0 12px; font-size: 0.8rem; }
  }
`}</style>

      <Footer />
    </div>
  );
};

export default Blog;
