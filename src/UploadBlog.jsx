import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8002/api/blog";

// ── Clarion Brand Colors ──────────────────────────────────────────────────────
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
    background: "#f8faff",
    border: "1px solid #dce8f5",
    borderRadius: 10,
    padding: "16px",
    marginBottom: 12,
    position: "relative",
  }}>
    <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
      <span style={{
        color: C.darkBlue, fontSize: "0.7rem", fontWeight: 700,
        background: `rgba(0,2,109,0.07)`, padding: "3px 10px", borderRadius: 20,
        border: `1px solid rgba(0,2,109,0.15)`,
      }}>
        Block {index + 1}
      </span>
      <select
        value={block.type}
        onChange={e => onChange(index, "type", e.target.value)}
        style={selectStyle}
      >
        {CONTENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button onClick={() => onRemove(index)} style={{
        marginLeft: "auto", background: "rgba(253,48,5,0.07)", border: "1px solid rgba(253,48,5,0.2)",
        color: C.darkOrange, borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
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
    e.preventDefault();
    setDragging(false);
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
        borderRadius: 12,
        padding: "30px 20px",
        textAlign: "center",
        cursor: "pointer",
        background: dragging ? "rgba(0,132,206,0.04)" : "#f5f9fd",
        transition: "all 0.2s ease",
        minHeight: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
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

// ── Styles ────────────────────────────────────────────────────────────────────
const inputStyle = {
  width: "100%",
  background: "#fff",
  border: "1px solid #d0e4f5",
  borderRadius: 8,
  color: "#111",
  padding: "11px 14px",
  fontSize: "0.88rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const selectStyle = {
  ...inputStyle,
  width: "auto",
  padding: "6px 12px",
  cursor: "pointer",
};

const labelStyle = {
  display: "block",
  color: "#444",
  fontSize: "0.72rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  marginBottom: 7,
};

const fieldWrap = { marginBottom: 20 };

// ── Main Component ────────────────────────────────────────────────────────────
const UploadBlog = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState(null);

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
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("excerpt", form.excerpt);
    fd.append("date", form.date);
    fd.append("readTime", form.readTime);
    fd.append("author", form.author);
    fd.append("color", form.color);
    if (form.categories) {
      form.categories.split(",").map(c => c.trim()).forEach(c => fd.append("categories", c));
    }
    fd.append("content", JSON.stringify(form.content));
    if (form.image) fd.append("image", form.image);

    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `Server error ${res.status}`);
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const focusStyles = (field) => ({
    ...inputStyle,
    borderColor: focusedField === field ? C.lightBlue : "#d0e4f5",
    boxShadow: focusedField === field ? `0 0 0 3px rgba(0,132,206,0.12)` : "none",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f0f6fc", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── Top Bar ── */}
      <div style={{
        background: `linear-gradient(135deg, ${C.darkBlue} 0%, ${C.lightBlue} 100%)`,
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        height: 62,
        gap: 20,
        boxShadow: "0 2px 20px rgba(0,2,109,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 16 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.25)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.3px" }}>
            Clarion <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>CMS</span>
          </span>
        </div>

        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)" }} />

        <Link to="/blog" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", fontWeight: 600 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Back to Blog
        </Link>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>Admin Panel</span>
        </div>
      </div>

      {/* ── Page Title Banner ── */}
      <div style={{
        background: `linear-gradient(135deg, ${C.darkBlue}ee 0%, ${C.lightBlue}cc 100%)`,
        padding: "32px 32px 28px",
        borderBottom: `3px solid ${C.lightOrange}`,
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
                New Blog Post
              </h1>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.83rem", margin: "4px 0 0" }}>
                Publish a new article to the Clarion Global Energy blog
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px 80px" }}>

        {/* ── Status ── */}
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

        {/* ── Section: Core Info ── */}
        <Section title="Core Information" icon="📝" accent={C.darkBlue}>
          <div style={fieldWrap}>
            <label style={labelStyle}>Title <span style={{ color: C.darkOrange }}>*</span></label>
            <input type="text" placeholder="e.g. LPG Skid Plant Investment Guide"
              value={form.title} onChange={e => set("title", e.target.value)}
              onFocus={() => setFocusedField("title")} onBlur={() => setFocusedField(null)}
              style={focusStyles("title")} />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Excerpt</label>
            <textarea placeholder="Short description shown on the blog listing page..."
              value={form.excerpt} onChange={e => set("excerpt", e.target.value)}
              onFocus={() => setFocusedField("excerpt")} onBlur={() => setFocusedField(null)}
              rows={3} style={{ ...focusStyles("excerpt"), resize: "vertical", fontFamily: "inherit" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Author</label>
              <input type="text" placeholder="e.g. Clarion Global Energy Team"
                value={form.author} onChange={e => set("author", e.target.value)}
                onFocus={() => setFocusedField("author")} onBlur={() => setFocusedField(null)}
                style={focusStyles("author")} />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Read Time</label>
              <input type="text" placeholder="e.g. 5 min read"
                value={form.readTime} onChange={e => set("readTime", e.target.value)}
                onFocus={() => setFocusedField("readTime")} onBlur={() => setFocusedField(null)}
                style={focusStyles("readTime")} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Date</label>
              <input type="date" value={form.date} onChange={e => set("date", e.target.value)}
                onFocus={() => setFocusedField("date")} onBlur={() => setFocusedField(null)}
                style={focusStyles("date")} />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Categories</label>
              <input type="text" placeholder="LPG, Energy, Investment (comma-separated)"
                value={form.categories} onChange={e => set("categories", e.target.value)}
                onFocus={() => setFocusedField("categories")} onBlur={() => setFocusedField(null)}
                style={focusStyles("categories")} />
            </div>
          </div>
        </Section>

        {/* ── Section: Card Color ── */}
        <Section title="Card Accent Color" icon="🎨" accent={C.lightBlue}>
          <label style={labelStyle}>Choose a color for the blog card gradient</label>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            {COLORS.map(c => (
              <button key={c.value} onClick={() => set("color", c.value)} title={c.label}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `linear-gradient(135deg, ${c.value} 0%, #050505 100%)`,
                  border: form.color === c.value ? `3px solid ${C.lightOrange}` : "2px solid #dde",
                  cursor: "pointer",
                  boxShadow: form.color === c.value ? `0 0 0 2px rgba(250,90,4,0.25), 0 4px 12px rgba(0,0,0,0.15)` : "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.2s",
                  transform: form.color === c.value ? "scale(1.18)" : "scale(1)",
                }}
              />
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 4 }}>
              <input type="color" value={form.color} onChange={e => set("color", e.target.value)}
                style={{ width: 40, height: 40, borderRadius: 10, border: "2px solid #dde", cursor: "pointer", padding: 2 }} />
              <span style={{ color: "#888", fontSize: "0.78rem" }}>Custom</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 140, height: 56, borderRadius: 10,
              background: `linear-gradient(135deg, ${form.color} 0%, #050505 100%)`,
              border: "1px solid #dde",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            }} />
            <div>
              <p style={{ margin: 0, color: "#555", fontSize: "0.8rem", fontWeight: 600 }}>Preview</p>
              <p style={{ margin: 0, color: "#aaa", fontSize: "0.75rem", fontFamily: "monospace" }}>{form.color}</p>
            </div>
          </div>
        </Section>

        {/* ── Section: Cover Image ── */}
        <Section title="Cover Image" icon="🖼️" accent={C.lightBlue}>
          <ImageDropZone image={form.image} onImageChange={f => set("image", f)} />
          {form.image && (
            <button onClick={() => set("image", null)} style={{
              marginTop: 10, background: "transparent", border: "none", color: C.darkOrange,
              cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, padding: 0,
            }}>✕ Remove image</button>
          )}
        </Section>

        {/* ── Section: Content Blocks ── */}
        <Section title="Article Content" icon="📄" accent={C.darkBlue}>
          <p style={{ color: "#777", fontSize: "0.82rem", marginBottom: 16, marginTop: 0 }}>
            Build your article by adding content blocks. These are stored in the{" "}
            <code style={{ color: C.darkBlue, background: "rgba(0,2,109,0.07)", padding: "2px 6px", borderRadius: 4, fontSize: "0.78rem" }}>content</code> array.
          </p>

          {form.content.length === 0 && (
            <div style={{
              textAlign: "center", padding: "30px 20px",
              border: `1px dashed #c8dff0`, borderRadius: 10,
              color: "#aaa", fontSize: "0.85rem", marginBottom: 14,
              background: "#f5f9fd",
            }}>
              No content blocks yet. Add one below.
            </div>
          )}

          {form.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} onChange={updateBlock} onRemove={removeBlock} />
          ))}

          <button onClick={addBlock}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: `rgba(0,132,206,0.07)`,
              border: `1px solid rgba(0,132,206,0.25)`,
              color: C.lightBlue, borderRadius: 8, padding: "11px 18px",
              cursor: "pointer", fontSize: "0.84rem", fontWeight: 700, width: "100%",
              justifyContent: "center", transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,132,206,0.13)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,132,206,0.07)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke={C.lightBlue} strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            Add Content Block
          </button>
        </Section>

        {/* ── Submit ── */}
        <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center" }}>
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              flex: 1,
              background: status === "loading" ? "#aaa" : `linear-gradient(135deg, ${C.lightOrange} 0%, ${C.darkOrange} 100%)`,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "15px 24px",
              fontSize: "1rem",
              fontWeight: 800,
              cursor: status === "loading" ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "opacity 0.2s",
              boxShadow: status === "loading" ? "none" : `0 6px 20px rgba(253,48,5,0.35)`,
              letterSpacing: "0.3px",
            }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            {status === "loading" ? (
              <><SpinnerIcon /> Publishing...</>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                Publish Blog Post
              </>
            )}
          </button>

          <button
            onClick={() => { setForm(initialForm); setStatus(null); }}
            style={{
              background: "#fff",
              color: "#666",
              border: `1px solid #d0e4f5`,
              borderRadius: 10,
              padding: "15px 22px",
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.lightBlue; e.currentTarget.style.color = C.darkBlue; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0e4f5"; e.currentTarget.style.color = "#666"; }}
          >
            Reset
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.75rem", marginTop: 18 }}>
          Posts are published immediately and visible on the Clarion Global Energy blog.
        </p>
      </div>
    </div>
  );
};

// ── Section Wrapper ───────────────────────────────────────────────────────────
const Section = ({ title, icon, children, accent = "#0084ce" }) => (
  <div style={{
    background: "#fff",
    border: "1px solid #dce8f5",
    borderRadius: 14,
    padding: "24px",
    marginBottom: 18,
    boxShadow: "0 2px 12px rgba(0,2,109,0.05)",
    borderTop: `3px solid ${accent}`,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid #eef4fb" }}>
      <span style={{ fontSize: "1rem" }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: "0.92rem", fontWeight: 800, color: "#1a1a2e", letterSpacing: "0.3px", textTransform: "uppercase" }}>{title}</h2>
    </div>
    {children}
  </div>
);

// ── Spinner ───────────────────────────────────────────────────────────────────
const SpinnerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
    <path d="M12 3A9 9 0 0 1 21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </svg>
);

export default UploadBlog;
