


import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gtcbackend.vercel.app/api/blog";

const C = {
  lightBlue: "#0084ce",
  darkBlue: "#00026d",
  lightOrange: "#fa5a04",
  darkOrange: "#fd3005",
};

const COLORS = [
  { label: "Light Orange", value: "#fa5a04" },
  { label: "Dark Orange", value: "#fd3005" },
  { label: "Light Blue", value: "#0084ce" },
  { label: "Dark Blue", value: "#00026d" },
  { label: "Dark Navy", value: "#1a2a3a" },
  { label: "Deep Blue", value: "#0d2137" },
  { label: "Dark Brown", value: "#2c1810" },
  { label: "Dark Green", value: "#1c3a1c" },
  { label: "Plum", value: "#1a001a" },
];

const CONTENT_TYPES = ["intro", "heading", "paragraph", "list", "quote"];

const initialForm = {
  title: "",
  excerpt: "",
  date: "",
  readTime: "",
  author: "",
  color: C.lightOrange,
  categories: "",
  content: [],
  image: null,
};

// ── Content Block Editor ──────────────────────────────────────────────────────
const ContentBlock = ({ block, index, onChange, onRemove }) => (
  <div style={{
    background: "#f8faff", border: "1px solid #dce8f5",
    borderRadius: 10, padding: "16px", marginBottom: 12,
  }}>
    <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
      <span style={{
        color: C.darkBlue, fontSize: "0.7rem", fontWeight: 700,
        background: `rgba(0,2,109,0.07)`, padding: "3px 10px", borderRadius: 20,
        border: `1px solid rgba(0,2,109,0.15)`,
      }}>Block {index + 1}</span>
      <select value={block.type} onChange={e => onChange(index, "type", e.target.value)} style={selectStyle}>
        {CONTENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button onClick={() => onRemove(index)} style={{
        marginLeft: "auto", background: "rgba(253,48,5,0.07)",
        border: "1px solid rgba(253,48,5,0.2)", color: C.darkOrange,
        borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
      }}>✕ Remove</button>
    </div>
    <textarea
      placeholder={`Enter ${block.type} text...`}
      value={block.text}
      onChange={e => onChange(index, "text", e.target.value)}
      rows={block.type === "paragraph" ? 4 : 2}
      style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
    />
  </div>
);

// ── Image Drop Zone ───────────────────────────────────────────────────────────
const ImageDropZone = ({ image, onImageChange }) => {
  const fileRef = useRef();
  const [dragging, setDragging] = useState(false);
  const handleDrop = useCallback((e) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) onImageChange(file);
  }, [onImageChange]);

  return (
    <div
      onClick={() => fileRef.current.click()}
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${dragging ? C.lightBlue : "#c8dff0"}`,
        borderRadius: 12, padding: "30px 20px", textAlign: "center",
        cursor: "pointer", background: dragging ? "rgba(0,132,206,0.04)" : "#f5f9fd",
        transition: "all 0.2s ease", minHeight: 160,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
      }}
    >
      <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }}
        onChange={e => e.target.files[0] && onImageChange(e.target.files[0])} />
      {image ? (
        <>
          <img src={URL.createObjectURL(image)} alt="preview"
            style={{ maxHeight: 180, maxWidth: "100%", borderRadius: 8, objectFit: "cover" }} />
          <span style={{ color: "#888", fontSize: "0.78rem" }}>{image.name} · Click to change</span>
        </>
      ) : (
        <>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: `linear-gradient(135deg, ${C.lightBlue}, ${C.darkBlue})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.8" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
              <path d="M21 15l-5-5L5 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ color: "#555", margin: 0, fontSize: "0.88rem" }}>
            <span style={{ color: C.lightBlue, fontWeight: 700 }}>Click to upload</span> or drag & drop
          </p>
          <p style={{ color: "#aaa", margin: 0, fontSize: "0.74rem" }}>JPEG, PNG, WEBP · Max 5MB</p>
        </>
      )}
    </div>
  );
};

