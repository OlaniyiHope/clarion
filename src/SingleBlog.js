import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import ta from "./img/c9.png";
import mod from "./img/c10.png";
import promoImg from "./img/c1.png";
import headerBg from "./page-header-bg.jpg";
import { gsap } from "gsap";
import "./instagram.css";
import "./whatsapp.css";

// Full blog post content
const blogContent = {
  "lpg-skid-plant-investment-guide": {
    id: 1,
    title: "LPG Skid Plant Investment: What You Need to Know Before You Start",
    date: "February 10, 2025",
    category: "Investment",
    readTime: "5 min read",
    author: "Clarion Global Energy Team",
    color: "#fa5a04",
    content: [
      {
        type: "intro",
        text: "Investing in an LPG skid plant is one of the most profitable ventures in Nigeria's energy sector today. With millions of households transitioning from kerosene and firewood to cleaner cooking gas, demand has never been higher — and neither has the opportunity. But before you commit your capital, here is what every serious investor must understand.",
      },
      {
        type: "heading",
        text: "What Is an LPG Skid Plant?",
      },
      {
        type: "paragraph",
        text: "An LPG skid plant is a pre-engineered, compact gas filling station mounted on a steel skid frame. It consists of a storage tank (ranging from 1.5 metric tons to 10+ metric tons), filling scales, LPG pumps, cylinders, dispensers, and safety accessories — all integrated into a single portable unit. Unlike conventional filling stations, skid plants can be installed relatively quickly and begin generating revenue within weeks of commissioning.",
      },
      {
        type: "heading",
        text: "Why LPG Is a Smart Investment in Nigeria",
      },
      {
        type: "paragraph",
        text: "Nigeria is Africa's most populous nation with over 200 million people. According to the Nigerian Liquefied Petroleum Gas Association (NLPGA), domestic LPG consumption has grown by over 30% in the past five years. Government initiatives to expand clean cooking energy access have further accelerated adoption. The removal of petrol subsidies has made LPG an even more attractive alternative energy source.",
      },
      {
        type: "keypoints",
        title: "Key Benefits of Owning an LPG Skid Plant",
        points: [
          "Steady, recurring revenue from daily cylinder refills and bulk sales",
          "Relatively low operating cost once the plant is commissioned",
          "High demand in residential, commercial, and industrial sectors",
          "Scalable — start small and expand as your customer base grows",
          "Government support and growing regulatory framework for LPG",
        ],
      },
      {
        type: "heading",
        text: "Understanding the Setup Process",
      },
      {
        type: "paragraph",
        text: "Setting up an LPG skid plant requires careful planning. You will need a suitable site with adequate security, proper ventilation, and DPR approval. The process involves site assessment, engineering design, regulatory approvals, procurement of equipment, construction, installation, and final commissioning. Working with a certified company like Clarion Global Energy ensures that every step is handled professionally and in compliance with Nigerian and international standards.",
      },
      {
        type: "heading",
        text: "How Much Does It Cost?",
      },
      {
        type: "paragraph",
        text: "Investment costs vary depending on the capacity you choose. A 1.5 Metric Ton setup starts at approximately ₦6,000,000, while a 2.5 Metric Ton plant is priced around ₦8,700,000. For larger operations, a Twin 3.5 Ton plant is available at ₦18,000,000. These prices include the tank, locally assembled dispenser, and LPG materials. All prices include professional installation and post-installation support from our team.",
      },
      {
        type: "keypoints",
        title: "What To Look for in a Construction Partner",
        points: [
          "DPR-certified engineers and technicians",
          "Track record of completed and operational plants",
          "End-to-end service from design to commissioning",
          "Ongoing maintenance and technical support",
          "Transparent pricing with no hidden charges",
        ],
      },
      {
        type: "heading",
        text: "Start Your LPG Investment Journey Today",
      },
      {
        type: "paragraph",
        text: "The LPG market window is open right now. As infrastructure and adoption continue to grow across Nigeria, early movers will be best positioned to build loyal customer bases and expand operations. At Clarion Global Energy, we guide every investor — from first-timers to seasoned energy entrepreneurs — through the entire process. Reach out to us today for a free consultation.",
      },
    ],
  },
  "centralized-gas-systems-estates": {
    id: 2,
    title: "Why Estates & Developers Are Switching to Centralized Gas Systems",
    date: "January 25, 2025",
    category: "Technology",
    readTime: "4 min read",
    author: "Clarion Global Energy Team",
    color: "#0077b6",
    content: [
      {
        type: "intro",
        text: "Gone are the days of managing dozens of individual gas cylinders across a housing estate. Centralized Gas Systems (CGS) are rapidly becoming the gold standard for residential developments, hospitals, hostels, restaurants, and industrial facilities across Nigeria and beyond.",
      },
      {
        type: "heading",
        text: "What Is a Centralized Gas System?",
      },
      {
        type: "paragraph",
        text: "A Centralized Gas System (CGS) is a piped gas infrastructure that distributes LPG or natural gas from a central storage tank to multiple endpoints — kitchens, laboratories, industrial burners — through a network of pipes and regulators. Instead of every apartment managing its own cylinder, gas is stored centrally, distributed safely, and metered per unit.",
      },
      {
        type: "heading",
        text: "The Problems CGS Solves",
      },
      {
        type: "paragraph",
        text: "Traditional cylinder management creates multiple headaches for estate managers: tenants running out of gas unexpectedly, unsafe storage of cylinders in apartments, frequent cylinder replacements, theft, and the logistical challenge of coordinating deliveries. A CGS eliminates all of these pain points in one installation.",
      },
      {
        type: "keypoints",
        title: "Advantages of Centralized Gas Systems",
        points: [
          "Continuous, uninterrupted gas supply to all units",
          "Eliminates the risk of individual cylinder mishandling",
          "Reduced cost per unit through bulk purchasing",
          "Professional monitoring and safety controls",
          "Adds significant value to the property",
          "Metered billing — each tenant pays for what they use",
        ],
      },
      {
        type: "heading",
        text: "Who Is CGS Best For?",
      },
      {
        type: "paragraph",
        text: "Centralized Gas Systems are ideal for estate developers, building facility managers, hospital administrators, hotel and restaurant owners, university hostel managers, and industrial plant operators. Essentially, any environment with multiple gas users in a single facility can benefit enormously from a CGS installation.",
      },
      {
        type: "heading",
        text: "Our CGS Installation Process",
      },
      {
        type: "paragraph",
        text: "At Clarion Global Energy, our CGS installation process begins with a detailed site survey to map out the facility layout, calculate load requirements, and design an efficient piping network. We handle all approvals, procure certified materials, execute the installation, and commission the system with full testing. We also provide training for facility staff and offer ongoing maintenance contracts.",
      },
    ],
  },
  "lpg-vs-petrol-autogas": {
    id: 3,
    title: "LPG Autogas vs Petrol: The Cost Breakdown Nigerian Fleet Owners Must See",
    date: "January 12, 2025",
    category: "Energy Solutions",
    readTime: "6 min read",
    author: "Clarion Global Energy Team",
    color: "#023e8a",
    content: [
      {
        type: "intro",
        text: "With Nigeria's petrol prices continuing to climb following the removal of subsidies, fleet operators and logistics companies are urgently exploring alternatives. LPG autogas has emerged as the most compelling option — and the numbers make a compelling case.",
      },
      {
        type: "heading",
        text: "What Is LPG Autogas?",
      },
      {
        type: "paragraph",
        text: "LPG Autogas is liquefied petroleum gas used as vehicle fuel. Vehicles are either factory-fitted or retrofitted with bi-fuel systems that can run on both petrol and LPG. The autogas dispenser at a filling station functions much like a petrol pump, making the user experience familiar and convenient.",
      },
      {
        type: "heading",
        text: "The Cost Comparison",
      },
      {
        type: "paragraph",
        text: "On a per-kilometer basis, LPG autogas typically costs 40–60% less than petrol depending on current market prices. For a fleet of 20 vehicles each covering 200 km daily, this translates into millions of naira saved monthly. Beyond fuel costs, LPG burns cleaner, meaning less engine wear, longer oil change intervals, and reduced maintenance costs.",
      },
      {
        type: "keypoints",
        title: "Why Fleet Operators Are Making the Switch",
        points: [
          "Up to 60% lower fuel cost per kilometer compared to petrol",
          "Cleaner combustion — extends engine life significantly",
          "Reduced CO2 and particulate emissions",
          "Bi-fuel systems provide flexibility — switch to petrol when needed",
          "Lower long-term vehicle maintenance costs",
          "Supports corporate sustainability and ESG goals",
        ],
      },
      {
        type: "heading",
        text: "What Is Required for Conversion?",
      },
      {
        type: "paragraph",
        text: "Converting a petrol vehicle to run on LPG autogas requires a certified bi-fuel conversion kit installation. The process takes one to two days and involves fitting an LPG tank, vaporizer, mixer or injector system, and ECU adjustment. Clarion Global Energy can assist with procurement of autogas dispensers for businesses that want to set up their own fueling stations.",
      },
    ],
  },
  "safety-standards-lpg-plants": {
    id: 4,
    title: "Safety Standards Every LPG Plant Operator Must Follow in Nigeria",
    date: "December 20, 2024",
    category: "Safety",
    readTime: "7 min read",
    author: "Clarion Global Energy Team",
    color: "#d62828",
    content: [
      {
        type: "intro",
        text: "Operating an LPG plant without adhering to established safety standards isn't just a regulatory violation — it is a genuine threat to human life and property. Every year, preventable LPG accidents occur due to negligence, substandard equipment, and poor operational practices. This guide outlines the non-negotiable safety standards every LPG plant operator in Nigeria must follow.",
      },
      {
        type: "heading",
        text: "Regulatory Framework in Nigeria",
      },
      {
        type: "paragraph",
        text: "LPG plant operations in Nigeria are regulated primarily by the Nigerian Upstream Petroleum Regulatory Commission (NUPRC, formerly DPR) and the Standards Organisation of Nigeria (SON). All operators must obtain the appropriate licenses, register their facilities, and adhere to the Petroleum Act and relevant international standards including IP (Institute of Petroleum) codes.",
      },
      {
        type: "keypoints",
        title: "Core Safety Requirements",
        points: [
          "All LPG storage tanks must be pressure-tested and certified before commissioning",
          "A minimum setback distance must be maintained from buildings, fences, and roads",
          "Fire suppression systems (sprinklers, fire extinguishers) must be installed and maintained",
          "All electrical equipment within the hazardous zone must be explosion-proof rated",
          "Emergency shutdown valves must be installed and tested regularly",
          "Staff must receive certified LPG safety training",
          "Regular leak detection checks using calibrated gas detectors",
          "Visible signage and no-smoking zones must be clearly marked",
        ],
      },
      {
        type: "heading",
        text: "Equipment Certification",
      },
      {
        type: "paragraph",
        text: "Every piece of equipment used in an LPG plant — from storage tanks and pressure relief valves to dispensers and piping — must carry appropriate certification. Tanks should meet ASME or equivalent international pressure vessel standards. Using uncertified or locally fabricated equipment without proper pressure testing is one of the leading causes of LPG incidents in Nigeria.",
      },
      {
        type: "heading",
        text: "Working with a Certified Construction Partner",
      },
      {
        type: "paragraph",
        text: "The safest way to ensure your plant meets all regulatory and safety requirements is to work with a certified engineering company from the start. At Clarion Global Energy, we handle DPR licensing assistance, use only certified materials, and implement international safety standards in every installation we complete. Your safety is our priority.",
      },
    ],
  },
  "cng-lng-difference-nigeria": {
    id: 5,
    title: "CNG vs LNG vs LPG: What's the Difference and Which Is Right for Your Business?",
    date: "December 5, 2024",
    category: "Education",
    readTime: "5 min read",
    author: "Clarion Global Energy Team",
    color: "#2d6a4f",
    content: [
      {
        type: "intro",
        text: "If you've been exploring energy options for your business — whether for vehicle fuel, cooking, industrial processes, or power generation — you've likely come across the acronyms CNG, LNG, and LPG. These three terms often confuse business owners and investors alike. Let's break them down clearly.",
      },
      {
        type: "heading",
        text: "LPG — Liquefied Petroleum Gas",
      },
      {
        type: "paragraph",
        text: "LPG is a byproduct of natural gas processing and petroleum refining. It consists primarily of propane and butane and is stored as a liquid under moderate pressure. LPG is the most widely used of the three in Nigeria — familiar as cooking gas. It is also used in autogas vehicles, industrial heating, and power generation. It requires relatively simple storage infrastructure and is ideal for areas without pipeline access.",
      },
      {
        type: "heading",
        text: "CNG — Compressed Natural Gas",
      },
      {
        type: "paragraph",
        text: "CNG is natural gas (primarily methane) compressed to very high pressure — typically 200–250 bar — and stored in reinforced cylinders. It does not liquefy at normal temperatures; instead, it remains a gas that is simply compressed. CNG is commonly used as a vehicle fuel and in industrial applications. It requires heavy-duty high-pressure cylinders and specialized compression infrastructure.",
      },
      {
        type: "heading",
        text: "LNG — Liquefied Natural Gas",
      },
      {
        type: "paragraph",
        text: "LNG is natural gas that has been cooled to approximately -162°C, turning it into a liquid for storage and transport. This dramatically reduces its volume, making it suitable for long-distance transportation where pipelines are not available. LNG is used in large industrial facilities, power plants, and for fueling heavy-duty trucks and ships. It requires specialized cryogenic storage tanks.",
      },
      {
        type: "keypoints",
        title: "Quick Comparison Summary",
        points: [
          "LPG: Best for cooking, small-scale industrial, autogas, easy to store — ideal for most Nigerian businesses",
          "CNG: Best for fleet vehicles, medium industrial use — requires high-pressure infrastructure",
          "LNG: Best for large industrial facilities, power plants, long-distance transport — requires cryogenic storage",
          "Cost: LPG and CNG are generally more affordable at small to medium scale; LNG has high infrastructure costs",
          "All three can be supplied by Clarion Global Energy",
        ],
      },
    ],
  },
  "tank-farm-construction-process": {
    id: 6,
    title: "From Ground to Gas: How We Build a Tank Farm from Scratch",
    date: "November 18, 2024",
    category: "Construction",
    readTime: "8 min read",
    author: "Clarion Global Energy Team",
    color: "#6d23b6",
    content: [
      {
        type: "intro",
        text: "Building a petroleum tank farm is a complex, multi-phase engineering undertaking that requires regulatory compliance, precision construction, and rigorous safety testing. At Clarion Global Energy, we have built tank farms across Nigeria, and in this article, we share exactly how we do it — from initial ground assessment to final commissioning.",
      },
      {
        type: "heading",
        text: "Phase 1: Site Assessment & Feasibility",
      },
      {
        type: "paragraph",
        text: "Before a single trench is dug, our engineering team conducts a thorough site assessment. This includes geotechnical soil testing to determine load-bearing capacity, environmental impact assessment, flood risk analysis, setback distance verification from neighboring structures, and proximity to roads and utilities. A site that appears suitable visually may have critical underground issues that would compromise the tank foundation.",
      },
      {
        type: "heading",
        text: "Phase 2: Regulatory Approvals",
      },
      {
        type: "paragraph",
        text: "No tank farm construction proceeds without the required approvals. These include NUPRC (formerly DPR) site approval, fire service clearance, environmental impact assessment (EIA) approval from NESREA, and local government building permits. We assist all our clients in navigating this process, which can take 4–12 weeks depending on the jurisdiction.",
      },
      {
        type: "heading",
        text: "Phase 3: Foundation & Civil Works",
      },
      {
        type: "paragraph",
        text: "The foundation is the most critical structural component of a tank farm. Our civil engineers design reinforced concrete foundations based on the soil test results and tank load specifications. Bunded (secondary containment) walls are constructed to contain any potential spills. Underground drainage and sloped impermeable floors are installed to direct any product toward the containment drain.",
      },
      {
        type: "keypoints",
        title: "Key Construction Stages",
        points: [
          "Site clearing, grading, and access road construction",
          "Foundation excavation and reinforced concrete pouring",
          "Tank installation — tanks are positioned using heavy lifting equipment",
          "Piping fabrication and installation — all welded joints are NDT-tested",
          "Electrical and instrumentation installation",
          "Foam and fire suppression system installation",
          "Hydrostatic pressure testing of all tanks and pipelines",
          "Commissioning, calibration, and operational testing",
        ],
      },
      {
        type: "heading",
        text: "Phase 4: Testing & Commissioning",
      },
      {
        type: "paragraph",
        text: "Before any product is introduced into the facility, all tanks undergo hydrostatic pressure testing to verify integrity. All pipelines are tested for leaks. Safety systems — emergency shutdown valves, level gauges, pressure relief valves, and fire suppression systems — are tested and calibrated. Our team produces a full commissioning report, and we conduct handover training for the client's operational staff.",
      },
      {
        type: "heading",
        text: "Ongoing Support After Commissioning",
      },
      {
        type: "paragraph",
        text: "Our relationship with clients does not end at commissioning. Clarion Global Energy offers annual maintenance contracts, periodic safety inspections, equipment calibration, and emergency technical support. Tank farms require regular professional maintenance to remain safe, efficient, and compliant with regulatory requirements.",
      },
    ],
  },
};

