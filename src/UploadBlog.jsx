import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gtcbackend.vercel.app/api/blog";

const COLORS = [
  { label: "Orange", value: "#fa5a04" },
  { label: "Dark Navy", value: "#1a2a3a" },
  { label: "Deep Blue", value: "#0d2137" },
  { label: "Dark Brown", value: "#2c1810" },
  { label: "Dark Green", value: "#1c3a1c" },
  { label: "Deep Purple", value: "#1a0a2e" },
  { label: "Dark Amber", value: "#2a1a00" },
  { label: "Dark Teal", value: "#001a0d" },
  { label: "Plum", value: "#1a001a" },
];

const CONTENT_TYPES = ["intro", "heading", "paragraph", "list", "quote"];

const initialForm = {
  title: "",
  excerpt: "",
  date: "",
  readTime: "",
  author: "",
  color: "#fa5a04",
  categories: "",
  content: [],
  image: null,
};

// ── Content Block Editor ──────────────────────────────────────────────────────
const ContentBlock = ({ block, index, onChange, onRemove }) => (
  <div style={{
    background: "#0d0d0d",
    border: "1px solid #2a2a2a",
    borderRadius: 10,
    padding: "16px",
    marginBottom: 12,
    position: "relative",
  }}>
    <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
      <span style={{ color: "#fa5a04", fontSize: "0.7rem", fontWeight: 700, background: "rgba(250,90,4,0.1)", padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(250,90,4,0.2)" }}>
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
        marginLeft: "auto", background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.3)",
        color: "#e05555", borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
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
        border: `2px dashed ${dragging ? "#fa5a04" : "#2a2a2a"}`,
        borderRadius: 12,
        padding: "30px 20px",
        textAlign: "center",
        cursor: "pointer",
        background: dragging ? "rgba(250,90,4,0.05)" : "#0d0d0d",
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
          <span style={{ color: "#666", fontSize: "0.78rem" }}>{image.name} · Click to change</span>
        </>
      ) : (
        <>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#fa5a04" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#fa5a04" />
            <path d="M21 15l-5-5L5 21" stroke="#fa5a04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ color: "#666", margin: 0, fontSize: "0.88rem" }}>
            <span style={{ color: "#fa5a04", fontWeight: 700 }}>Click to upload</span> or drag & drop
          </p>
          <p style={{ color: "#444", margin: 0, fontSize: "0.74rem" }}>JPEG, PNG, WEBP · Max 5MB</p>
        </>
      )}
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────────────────────────
const inputStyle = {
  width: "100%",
  background: "#0d0d0d",
  border: "1px solid #2a2a2a",
  borderRadius: 8,
  color: "#e8e8e8",
  padding: "11px 14px",
  fontSize: "0.88rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const selectStyle = {
  ...inputStyle,
  width: "auto",
  padding: "6px 12px",
  cursor: "pointer",
};

const labelStyle = {
  display: "block",
  color: "#888",
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  marginBottom: 7,
};

const fieldWrap = { marginBottom: 20 };

