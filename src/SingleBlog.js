import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import ta from "./img/c9.png";
import mod from "./img/c10.png";
import promoImg from "./img/c1.png";
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap";
import "./instagram.css";
import "./whatsapp.css";
import { useParams } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8002/api";

// ── Parse content blocks safely ──────────────────────────────────────────────
const parseContent = (raw) => {
  if (!raw || !Array.isArray(raw)) return [];
  return raw.flatMap((item) => {
    if (typeof item === "object" && item !== null && !Array.isArray(item)) return [item];
    if (typeof item === "string") {
      try {
        const parsed = JSON.parse(item);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [{ type: "paragraph", text: item }];
      }
    }
    return [];
  });
};

// ── Format date ───────────────────────────────────────────────────────────────
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.includes("-") && dateStr.length === 10) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  return dateStr;
};

// ── Related Posts Card ────────────────────────────────────────────────────────
const RelatedCard = ({ post }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="blog-card-custom">
      <div
        className="blog-card-img"
        style={
          post.image
            ? { backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center", height: 150 }
            : { background: `linear-gradient(135deg, ${post.color || "#0084ce"} 0%, #0a0a0a 100%)`, height: 150 }
        }
      >
        {post.image && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }} />
        )}
        {post.categories && post.categories.length > 0 && (
          <div className="blog-card-category-badge">{post.categories[0]}</div>
        )}
      </div>
      <div className="blog-card-body">
        <p style={{ color: "#888", fontSize: "0.78rem", marginBottom: 8 }}>{formatDate(post.date)}</p>
        <h3 className="blog-card-title" style={{ fontSize: "0.95rem" }}>{post.title}</h3>
        <Link to="/single-blog" state={{ slug: post.slug }} className="blog-readmore-btn" style={{ marginTop: "auto" }}>
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

// ── Skeleton Loader ───────────────────────────────────────────────────────────
const Skeleton = ({ w = "100%", h = 16, mb = 12, radius = 6 }) => (
  <div className="skeleton-box" style={{ width: w, height: h, borderRadius: radius, marginBottom: mb }} />
);

// ── Main Component ────────────────────────────────────────────────────────────
const SingleBlog = () => {
  // const location = useLocation();
  // const slug = location.state?.slug;

const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentModal, setCurrentModal] = useState(1);
  const contentRef = useRef(null);

  // Fetch single post by slug
  useEffect(() => {
    if (!slug) { setError("No blog post specified."); setLoading(false); return; }
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/blog/find-by-slug/${slug}`);
        if (!res.ok) throw new Error(`Post not found (${res.status})`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch all for related posts
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${API_URL}/blog`);
        if (!res.ok) return;
        const all = await res.json();
        const others = all.filter(p => p.slug !== slug).slice(0, 3);
        setRelatedPosts(others);
      } catch {
        // silently fail for related posts
      }
    };

    fetchPost();
    fetchRelated();
  }, [slug]);

  // Animate content after load
  useEffect(() => {
    if (post && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );
    }
  }, [post]);

  useEffect(() => {
    if (currentModal) {
      gsap.fromTo(".modal-box", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [currentModal]);

  const handleClose = () => {
    if (currentModal === 1) setCurrentModal(2);
    else if (currentModal === 2) setCurrentModal(3);
    else setCurrentModal(null);
  };

  const contentBlocks = post ? parseContent(post.content) : [];

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
            <linearGradient id="SVGID_sb_" gradientUnits="userSpaceOnUse" x1="582.4734" y1="565.3093" x2="209.6897" y2="227.5917">
              <stop offset="0" style={{ stopColor: "#FEC053" }} />
              <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
              <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
              <stop offset="1" style={{ stopColor: "#5342D6" }} />
            </linearGradient>
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "url(#SVGID_sb_)" }}
              d="M218.459,127.608h363.085c49.938,0,90.848,40.904,90.848,90.848v363.088c0,49.942-40.909,90.848-90.848,90.848H218.459c-49.947,0-90.851-40.906-90.851-90.848V218.456C127.608,168.512,168.512,127.608,218.459,127.608L218.459,127.608z" />
            <path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }}
              d="M526.769,400.003c0-70.027-56.743-126.77-126.769-126.77c-70.027,0-126.767,56.743-126.767,126.77c0,70.023,56.74,126.767,126.767,126.767C470.026,526.769,526.769,470.026,526.769,400.003L526.769,400.003z M524.369,256.005c-11.316,0-20.399,9.172-20.399,20.399c0,11.316,9.083,20.402,20.399,20.402c11.229,0,20.398-9.086,20.398-20.402C544.768,265.177,535.599,256.005,524.369,256.005L524.369,256.005z M296.376,226.693h207.25c38.401,0,69.684,31.37,69.684,69.681v207.249c0,38.401-31.282,69.69-69.684,69.69h-207.25c-38.314,0-69.686-31.288-69.686-69.69V296.374C226.69,258.063,258.063,226.693,296.376,226.693L296.376,226.693z M503.626,203.463h-207.25c-51.087,0-92.913,41.826-92.913,92.91v207.249c0,51.174,41.826,92.916,92.913,92.916h207.25c51.171,0,92.91-41.742,92.91-92.916V296.374C596.536,245.289,554.797,203.463,503.626,203.463L503.626,203.463z M299.545,400.003c0-55.459,44.999-100.458,100.455-100.458s100.455,44.999,100.455,100.458c0,55.456-44.999,100.449-100.455,100.449S299.545,455.459,299.545,400.003L299.545,400.003z" />
          </g></g></g>
        </svg>
      </a>

      <Header />


      <main id="content" className="site-main">

        {/* Page Header */}
   {/* Page Header */}