const categoryColors = {
  Investment: "#fa5a04",
  Technology: "#0077b6",
  "Energy Solutions": "#023e8a",
  Safety: "#d62828",
  Education: "#2d6a4f",
  Construction: "#6d23b6",
};

// Related posts
const getRelatedPosts = (currentSlug) => {
  const all = Object.entries(blogContent)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3)
    .map(([slug, post]) => ({ ...post, slug }));
  return all;
};

const SingleBlog = () => {
  const { slug } = useParams();
  const [currentModal, setCurrentModal] = useState(1);
  const contentRef = useRef(null);

  const post = blogContent[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );
    }
  }, [slug]);

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

  if (!post) {
    return (
      <div>
        <Header />
        <div style={{ background: "#0a0a0a", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="text-center">
            <h2 style={{ color: "#fff" }}>Blog post not found.</h2>
            <Link to="/blog" className="elementor-button elementor-button-link elementor-size-sm mt-3" style={{ backgroundColor: "#fa5a04" }}>
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <div>
      {/* WhatsApp */}
      <a className="header-whatsapp" href="https://wa.me/2349035775544" aria-label="Chat with us on WhatsApp">
        <svg className="whatsapp-icon svg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z" />
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
                  <h1 className="entry-title">Blog</h1>
                  <div role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ol className="trail-items">
                      <li className="trail-item trail-begin"><Link to="/" rel="home"><span>Home</span></Link></li>
                      <li className="trail-item"><Link to="/blog"><span>Blog</span></Link></li>
                      <li className="trail-item trail-end"><span>{post.category}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Post Content */}
        <div className="single-blog-page">
          <div className="container">
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-8">
                {/* Hero Banner */}
                <div
                  className="single-post-hero"
                  style={{ background: `linear-gradient(135deg, ${post.color} 0%, #0a0a0a 100%)` }}
                >
                  <span
                    className="single-post-category"
                    style={{ backgroundColor: categoryColors[post.category] || "#fa5a04" }}
                  >
                    {post.category}
                  </span>
                  <h1 className="single-post-title">{post.title}</h1>
                  <div className="single-post-meta">
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#fa5a04" strokeWidth="2" />
                        <path d="M16 2V6M8 2V6M3 10H21" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {post.date}
                    </span>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                        <circle cx="12" cy="12" r="9" stroke="#fa5a04" strokeWidth="2" />
                        <path d="M12 7V12L15 15" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {post.readTime}
                    </span>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                        <circle cx="12" cy="8" r="4" stroke="#fa5a04" strokeWidth="2" />
                        <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {post.author}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="single-post-body" ref={contentRef}>
                  {post.content.map((block, i) => {
                    if (block.type === "intro") {
                      return (
                        <p key={i} className="post-intro-text">{block.text}</p>
                      );
                    }
                    if (block.type === "heading") {
                      return (
                        <h2 key={i} className="post-section-heading">
                          <span className="heading-accent"></span>
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "paragraph") {
                      return (
                        <p key={i} className="post-paragraph">{block.text}</p>
                      );
                    }
                    if (block.type === "keypoints") {
                      return (
                        <div key={i} className="post-keypoints">
                          <h4 className="keypoints-title">
                            <svg width="20" height="20" viewBox="0 0 512 512" fill="#fa5a04" style={{ marginRight: 8 }}>
                              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                            </svg>
                            {block.title}
                          </h4>
                          <ul className="keypoints-list">
                            {block.points.map((point, j) => (
                              <li key={j} className="keypoints-item">
                                <svg width="16" height="16" viewBox="0 0 512 512" fill="#fa5a04" style={{ marginRight: 10, flexShrink: 0 }}>
                                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                </svg>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}

                  {/* Share & Tags */}
                  <div className="post-footer-row">
                    <div className="post-tag-wrap">
                      <span className="post-tag-label">Category:</span>
                      <span className="post-tag" style={{ backgroundColor: categoryColors[post.category] || "#fa5a04" }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="post-share">
                      <span className="post-share-label">Share:</span>
                      <a href={`https://wa.me/?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="share-btn whatsapp-share">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
                          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16z" />
                        </svg>
                      </a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer" className="share-btn facebook-share">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <div className="back-to-blog">
                  <Link to="/blog" className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to All Articles
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="blog-sidebar">
                  {/* CTA Card */}
                  <div className="sidebar-cta-card">
                    <div className="sidebar-cta-icon">
                      <svg width="40" height="40" viewBox="0 0 70 70" fill="none">
                        <path d="M68.5417 32.0833C67.7367 32.0833 67.0833 31.43 67.0833 30.625C67.0833 15.3475 54.6525 2.91667 39.375 2.91667C38.57 2.91667 37.9167 2.26333 37.9167 1.45833C37.9167 0.653333 38.57 0 39.375 0C56.2625 0 70 13.7375 70 30.625C70 31.43 69.3467 32.0833 68.5417 32.0833Z" fill="#fa5a04" />
                        <circle cx="35" cy="35" r="20" stroke="#fa5a04" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <h4>Ready to Get Started?</h4>
                    <p>Get expert consultation from our team on any energy project.</p>
                    <Link to="/contact" className="elementor-button elementor-button-link elementor-size-sm" style={{ backgroundColor: "#fa5a04", display: "block", textAlign: "center" }}>
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Get Free Quote</span>
                      </span>
                    </Link>
                    <div style={{ marginTop: 16, textAlign: "center" }}>
                      <a href="tel:+2349035775544" style={{ color: "#fa5a04", fontWeight: 600, fontSize: "0.9rem" }}>
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
                            <svg width="14" height="14" viewBox="0 0 512 512" fill="#fa5a04" style={{ marginRight: 8 }}>
                              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
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
                    {Object.entries(blogContent).slice(0, 4).map(([postSlug, p]) => (
                      <Link key={postSlug} to={`/blog/${postSlug}`} className="recent-post-item">
                        <div className="recent-post-dot" style={{ backgroundColor: categoryColors[p.category] || "#fa5a04" }}></div>
                        <div>
                          <p className="recent-post-title">{p.title}</p>
                          <span className="recent-post-date">{p.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="row mt-5">
              <div className="col-12 mb-4">
                <h3 style={{ color: "#fff", fontWeight: 700, borderLeft: "4px solid #fa5a04", paddingLeft: 16 }}>
                  Related Articles
                </h3>
              </div>
              {relatedPosts.map((related) => (
                <div className="col-lg-4 col-md-6 mb-4" key={related.slug}>
                  <div className="blog-card-custom">
                    <div
                      className="blog-card-img"
                      style={{ background: `linear-gradient(135deg, ${related.color} 0%, #0a0a0a 100%)`, height: 150 }}
                    >
                      <div className="blog-card-category-badge" style={{ backgroundColor: categoryColors[related.category] || "#fa5a04" }}>
                        {related.category}
                      </div>
                    </div>
                    <div className="blog-card-body">
                      <p className="blog-card-date" style={{ color: "#888", fontSize: "0.78rem", marginBottom: 8 }}>{related.date}</p>
                      <h3 className="blog-card-title" style={{ fontSize: "0.95rem" }}>{related.title}</h3>
                      <Link to={`/blog/${related.slug}`} className="blog-readmore-btn" style={{ marginTop: "auto" }}>
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Single Blog Styles */}
      <style>{`
        .single-blog-page {
          background: #0a0a0a;
          padding: 60px 0 80px;
        }

        .single-post-hero {
          border-radius: 12px;
          padding: 48px 40px;
          margin-bottom: 40px;
          position: relative;
          overflow: hidden;
        }

        .single-post-hero::before {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: rgba(0,0,0,0.3);
          border-radius: 12px;
        }

        .single-post-hero > * {
          position: relative;
        }

        .single-post-category {
          display: inline-block;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .single-post-title {
          color: #fff;
          font-size: 1.9rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .single-post-meta {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.75);
          font-size: 0.82rem;
        }

        .single-post-meta span {
          display: flex;
          align-items: center;
        }

        .single-post-body {
          padding: 10px 0;
        }

        .post-intro-text {
          color: #ccc;
          font-size: 1.05rem;
          line-height: 1.9;
          margin-bottom: 28px;
          padding: 24px;
          background: #111;
          border-left: 4px solid #fa5a04;
          border-radius: 0 8px 8px 0;
          font-style: italic;
        }

        .post-section-heading {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 36px 0 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .heading-accent {
          display: inline-block;
          width: 4px;
          height: 24px;
          background: #fa5a04;
          border-radius: 2px;
        }

        .post-paragraph {
          color: #bbb;
          font-size: 0.95rem;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .post-keypoints {
          background: #111;
          border: 1px solid #222;
          border-radius: 10px;
          padding: 24px;
          margin: 28px 0;
        }

        .keypoints-title {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .keypoints-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .keypoints-item {
          color: #ccc;
          font-size: 0.9rem;
          padding: 8px 0;
          border-bottom: 1px solid #1a1a1a;
          display: flex;
          align-items: flex-start;
          line-height: 1.6;
        }

        .keypoints-item:last-child {
          border-bottom: none;
        }

        .post-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 24px 0;
          border-top: 1px solid #222;
          margin-top: 32px;
        }

        .post-tag-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .post-tag-label {
          color: #888;
          font-size: 0.85rem;
        }

        .post-tag {
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .post-share {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .post-share-label {
          color: #888;
          font-size: 0.85rem;
        }

        .share-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
          color: #fff;
        }

        .share-btn:hover {
          transform: scale(1.1);
          opacity: 0.85;
        }

        .whatsapp-share { background: #25D366; }
        .facebook-share { background: #1877F2; }

        .back-to-blog {
          margin-top: 30px;
          padding-top: 24px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff !important;
          text-decoration: none !important;
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.88rem;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .back-btn:hover {
          border-color: #fa5a04;
          background: #1f0a00;
        }

        /* Sidebar */
        .blog-sidebar {
          position: sticky;
          top: 100px;
        }

        .sidebar-cta-card {
          background: linear-gradient(135deg, #1a0500, #2c0a00);
          border: 1px solid #fa5a04;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 24px;
          text-align: center;
        }

        .sidebar-cta-icon {
          margin-bottom: 16px;
        }

        .sidebar-cta-card h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .sidebar-cta-card p {
          color: #aaa;
          font-size: 0.85rem;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .sidebar-services, .sidebar-recent-posts {
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .sidebar-heading {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #fa5a04;
        }

        .sidebar-service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-service-list li {
          border-bottom: 1px solid #1a1a1a;
          padding: 8px 0;
        }

        .sidebar-service-list li:last-child { border-bottom: none; }

        .sidebar-service-list li a {
          color: #ccc !important;
          text-decoration: none !important;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .sidebar-service-list li a:hover {
          color: #fa5a04 !important;
        }

        .recent-post-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #1a1a1a;
          text-decoration: none !important;
          transition: opacity 0.2s;
        }

        .recent-post-item:last-child { border-bottom: none; }
        .recent-post-item:hover { opacity: 0.8; }

        .recent-post-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .recent-post-title {
          color: #ccc;
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0 0 4px;
        }

        .recent-post-date {
          color: #666;
          font-size: 0.75rem;
        }

        /* Shared card styles */
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

        .blog-card-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.5;
          margin-bottom: 12px;
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

        @media (max-width: 768px) {
          .single-post-title { font-size: 1.4rem; }
          .single-post-hero { padding: 30px 20px; }
          .blog-sidebar { position: static; margin-top: 40px; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default SingleBlog;