// ── FORMAT DATE (same as SingleBlog) ─────────────────────────────────────────
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.includes("-") && dateStr.length === 10) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  return dateStr;
};

// ── PREVIEW MODAL — mirrors SingleBlog UI exactly ────────────────────────────
const PreviewModal = ({ form, onClose }) => {
  const imageUrl = form.image ? URL.createObjectURL(form.image) : null;
  const categories = form.categories
    ? form.categories.split(",").map(c => c.trim()).filter(Boolean)
    : [];

  // Same content block rendering as SingleBlog
  const renderBlock = (block, i) => {
    if (!block || !block.type) return null;
    if (block.type === "intro") return (
      <p key={i} className="sb-post-intro-text">{block.text}</p>
    );
    if (block.type === "heading") return (
      <h2 key={i} className="sb-post-section-heading">
        <span className="sb-heading-accent" />
        {block.text}
      </h2>
    );
    if (block.type === "paragraph") return (
      <p key={i} className="sb-post-paragraph">{block.text}</p>
    );
    if (block.type === "quote") return (
      <blockquote key={i} className="sb-post-quote">
        <span className="sb-quote-mark">"</span>
        {block.text}
      </blockquote>
    );
    if (block.type === "list") return (
      <div key={i} className="sb-post-keypoints">
        {block.title && (
          <h4 className="sb-keypoints-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
              <circle cx="12" cy="12" r="9" stroke="#0084ce" strokeWidth="2" />
              <path d="M8 12L11 15L16 9" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {block.title}
          </h4>
        )}
        <p className="sb-post-paragraph" style={{ marginBottom: 0 }}>{block.text}</p>
      </div>
    );
    return <p key={i} className="sb-post-paragraph">{block.text}</p>;
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(4px)",
      overflowY: "auto",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>

      {/* Preview Top Bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: `linear-gradient(135deg, ${C.darkBlue} 0%, ${C.lightBlue} 100%)`,
        padding: "12px 24px",
        display: "flex", alignItems: "center", gap: 14,
        boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
      }}>
        <div style={{
          background: C.lightOrange, color: "#fff",
          fontSize: "0.68rem", fontWeight: 800, letterSpacing: "1.5px",
          padding: "5px 14px", borderRadius: 20, textTransform: "uppercase",
        }}>
          👁 Live Preview
        </div>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
          This is exactly how readers will see your post
        </span>
        <button onClick={onClose} style={{
          marginLeft: "auto",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff", borderRadius: 8,
          padding: "8px 18px", cursor: "pointer",
          fontWeight: 700, fontSize: "0.82rem",
          display: "flex", alignItems: "center", gap: 7,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Back to editing
        </button>
      </div>

      {/* ── Simulated SingleBlog page ── */}
      <div style={{ background: "#f5f9ff", minHeight: "100vh" }}>

        {/* Page Header (mirrors SingleBlog's .page-header) */}
        <div style={{
          background: `linear-gradient(135deg, ${C.darkBlue} 0%, rgba(0,132,206,0.85) 100%)`,
          padding: "50px 40px 40px",
          borderBottom: `3px solid ${C.lightOrange}`,
        }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.3 }}>
              {form.title || <span style={{ opacity: 0.4 }}>No title yet...</span>}
            </h1>
            <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.65)", fontSize: "0.82rem" }}>
              <span>Home</span><span>›</span>
              <span>Blog</span><span>›</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>{form.title || "Article"}</span>
            </div>
          </div>
        </div>

        {/* Main content (mirrors SingleBlog's .single-blog-page) */}
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "50px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 330px", gap: 32, alignItems: "flex-start" }}>

            {/* ── Left: Article ── */}
            <div>

              {/* Hero — mirrors .single-post-hero */}
              <div style={{
                borderRadius: 16, marginBottom: 40, position: "relative",
                overflow: "hidden", minHeight: 320,
                display: "flex", alignItems: "flex-end",
                boxShadow: "0 8px 40px rgba(0,2,109,0.15)",
                ...(imageUrl
                  ? { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
                  : { background: `linear-gradient(135deg, ${form.color || C.lightBlue} 0%, #0a0a0a 100%)` }
                ),
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,2,109,0.88) 0%, rgba(0,2,109,0.4) 55%, rgba(0,0,0,0.1) 100%)",
                }} />
                <div style={{ position: "relative", zIndex: 1, padding: "44px 40px", width: "100%" }}>
                  {categories.length > 0 && (
                    <span style={{
                      display: "inline-block",
                      background: "linear-gradient(135deg, #fa5a04, #fd3005)",
                      color: "#fff", fontSize: "0.72rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "1.5px",
                      padding: "6px 16px", borderRadius: 20, marginBottom: 16,
                    }}>{categories[0]}</span>
                  )}
                  <h1 style={{
                    color: "#fff", fontSize: "1.9rem", fontWeight: 800,
                    lineHeight: 1.4, marginBottom: 20,
                    textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                  }}>{form.title || <span style={{ opacity: 0.5 }}>No title yet...</span>}</h1>
                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap", color: "rgba(255,255,255,0.85)", fontSize: "0.82rem" }}>
                    {form.date && (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0084ce" strokeWidth="2" />
                          <path d="M16 2V6M8 2V6M3 10H21" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {formatDate(form.date)}
                      </span>
                    )}
                    {form.readTime && (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="#0084ce" strokeWidth="2" />
                          <path d="M12 7V12L15 15" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {form.readTime}
                      </span>
                    )}
                    {form.author && (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" stroke="#0084ce" strokeWidth="2" />
                          <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20" stroke="#0084ce" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {form.author}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Article body — .single-post-body */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "32px",
                marginBottom: 24, boxShadow: "0 2px 16px rgba(0,132,206,0.07)",
              }}>
                {form.content.length === 0 && form.excerpt && (
                  <p className="sb-post-intro-text">{form.excerpt}</p>
                )}
                {form.content.length > 0
                  ? form.content.map((block, i) => renderBlock(block, i))
                  : !form.excerpt && (
                    <div style={{
                      textAlign: "center", padding: "40px 20px",
                      border: "1px dashed #cce0f5", borderRadius: 10, color: "#aaa",
                    }}>No content blocks added yet</div>
                  )
                }

                {/* Tags + Share footer */}
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  flexWrap: "wrap", gap: 16,
                  paddingTop: 22, borderTop: "2px solid #e0edf8", marginTop: 32,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    {categories.length > 0 && <span style={{ color: "#667788", fontSize: "0.85rem", fontWeight: 600 }}>Categories:</span>}
                    {categories.map((cat, i) => (
                      <span key={i} style={{
                        background: "rgba(0,132,206,0.1)", border: "1px solid rgba(0,132,206,0.3)",
                        color: "#0084ce", fontSize: "0.75rem", fontWeight: 700,
                        padding: "5px 14px", borderRadius: 20,
                        textTransform: "uppercase", letterSpacing: "0.5px",
                      }}>{cat}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#667788", fontSize: "0.85rem", fontWeight: 600 }}>Share:</span>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 32 32" fill="white"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16z" /></svg>
                    </div>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back button */}
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "#00026d", background: "#fff", border: "2px solid #0084ce",
                padding: "10px 22px", borderRadius: 8, fontSize: "0.88rem", fontWeight: 600,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#00026d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to All Articles
              </span>
            </div>

            {/* ── Right: Sidebar — exact copy of SingleBlog's sidebar ── */}
            <div style={{ position: "sticky", top: 72 }}>

              {/* CTA Card */}
              <div style={{
                background: "linear-gradient(135deg, #00026d 0%, #0084ce 100%)",
                borderRadius: 14, padding: "30px 24px", marginBottom: 24,
                textAlign: "center", boxShadow: "0 8px 32px rgba(0,2,109,0.2)",
              }}>
                <div style={{ marginBottom: 16 }}>
                  <svg width="48" height="48" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="28" stroke="#0084ce" strokeWidth="1.5" />
                    <path d="M35 10V35L50 50" stroke="#fa5a04" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="35" cy="35" r="4" fill="#0084ce" />
                  </svg>
                </div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>Ready to Get Started?</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginBottom: 20, lineHeight: 1.65 }}>Get expert consultation from our team on any energy project.</p>
                <div style={{
                  background: "linear-gradient(135deg, #fa5a04, #fd3005)", color: "#fff",
                  padding: "12px 20px", borderRadius: 8, fontWeight: 700, fontSize: "0.9rem",
                  boxShadow: "0 4px 14px rgba(250,90,4,0.35)",
                }}>Get Free Quote</div>
                <div style={{ marginTop: 14 }}>
                  <span style={{ color: "#0084ce", fontWeight: 600, fontSize: "0.88rem" }}>📞 +234 903 577 5544</span>
                </div>
              </div>

              {/* Services */}
              <div style={{ background: "#fff", border: "1px solid #d8eaf8", borderRadius: 14, padding: "24px", marginBottom: 24, boxShadow: "0 2px 12px rgba(0,132,206,0.06)" }}>
                <h4 style={{ color: "#00026d", fontSize: "1rem", fontWeight: 800, marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #0084ce" }}>Our Services</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["LPG Skid Plant Setup", "Centralized Gas Systems", "Fuel & Storage Facilities", "Procurement & Supply", "Bulk LPG/CNG/AGO Supply", "Plant Maintenance"].map((s, i) => (
                    <li key={i} style={{ borderBottom: "1px solid #e8f2fc", padding: "9px 0" }}>
                      <span style={{ color: "#334466", fontSize: "0.88rem", display: "flex", alignItems: "center", fontWeight: 500 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
                          <path d="M9 18L15 12L9 6" stroke="#0084ce" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div style={{ background: "#fff", border: "1px solid #d8eaf8", borderRadius: 14, padding: "24px", boxShadow: "0 2px 12px rgba(0,132,206,0.06)" }}>
                <h4 style={{ color: "#00026d", fontSize: "1rem", fontWeight: 800, marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #0084ce" }}>Recent Posts</h4>
                <p style={{ color: "#aaa", fontSize: "0.82rem", margin: 0 }}>Other articles will appear here after publishing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content block styles — mirrors SingleBlog's CSS */}
      <style>{`
        .sb-post-intro-text {
          color: #1a2a4a; font-size: 1.05rem; line-height: 1.9; margin-bottom: 28px;
          padding: 22px 24px;
          background: linear-gradient(135deg, #eef6ff, #f5f9ff);
          border-left: 4px solid #0084ce; border-radius: 0 10px 10px 0; font-style: italic;
        }
        .sb-post-section-heading {
          color: #00026d; font-size: 1.3rem; font-weight: 800;
          margin: 36px 0 14px; display: flex; align-items: center; gap: 12px;
        }
        .sb-heading-accent {
          display: inline-block; width: 4px; height: 26px;
          background: linear-gradient(to bottom, #0084ce, #00026d);
          border-radius: 2px; flex-shrink: 0;
        }
        .sb-post-paragraph { color: #334466; font-size: 0.97rem; line-height: 1.9; margin-bottom: 20px; }
        .sb-post-keypoints {
          background: linear-gradient(135deg, #eef6ff, #f5f9ff);
          border: 1px solid #cce0f5; border-left: 4px solid #0084ce;
          border-radius: 0 12px 12px 0; padding: 24px 28px; margin: 28px 0;
        }
        .sb-keypoints-title { color: #00026d; font-size: 1rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; }
        .sb-post-quote {
          background: linear-gradient(135deg, rgba(0,132,206,0.06), rgba(0,2,109,0.04));
          border-left: 4px solid #0084ce; border-radius: 0 10px 10px 0;
          padding: 22px 26px; margin: 24px 0;
          color: #1a2a4a; font-size: 1rem; line-height: 1.8; font-style: italic; position: relative;
        }
        .sb-quote-mark { color: #0084ce; font-size: 2.5rem; font-weight: 900; line-height: 1; margin-right: 6px; vertical-align: -6px; }
      `}</style>
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────────────────────────
const inputStyle = {
  width: "100%", background: "#fff", border: "1px solid #d0e4f5",
  borderRadius: 8, color: "#111", padding: "11px 14px",
  fontSize: "0.88rem", outline: "none", boxSizing: "border-box",
  fontFamily: "inherit", transition: "border-color 0.2s, box-shadow 0.2s",
};
const selectStyle = { ...inputStyle, width: "auto", padding: "6px 12px", cursor: "pointer" };
const labelStyle = {
  display: "block", color: "#444", fontSize: "0.72rem", fontWeight: 800,
  textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 7,
};
const fieldWrap = { marginBottom: 20 };

// ── Main Component ────────────────────────────────────────────────────────────
const UploadBlog = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const addBlock = () => set("content", [...form.content, { type: "paragraph", text: "" }]);
  const removeBlock = (i) => set("content", form.content.filter((_, idx) => idx !== i));
  const updateBlock = (i, key, val) => {
    const updated = [...form.content];
    updated[i] = { ...updated[i], [key]: val };
    set("content", updated);
  };

  const handleSubmit = async () => {
    if (!form.title) { setErrorMsg("Title is required."); setStatus("error"); return; }
    setStatus("loading"); setErrorMsg("");
    const fd = new FormData();
    fd.append("title", form.title); fd.append("excerpt", form.excerpt);
    fd.append("date", form.date); fd.append("readTime", form.readTime);
    fd.append("author", form.author); fd.append("color", form.color);
    if (form.categories) form.categories.split(",").map(c => c.trim()).forEach(c => fd.append("categories", c));
    fd.append("content", JSON.stringify(form.content));
    if (form.image) fd.append("image", form.image);
    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.message || `Server error ${res.status}`); }
      setStatus("success"); setForm(initialForm);
    } catch (err) { setStatus("error"); setErrorMsg(err.message || "Something went wrong."); }
  };

  const focusStyles = (field) => ({
    ...inputStyle,
    borderColor: focusedField === field ? C.lightBlue : "#d0e4f5",
    boxShadow: focusedField === field ? `0 0 0 3px rgba(0,132,206,0.12)` : "none",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f0f6fc", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {showPreview && <PreviewModal form={form} onClose={() => setShowPreview(false)} />}

      {/* Top Bar */}
      <div style={{
        background: `linear-gradient(135deg, ${C.darkBlue} 0%, ${C.lightBlue} 100%)`,
        padding: "0 32px", display: "flex", alignItems: "center",
        height: 62, gap: 20, boxShadow: "0 2px 20px rgba(0,2,109,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 16 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem" }}>
            Clarion <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>CMS</span>
          </span>
        </div>
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)" }} />
        <Link to="/blog" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", fontWeight: 600 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          Back to Blog
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>Admin Panel</span>
        </div>
      </div>

      {/* Page Title Banner */}
      <div style={{ background: `linear-gradient(135deg, ${C.darkBlue}ee 0%, ${C.lightBlue}cc 100%)`, padding: "32px 32px 28px", borderBottom: `3px solid ${C.lightOrange}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>New Blog Post</h1>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.83rem", margin: "4px 0 0" }}>Publish a new article to the Clarion Global Energy blog</p>
            </div>
            <button onClick={() => setShowPreview(true)} style={{
              marginLeft: "auto", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff", borderRadius: 10, padding: "10px 20px", cursor: "pointer",
              fontSize: "0.84rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
              </svg>
              Preview
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px 80px" }}>

        {status === "success" && (
          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ color: "#16a34a", fontWeight: 600, fontSize: "0.88rem" }}>Blog post published successfully!</span>
          </div>
        )}
        {status === "error" && (
          <div style={{ background: "rgba(253,48,5,0.06)", border: `1px solid rgba(253,48,5,0.25)`, borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={C.darkOrange} strokeWidth="2" /><path d="M12 8V12M12 16H12.01" stroke={C.darkOrange} strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ color: C.darkOrange, fontWeight: 600, fontSize: "0.88rem" }}>{errorMsg || "An error occurred."}</span>
          </div>
        )}

        <Section title="Core Information" icon="📝" accent={C.darkBlue}>
          <div style={fieldWrap}>
            <label style={labelStyle}>Title <span style={{ color: C.darkOrange }}>*</span></label>
            <input type="text" placeholder="e.g. LPG Skid Plant Investment Guide" value={form.title} onChange={e => set("title", e.target.value)} onFocus={() => setFocusedField("title")} onBlur={() => setFocusedField(null)} style={focusStyles("title")} />
          </div>
          <div style={fieldWrap}>
            <label style={labelStyle}>Excerpt</label>
            <textarea placeholder="Short description shown on the blog listing page..." value={form.excerpt} onChange={e => set("excerpt", e.target.value)} onFocus={() => setFocusedField("excerpt")} onBlur={() => setFocusedField(null)} rows={3} style={{ ...focusStyles("excerpt"), resize: "vertical", fontFamily: "inherit" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Author</label>
              <input type="text" placeholder="e.g. Clarion Global Energy Team" value={form.author} onChange={e => set("author", e.target.value)} onFocus={() => setFocusedField("author")} onBlur={() => setFocusedField(null)} style={focusStyles("author")} />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Read Time</label>
              <input type="text" placeholder="e.g. 5 min read" value={form.readTime} onChange={e => set("readTime", e.target.value)} onFocus={() => setFocusedField("readTime")} onBlur={() => setFocusedField(null)} style={focusStyles("readTime")} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Date</label>
              <input type="date" value={form.date} onChange={e => set("date", e.target.value)} onFocus={() => setFocusedField("date")} onBlur={() => setFocusedField(null)} style={focusStyles("date")} />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Categories</label>
              <input type="text" placeholder="LPG, Energy, Investment (comma-separated)" value={form.categories} onChange={e => set("categories", e.target.value)} onFocus={() => setFocusedField("categories")} onBlur={() => setFocusedField(null)} style={focusStyles("categories")} />
            </div>
          </div>
        </Section>

        <Section title="Card Accent Color" icon="🎨" accent={C.lightBlue}>
          <label style={labelStyle}>Choose a color for the blog card gradient</label>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            {COLORS.map(c => (
              <button key={c.value} onClick={() => set("color", c.value)} title={c.label} style={{
                width: 40, height: 40, borderRadius: 10,
                background: `linear-gradient(135deg, ${c.value} 0%, #050505 100%)`,
                border: form.color === c.value ? `3px solid ${C.lightOrange}` : "2px solid #dde",
                cursor: "pointer",
                boxShadow: form.color === c.value ? `0 0 0 2px rgba(250,90,4,0.25)` : "0 2px 6px rgba(0,0,0,0.1)",
                transition: "all 0.2s", transform: form.color === c.value ? "scale(1.18)" : "scale(1)",
              }} />
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 4 }}>
              <input type="color" value={form.color} onChange={e => set("color", e.target.value)} style={{ width: 40, height: 40, borderRadius: 10, border: "2px solid #dde", cursor: "pointer", padding: 2 }} />
              <span style={{ color: "#888", fontSize: "0.78rem" }}>Custom</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 140, height: 56, borderRadius: 10, background: `linear-gradient(135deg, ${form.color} 0%, #050505 100%)`, border: "1px solid #dde" }} />
            <div>
              <p style={{ margin: 0, color: "#555", fontSize: "0.8rem", fontWeight: 600 }}>Preview</p>
              <p style={{ margin: 0, color: "#aaa", fontSize: "0.75rem", fontFamily: "monospace" }}>{form.color}</p>
            </div>
          </div>
        </Section>

        <Section title="Cover Image" icon="🖼️" accent={C.lightBlue}>
          <ImageDropZone image={form.image} onImageChange={f => set("image", f)} />
          {form.image && (
            <button onClick={() => set("image", null)} style={{ marginTop: 10, background: "transparent", border: "none", color: C.darkOrange, cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, padding: 0 }}>✕ Remove image</button>
          )}
        </Section>

        <Section title="Article Content" icon="📄" accent={C.darkBlue}>
          <p style={{ color: "#777", fontSize: "0.82rem", marginBottom: 16, marginTop: 0 }}>
            Build your article by adding content blocks. These are stored in the{" "}
            <code style={{ color: C.darkBlue, background: "rgba(0,2,109,0.07)", padding: "2px 6px", borderRadius: 4, fontSize: "0.78rem" }}>content</code> array.
          </p>
          {form.content.length === 0 && (
            <div style={{ textAlign: "center", padding: "30px 20px", border: `1px dashed #c8dff0`, borderRadius: 10, color: "#aaa", fontSize: "0.85rem", marginBottom: 14, background: "#f5f9fd" }}>
              No content blocks yet. Add one below.
            </div>
          )}
          {form.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} onChange={updateBlock} onRemove={removeBlock} />
          ))}
          <button onClick={addBlock} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: `rgba(0,132,206,0.07)`, border: `1px solid rgba(0,132,206,0.25)`,
            color: C.lightBlue, borderRadius: 8, padding: "11px 18px",
            cursor: "pointer", fontSize: "0.84rem", fontWeight: 700, width: "100%", justifyContent: "center", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,132,206,0.13)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,132,206,0.07)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke={C.lightBlue} strokeWidth="2.5" strokeLinecap="round" /></svg>
            Add Content Block
          </button>
        </Section>

        <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center" }}>
          <button onClick={() => setShowPreview(true)} style={{
            background: "#fff", color: C.darkBlue, border: `1.5px solid ${C.lightBlue}`, borderRadius: 10,
            padding: "15px 22px", fontSize: "0.88rem", fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)", whiteSpace: "nowrap",
          }}
            onMouseEnter={e => e.currentTarget.style.background = `rgba(0,132,206,0.06)`}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.lightBlue} strokeWidth="2" />
              <circle cx="12" cy="12" r="3" stroke={C.lightBlue} strokeWidth="2" />
            </svg>
            Preview
          </button>
          <button onClick={handleSubmit} disabled={status === "loading"} style={{
            flex: 1, background: status === "loading" ? "#aaa" : `linear-gradient(135deg, ${C.lightOrange} 0%, ${C.darkOrange} 100%)`,
            color: "#fff", border: "none", borderRadius: 10, padding: "15px 24px", fontSize: "1rem", fontWeight: 800,
            cursor: status === "loading" ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: status === "loading" ? "none" : `0 6px 20px rgba(253,48,5,0.35)`,
          }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            {status === "loading" ? <><SpinnerIcon /> Publishing...</> : (
              <><svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              </svg>Publish Blog Post</>
            )}
          </button>
          <button onClick={() => { setForm(initialForm); setStatus(null); }} style={{
            background: "#fff", color: "#666", border: `1px solid #d0e4f5`, borderRadius: 10,
            padding: "15px 22px", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.lightBlue; e.currentTarget.style.color = C.darkBlue; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0e4f5"; e.currentTarget.style.color = "#666"; }}
          >Reset</button>
        </div>
        <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.75rem", marginTop: 18 }}>
          Posts are published immediately and visible on the Clarion Global Energy blog.
        </p>
      </div>
    </div>
  );
};

const Section = ({ title, icon, children, accent = "#0084ce" }) => (
  <div style={{ background: "#fff", border: "1px solid #dce8f5", borderRadius: 14, padding: "24px", marginBottom: 18, boxShadow: "0 2px 12px rgba(0,2,109,0.05)", borderTop: `3px solid ${accent}` }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid #eef4fb" }}>
      <span style={{ fontSize: "1rem" }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: "0.92rem", fontWeight: 800, color: "#1a1a2e", letterSpacing: "0.3px", textTransform: "uppercase" }}>{title}</h2>
    </div>
    {children}
  </div>
);

const SpinnerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
    <path d="M12 3A9 9 0 0 1 21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </svg>
);

export default UploadBlog;