// ── Main Component ────────────────────────────────────────────────────────────
const UploadBlog = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  // Content blocks
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
    borderColor: focusedField === field ? "#fa5a04" : "#2a2a2a",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(250,90,4,0.1)" : "none",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#e8e8e8", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── Top Bar ── */}
      <div style={{
        borderBottom: "1px solid #1a1a1a",
        background: "#fff",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        height: 58,
        gap: 20,
      }}>
        <Link to="/blog" style={{ color: "#fa5a04", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#fa5a04" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Back to Blog
        </Link>
        <div style={{ width: 1, height: 20, background: "#222" }} />
        <span style={{ color: "#333", fontSize: "0.82rem" }}>Admin</span>
        <svg width="5" height="5" viewBox="0 0 5 5" fill="#333"><circle cx="2.5" cy="2.5" r="2.5" /></svg>
        <span style={{ color: "#000", fontSize: "0.82rem" }}>New Post</span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fa5a04", boxShadow: "0 0 8px #fa5a04" }} />

        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <div style={{ width: 4, height: 32, background: "#fa5a04", borderRadius: 2 }} />
            <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 800, color: "#000", letterSpacing: "-0.5px" }}>
              New Blog Post
            </h1>
          </div>
          <p style={{ color: "#555", fontSize: "0.88rem", margin: 0, paddingLeft: 16 }}>
            Fill in the fields below to publish a new article to the Clarion Global Energy blog.
          </p>
        </div>

        {/* ── Status ── */}
        {status === "success" && (
          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 10, padding: "14px 18px", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ color: "#22c55e", fontWeight: 600, fontSize: "0.88rem" }}>Blog post published successfully!</span>
          </div>
        )}
        {status === "error" && (
          <div style={{ background: "rgba(220,50,50,0.08)", border: "1px solid rgba(220,50,50,0.25)", borderRadius: 10, padding: "14px 18px", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#e05555" strokeWidth="2" /><path d="M12 8V12M12 16H12.01" stroke="#e05555" strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ color: "#e05555", fontWeight: 600, fontSize: "0.88rem" }}>{errorMsg || "An error occurred."}</span>
          </div>
        )}

        {/* ── Section: Core Info ── */}
        <Section title="Core Information" icon="📝">
          <div style={fieldWrap}>
            <label style={labelStyle}>Title <span style={{ color: "#fa5a04" }}>*</span></label>
            <input
              type="text"
              placeholder="e.g. LPG Skid Plant Investment Guide"
              value={form.title}
              onChange={e => set("title", e.target.value)}
              onFocus={() => setFocusedField("title")}
              onBlur={() => setFocusedField(null)}
              style={focusStyles("title")}
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Excerpt</label>
            <textarea
              placeholder="Short description shown on the blog listing page..."
              value={form.excerpt}
              onChange={e => set("excerpt", e.target.value)}
              onFocus={() => setFocusedField("excerpt")}
              onBlur={() => setFocusedField(null)}
              rows={3}
              style={{ ...focusStyles("excerpt"), resize: "vertical", fontFamily: "inherit" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Author</label>
              <input
                type="text"
                placeholder="e.g. Clarion Global Energy Team"
                value={form.author}
                onChange={e => set("author", e.target.value)}
                onFocus={() => setFocusedField("author")}
                onBlur={() => setFocusedField(null)}
                style={focusStyles("author")}
              />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Read Time</label>
              <input
                type="text"
                placeholder="e.g. 5 min read"
                value={form.readTime}
                onChange={e => set("readTime", e.target.value)}
                onFocus={() => setFocusedField("readTime")}
                onBlur={() => setFocusedField(null)}
                style={focusStyles("readTime")}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={form.date}
                onChange={e => set("date", e.target.value)}
                onFocus={() => setFocusedField("date")}
                onBlur={() => setFocusedField(null)}
                style={{ ...focusStyles("date"), colorScheme: "dark" }}
              />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Categories</label>
              <input
                type="text"
                placeholder="LPG, Energy, Investment (comma-separated)"
                value={form.categories}
                onChange={e => set("categories", e.target.value)}
                onFocus={() => setFocusedField("categories")}
                onBlur={() => setFocusedField(null)}
                style={focusStyles("categories")}
              />
            </div>
          </div>
        </Section>

        {/* ── Section: Card Color ── */}
        <Section title="Card Accent Color" icon="🎨">
          <label style={labelStyle}>Choose a color for the blog card gradient</label>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {COLORS.map(c => (
              <button
                key={c.value}
                onClick={() => set("color", c.value)}
                title={c.label}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${c.value} 0%, #050505 100%)`,
                  border: form.color === c.value ? "2px solid #fa5a04" : "2px solid transparent",
                  cursor: "pointer",
                  boxShadow: form.color === c.value ? `0 0 0 2px rgba(250,90,4,0.3)` : "none",
                  transition: "all 0.2s",
                  transform: form.color === c.value ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
              <input type="color" value={form.color} onChange={e => set("color", e.target.value)}
                style={{ width: 38, height: 38, borderRadius: 8, border: "none", background: "none", cursor: "pointer", padding: 0 }} />
              <span style={{ color: "#555", fontSize: "0.78rem" }}>Custom</span>
            </div>
          </div>
          <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 120, height: 50, borderRadius: 8,
              background: `linear-gradient(135deg, ${form.color} 0%, #050505 100%)`,
              border: "1px solid #2a2a2a",
            }} />
            <span style={{ color: "#555", fontSize: "0.8rem" }}>Preview — {form.color}</span>
          </div>
        </Section>

        {/* ── Section: Cover Image ── */}
        <Section title="Cover Image" icon="🖼️">
          <ImageDropZone image={form.image} onImageChange={f => set("image", f)} />
          {form.image && (
            <button onClick={() => set("image", null)} style={{
              marginTop: 10, background: "transparent", border: "none", color: "#e05555",
              cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, padding: 0,
            }}>✕ Remove image</button>
          )}
        </Section>

        {/* ── Section: Content Blocks ── */}
        <Section title="Article Content" icon="📄">
          <p style={{ color: "#555", fontSize: "0.82rem", marginBottom: 16, marginTop: 0 }}>
            Build your article by adding content blocks. These will be stored in the <code style={{ color: "#fa5a04", fontSize: "0.8rem" }}>content</code> array.
          </p>

          {form.content.length === 0 && (
            <div style={{
              textAlign: "center", padding: "30px 20px", border: "1px dashed #2a2a2a",
              borderRadius: 10, color: "#444", fontSize: "0.85rem", marginBottom: 14,
            }}>
              No content blocks yet. Add one below.
            </div>
          )}

          {form.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} onChange={updateBlock} onRemove={removeBlock} />
          ))}

          <button onClick={addBlock} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(250,90,4,0.08)", border: "1px solid rgba(250,90,4,0.25)",
            color: "#fa5a04", borderRadius: 8, padding: "10px 18px",
            cursor: "pointer", fontSize: "0.84rem", fontWeight: 700, width: "100%",
            justifyContent: "center", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(250,90,4,0.14)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(250,90,4,0.08)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="#fa5a04" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            Add Content Block
          </button>
        </Section>

        {/* ── Submit ── */}
        <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center" }}>
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              flex: 1,
              background: status === "loading" ? "#5a2a00" : "#fa5a04",
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
              transition: "background 0.2s, transform 0.15s",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.background = "#e04e00"; }}
            onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.background = "#fa5a04"; }}
          >
            {status === "loading" ? (
              <>
                <SpinnerIcon />
                Publishing...
              </>
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
              background: "#111",
              color: "#666",
              border: "1px solid #2a2a2a",
              borderRadius: 10,
              padding: "15px 22px",
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#444"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = "#2a2a2a"; }}
          >
            Reset
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#333", fontSize: "0.75rem", marginTop: 20 }}>
          Posts are published immediately and visible on the blog page.
        </p>
      </div>
    </div>
  );
};

// ── Section Wrapper ───────────────────────────────────────────────────────────
const Section = ({ title, icon, children }) => (
  <div style={{
    background: "#0f0f0f",
    border: "1px solid #1e1e1e",
    borderRadius: 14,
    padding: "24px",
    marginBottom: 20,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1a1a1a" }}>
      <span style={{ fontSize: "1rem" }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#ccc", letterSpacing: "0.3px" }}>{title}</h2>
    </div>
    {children}
  </div>
);

// ── Spinner ───────────────────────────────────────────────────────────────────
const SpinnerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
    <path d="M12 3A9 9 0 0 1 21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </svg>
);

export default UploadBlog;