<div className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-12">
        <div className="page-header-box">
          <h1 className="entry-title">
            {loading ? "Loading..." : post?.title || "Blog Article"}
          </h1>
          <div role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
            <ol className="trail-items">
              <li className="trail-item trail-begin">
                <Link to="/" rel="home"><span>Home</span></Link>
              </li>
              <li className="trail-item">
                <Link to="/blog"><span>Blog</span></Link>
              </li>
              <li className="trail-item trail-end">
                <span>{loading ? "..." : post?.title || "Article"}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="single-blog-page">
          <div className="container">

            {/* ── Error State ── */}
            {error && (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 16 }}>
                  <circle cx="12" cy="12" r="9" stroke="#fd3005" strokeWidth="2" />
                  <path d="M12 8V12M12 16H12.01" stroke="#fd3005" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p style={{ color: "#fd3005", fontWeight: 700, fontSize: "1.1rem" }}>{error}</p>
                <Link to="/blog" style={{
                  display: "inline-block", marginTop: 16,
                  background: "linear-gradient(135deg, #fa5a04, #fd3005)",
                  color: "#fff", padding: "10px 24px", borderRadius: 8,
                  fontWeight: 600, textDecoration: "none",
                }}>Back to Blog</Link>
              </div>
            )}

            {!error && (
              <div className="row">
                {/* ── Main Content ── */}
                <div className="col-lg-8">

                  {/* Hero Banner */}
                  {loading ? (
                    <div className="single-post-hero-skeleton">
                      <Skeleton w="120px" h={28} mb={16} radius={20} />
                      <Skeleton w="90%" h={32} mb={10} />
                      <Skeleton w="60%" h={32} mb={24} />
                      <Skeleton w="50%" h={16} mb={0} />
                    </div>
                  ) : (
                    <div
                      className="single-post-hero"
                      style={
                        post.image
                          ? { backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }
                          : { background: `linear-gradient(135deg, ${post.color || "#0084ce"} 0%, #0a0a0a 100%)` }
                      }
                    >
                      <div className="hero-overlay" />
                      <div className="hero-content">
                        {post.categories && post.categories.length > 0 && (
                          <span className="single-post-category">{post.categories[0]}</span>
                        )}
                        <h1 className="single-post-title">{post.title}</h1>
                        <div className="single-post-meta">
                          <span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0084ce" strokeWidth="2" />
                              <path d="M16 2V6M8 2V6M3 10H21" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {formatDate(post.date)}
                          </span>
                          <span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                              <circle cx="12" cy="12" r="9" stroke="#0084ce" strokeWidth="2" />
                              <path d="M12 7V12L15 15" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {post.readTime}
                          </span>
                          {post.author && (
                            <span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                                <circle cx="12" cy="8" r="4" stroke="#0084ce" strokeWidth="2" />
                                <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                              {post.author}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Article Body */}
                  {loading ? (
                    <div style={{ padding: "20px 0" }}>
                      <Skeleton w="100%" h={100} mb={20} radius={8} />
                      <Skeleton w="40%" h={28} mb={14} />
                      <Skeleton w="100%" h={16} mb={8} />
                      <Skeleton w="95%" h={16} mb={8} />
                      <Skeleton w="88%" h={16} mb={28} />
                      <Skeleton w="40%" h={28} mb={14} />
                      <Skeleton w="100%" h={16} mb={8} />
                      <Skeleton w="92%" h={16} mb={8} />
                      <Skeleton w="78%" h={16} mb={0} />
                    </div>
                  ) : (
                    <div className="single-post-body" ref={contentRef}>

                      {/* Excerpt as intro if no content blocks */}
                      {contentBlocks.length === 0 && post.excerpt && (
                        <p className="post-intro-text">{post.excerpt}</p>
                      )}

                      {/* Render content blocks */}
                      {contentBlocks.map((block, i) => {
                        if (!block || !block.type) return null;

                        if (block.type === "intro") return (
                          <p key={i} className="post-intro-text">{block.text}</p>
                        );

                        if (block.type === "heading") return (
                          <h2 key={i} className="post-section-heading">
                            <span className="heading-accent" />
                            {block.text}
                          </h2>
                        );

                        if (block.type === "paragraph") return (
                          <p key={i} className="post-paragraph">{block.text}</p>
                        );

                        if (block.type === "quote") return (
                          <blockquote key={i} className="post-quote">
                            <span className="quote-mark">"</span>
                            {block.text}
                          </blockquote>
                        );

                        if (block.type === "list") return (
                          <div key={i} className="post-keypoints">
                            {block.title && (
                              <h4 className="keypoints-title">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
                                  <circle cx="12" cy="12" r="9" stroke="#0084ce" strokeWidth="2" />
                                  <path d="M8 12L11 15L16 9" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                {block.title}
                              </h4>
                            )}
                            <p className="post-paragraph" style={{ marginBottom: 0 }}>{block.text}</p>
                          </div>
                        );

                        // fallback for any unknown type
                        return (
                          <p key={i} className="post-paragraph">{block.text}</p>
                        );
                      })}

                      {/* Share & Tags */}
                      <div className="post-footer-row">
                        <div className="post-tag-wrap">
                          <span className="post-tag-label">
                            {post.categories && post.categories.length > 0 ? "Categories:" : ""}
                          </span>
                          {post.categories && post.categories.map((cat, i) => (
                            <span key={i} className="post-tag">{cat}</span>
                          ))}
                        </div>
                        <div className="post-share">
                          <span className="post-share-label">Share:</span>
                          <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + window.location.href)}`}
                            target="_blank" rel="noreferrer" className="share-btn whatsapp-share">
                            <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                              <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16z" />
                            </svg>
                          </a>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                            target="_blank" rel="noreferrer" className="share-btn facebook-share">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Back Button */}
                  <div className="back-to-blog">
                    <Link to="/blog" className="back-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Back to All Articles
                    </Link>
                  </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="col-lg-4 mt-5 mt-lg-0">
                  <div className="blog-sidebar">

                    {/* CTA Card */}
                    <div className="sidebar-cta-card">
                      <div className="sidebar-cta-icon">
                        <svg width="48" height="48" viewBox="0 0 70 70" fill="none">
                          <circle cx="35" cy="35" r="28" stroke="#0084ce" strokeWidth="1.5" />
                          <path d="M35 10V35L50 50" stroke="#fa5a04" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="35" cy="35" r="4" fill="#0084ce" />
                        </svg>
                      </div>
                      <h4>Ready to Get Started?</h4>
                      <p>Get expert consultation from our team on any energy project.</p>
                      <Link to="/contact" className="sidebar-cta-btn">
                        Get Free Quote
                      </Link>
                      <div style={{ marginTop: 14, textAlign: "center" }}>
                        <a href="tel:+2349035775544" style={{ color: "#0084ce", fontWeight: 600, fontSize: "0.88rem" }}>
                          📞 +234 903 577 5544
                        </a>
                      </div>
                    </div>

                    {/* Our Services */}
                    <div className="sidebar-services">
                      <h4 className="sidebar-heading">Our Services</h4>
                      <ul className="sidebar-service-list">
                        {["LPG Skid Plant Setup", "Centralized Gas Systems", "Fuel & Storage Facilities", "Procurement & Supply", "Bulk LPG/CNG/AGO Supply", "Plant Maintenance"].map((service, i) => (
                          <li key={i}>
                            <Link to="/services">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8, flexShrink: 0 }}>
                                <path d="M9 18L15 12L9 6" stroke="#0084ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="sidebar-recent-posts">
                      <h4 className="sidebar-heading">Recent Posts</h4>
                      {relatedPosts.length === 0 && (
                        <>
                          <Skeleton w="100%" h={14} mb={8} />
                          <Skeleton w="70%" h={12} mb={16} />
                          <Skeleton w="100%" h={14} mb={8} />
                          <Skeleton w="70%" h={12} mb={0} />
                        </>
                      )}
                      {relatedPosts.map((p) => (
                        <Link key={p._id} to="/single-blog" state={{ slug: p.slug }} className="recent-post-item">
                          <div className="recent-post-dot" style={{ backgroundColor: p.color || "#0084ce" }} />
                          <div>
                            <p className="recent-post-title">{p.title}</p>
                            <span className="recent-post-date">{formatDate(p.date)}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* Related Posts */}
            {!error && relatedPosts.length > 0 && (
              <div className="row mt-5">
                <div className="col-12 mb-4">
                  <h3 style={{ color: "#fff", fontWeight: 700, borderLeft: "4px solid #0084ce", paddingLeft: 16 }}>
                    Related Articles
                  </h3>
                </div>
                {relatedPosts.map((related) => (
                  <RelatedCard key={related._id} post={related} />
                ))}
              </div>
            )}

          </div>
        </div>
      </main>

<style>{`
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .skeleton-box {
    display: block;
    background: linear-gradient(90deg, #e0edf8 25%, #f0f6ff 50%, #e0edf8 75%);
    background-size: 800px 100%;
    animation: shimmer 1.4s infinite linear;
    border-radius: 6px;
  }

  .single-blog-page {
    background: #f5f9ff;
    padding: 60px 0 80px;
  }

  /* ── Hero ── */
  .single-post-hero {
    border-radius: 16px;
    padding: 0;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
    min-height: 360px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 8px 40px rgba(0, 2, 109, 0.15);
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,2,109,0.88) 0%, rgba(0,2,109,0.4) 55%, rgba(0,0,0,0.1) 100%);
  }
  .hero-content {
    position: relative; z-index: 1;
    padding: 44px 40px;
    width: 100%;
  }
  .single-post-hero-skeleton {
    background: linear-gradient(90deg, #e0edf8 25%, #f0f6ff 50%, #e0edf8 75%);
    background-size: 800px 100%;
    animation: shimmer 1.4s infinite linear;
    border-radius: 16px;
    padding: 40px;
    margin-bottom: 40px;
    min-height: 240px;
  }
  .single-post-category {
    display: inline-block;
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 16px;
  }
  .single-post-title {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.4;
    margin-bottom: 20px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  }
  .single-post-meta {
    display: flex; gap: 20px; flex-wrap: wrap;
    color: rgba(255,255,255,0.85); font-size: 0.82rem;
  }
  .single-post-meta span { display: flex; align-items: center; }

  /* ── Body ── */
  .single-post-body {
    padding: 10px 0;
    background: #fff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 2px 16px rgba(0,132,206,0.07);
    margin-bottom: 24px;
  }

  .post-intro-text {
    color: #1a2a4a;
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 28px;
    padding: 22px 24px;
    background: linear-gradient(135deg, #eef6ff, #f5f9ff);
    border-left: 4px solid #0084ce;
    border-radius: 0 10px 10px 0;
    font-style: italic;
  }
  .post-section-heading {
    color: #00026d;
    font-size: 1.3rem;
    font-weight: 800;
    margin: 36px 0 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .heading-accent {
    display: inline-block; width: 4px; height: 26px;
    background: linear-gradient(to bottom, #0084ce, #00026d);
    border-radius: 2px; flex-shrink: 0;
  }
  .post-paragraph {
    color: #334466;
    font-size: 0.97rem;
    line-height: 1.9;
    margin-bottom: 20px;
  }
  .post-keypoints {
    background: linear-gradient(135deg, #eef6ff, #f5f9ff);
    border: 1px solid #cce0f5;
    border-left: 4px solid #0084ce;
    border-radius: 0 12px 12px 0;
    padding: 24px 28px;
    margin: 28px 0;
  }
  .keypoints-title {
    color: #00026d;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
  }
  .post-quote {
    background: linear-gradient(135deg, rgba(0,132,206,0.06), rgba(0,2,109,0.04));
    border-left: 4px solid #0084ce;
    border-radius: 0 10px 10px 0;
    padding: 22px 26px;
    margin: 24px 0;
    color: #1a2a4a;
    font-size: 1rem;
    line-height: 1.8;
    font-style: italic;
    position: relative;
  }
  .quote-mark {
    color: #0084ce;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
    margin-right: 6px;
    vertical-align: -6px;
  }

  /* ── Footer row ── */
  .post-footer-row {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
    padding: 22px 0 0; border-top: 2px solid #e0edf8; margin-top: 32px;
  }
  .post-tag-wrap { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .post-tag-label { color: #667788; font-size: 0.85rem; font-weight: 600; }
  .post-tag {
    background: rgba(0,132,206,0.1);
    border: 1px solid rgba(0,132,206,0.3);
    color: #0084ce;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 5px 14px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .post-share { display: flex; align-items: center; gap: 10px; }
  .post-share-label { color: #667788; font-size: 0.85rem; font-weight: 600; }
  .share-btn {
    width: 38px; height: 38px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s, box-shadow 0.2s; color: #fff;
  }
  .share-btn:hover { transform: scale(1.12); box-shadow: 0 4px 14px rgba(0,0,0,0.2); }
  .whatsapp-share { background: #25D366; }
  .facebook-share { background: #1877F2; }

  /* ── Back button ── */
  .back-to-blog { margin-top: 28px; }
  .back-btn {
    display: inline-flex; align-items: center; gap: 8px;
    color: #00026d !important; text-decoration: none !important;
    background: #fff;
    border: 2px solid #0084ce;
    padding: 10px 22px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;
    transition: background 0.25s, color 0.25s, box-shadow 0.25s;
  }
  .back-btn svg path { stroke: #00026d; }
  .back-btn:hover {
    background: #0084ce;
    color: #fff !important;
    box-shadow: 0 4px 18px rgba(0,132,206,0.25);
  }
  .back-btn:hover svg path { stroke: #fff; }

  /* ── Sidebar ── */
  .blog-sidebar { position: sticky; top: 100px; }

  .sidebar-cta-card {
    background: linear-gradient(135deg, #00026d 0%, #0084ce 100%);
    border-radius: 14px;
    padding: 30px 24px;
    margin-bottom: 24px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,2,109,0.2);
  }
  .sidebar-cta-icon { margin-bottom: 16px; }
  .sidebar-cta-card h4 { color: #fff; font-size: 1.1rem; font-weight: 800; margin-bottom: 8px; }
  .sidebar-cta-card p { color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 20px; line-height: 1.65; }
  .sidebar-cta-btn {
    display: block; text-align: center; text-decoration: none !important;
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff !important; padding: 12px 20px; border-radius: 8px;
    font-weight: 700; font-size: 0.9rem;
    box-shadow: 0 4px 14px rgba(250,90,4,0.35);
    transition: opacity 0.2s, transform 0.2s;
  }
  .sidebar-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }

  .sidebar-services, .sidebar-recent-posts {
    background: #fff;
    border: 1px solid #d8eaf8;
    border-radius: 14px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 2px 12px rgba(0,132,206,0.06);
  }
  .sidebar-heading {
    color: #00026d;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid #0084ce;
  }
  .sidebar-service-list { list-style: none; padding: 0; margin: 0; }
  .sidebar-service-list li { border-bottom: 1px solid #e8f2fc; padding: 9px 0; }
  .sidebar-service-list li:last-child { border-bottom: none; }
  .sidebar-service-list li a {
    color: #334466 !important; text-decoration: none !important;
    font-size: 0.88rem; display: flex; align-items: center; font-weight: 500;
    transition: color 0.2s, padding-left 0.2s;
  }
  .sidebar-service-list li a:hover { color: #0084ce !important; padding-left: 4px; }

  .recent-post-item {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 12px 0; border-bottom: 1px solid #e8f2fc;
    text-decoration: none !important; transition: opacity 0.2s;
  }
  .recent-post-item:last-child { border-bottom: none; }
  .recent-post-item:hover { opacity: 0.75; }
  .recent-post-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
  .recent-post-title { color: #1a2a4a; font-size: 0.85rem; line-height: 1.5; margin: 0 0 4px; font-weight: 600; }
  .recent-post-date { color: #8899aa; font-size: 0.75rem; }

  /* ── Related cards ── */
  .blog-card-custom {
    background: #fff;
    border-radius: 12px; overflow: hidden;
    border: 1px solid #d8eaf8;
    height: 100%; display: flex; flex-direction: column;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 12px rgba(0,132,206,0.06);
  }
  .blog-card-custom:hover {
    transform: translateY(-6px);
    border-color: #0084ce;
    box-shadow: 0 14px 40px rgba(0,132,206,0.15);
  }
  .blog-card-img {
    height: 180px; position: relative; display: flex;
    align-items: center; justify-content: center; overflow: hidden;
  }
  .blog-card-category-badge {
    position: absolute; top: 14px; left: 14px; z-index: 1;
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff; font-size: 0.68rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1px;
    padding: 5px 12px; border-radius: 20px;
  }
  .blog-card-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
  .blog-card-title { color: #00026d; font-size: 0.95rem; font-weight: 700; line-height: 1.55; margin-bottom: 12px; }
  .blog-readmore-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, #fa5a04, #fd3005);
    color: #fff !important; text-decoration: none !important;
    padding: 9px 18px; border-radius: 6px; font-size: 0.82rem; font-weight: 600;
    width: fit-content; transition: opacity 0.25s, transform 0.2s; margin-top: auto;
    box-shadow: 0 3px 10px rgba(250,90,4,0.3);
  }
  .blog-readmore-btn:hover { opacity: 0.88; transform: translateX(3px); }

  @media (max-width: 768px) {
    .single-post-title { font-size: 1.45rem; }
    .hero-content { padding: 24px 20px; }
    .single-post-body { padding: 20px; }
    .blog-sidebar { position: static; margin-top: 40px; }
  }
`}</style>

      <Footer />
    </div>
  );
};

export default SingleBlog;
