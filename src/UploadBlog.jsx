
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gtcbackend.vercel.app/api/all-blog";

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

const TEXT_COLORS = [
  { label: "Default", value: "" },
  { label: "Dark Blue", value: "#00026d" },
  { label: "Blue", value: "#0084ce" },
  { label: "Orange", value: "#fa5a04" },
  { label: "Red", value: "#fd3005" },
  { label: "Green", value: "#1c7a1c" },
  { label: "Gray", value: "#667788" },
  { label: "Black", value: "#111" },
  { label: "White", value: "#ffffff" },
];

const HIGHLIGHT_COLORS = [
  { label: "None", value: "" },
  { label: "Yellow", value: "#fff9c4" },
  { label: "Blue", value: "#cce8ff" },
  { label: "Green", value: "#d4edda" },
  { label: "Pink", value: "#ffd6d6" },
  { label: "Orange", value: "#ffe0cc" },
  { label: "Purple", value: "#ead6ff" },
];

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px", "36px"];

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

// ── Rich Text Toolbar ─────────────────────────────────────────────────────────
const RichToolbar = ({ editorRef, onUpdate }) => {
  const [showTextColors, setShowTextColors] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [activeFormats, setActiveFormats] = useState({});

  const exec = (cmd, value = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
    onUpdate();
    updateActive();
  };

  const updateActive = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikeThrough: document.queryCommandState("strikeThrough"),
      justifyLeft: document.queryCommandState("justifyLeft"),
      justifyCenter: document.queryCommandState("justifyCenter"),
      justifyRight: document.queryCommandState("justifyRight"),
      justifyFull: document.queryCommandState("justifyFull"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
      superscript: document.queryCommandState("superscript"),
      subscript: document.queryCommandState("subscript"),
    });
  };

  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    el.addEventListener("keyup", updateActive);
    el.addEventListener("mouseup", updateActive);
    return () => {
      el.removeEventListener("keyup", updateActive);
      el.removeEventListener("mouseup", updateActive);
    };
  }, [editorRef]);

  const closeAll = () => { setShowTextColors(false); setShowHighlight(false); setShowFontSize(false); };

  const ToolBtn = ({ cmd, value, title, children, active }) => (
    <button
      onMouseDown={e => { e.preventDefault(); closeAll(); exec(cmd, value); }}
      title={title}
      style={{
        background: active ? "rgba(0,132,206,0.15)" : "transparent",
        border: active ? "1px solid rgba(0,132,206,0.4)" : "1px solid transparent",
        borderRadius: 5, padding: "4px 7px", cursor: "pointer",
        color: active ? C.lightBlue : "#333",
        fontSize: "0.82rem", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
        minWidth: 28, height: 28, transition: "all 0.15s",
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(0,0,0,0.06)"; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >{children}</button>
  );

  const Sep = () => (
    <div style={{ width: 1, height: 22, background: "#ddd", margin: "0 4px", flexShrink: 0 }} />
  );

  return (
    <div style={{
      background: "linear-gradient(to bottom, #f8faff, #f0f5fc)",
      border: "1px solid #d0e4f5",
      borderRadius: "8px 8px 0 0",
      padding: "6px 8px",
      display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center",
      borderBottom: "1px solid #d0e4f5",
      position: "relative",
    }}>
      {/* Font size */}
      <div style={{ position: "relative" }}>
        <button
          onMouseDown={e => { e.preventDefault(); setShowFontSize(v => !v); setShowTextColors(false); setShowHighlight(false); }}
          title="Font Size"
          style={{
            background: showFontSize ? "rgba(0,132,206,0.1)" : "#fff",
            border: "1px solid #d0e4f5", borderRadius: 5, padding: "4px 8px",
            cursor: "pointer", fontSize: "0.78rem", color: "#333",
            display: "flex", alignItems: "center", gap: 4, height: 28,
          }}
        >
          <span style={{ fontWeight: 600 }}>Size</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        {showFontSize && (
          <div style={{
            position: "absolute", top: "100%", left: 0, zIndex: 100,
            background: "#fff", border: "1px solid #d0e4f5", borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)", padding: 6, minWidth: 80, marginTop: 2,
          }}>
            {FONT_SIZES.map(sz => (
              <button key={sz} onMouseDown={e => { e.preventDefault(); exec("fontSize", "7"); setTimeout(() => { const sels = editorRef.current?.querySelectorAll('font[size="7"]'); sels?.forEach(s => { s.removeAttribute("size"); s.style.fontSize = sz; }); onUpdate(); }, 0); setShowFontSize(false); }}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "5px 8px", cursor: "pointer", fontSize: sz, color: "#333", borderRadius: 4 }}
                onMouseEnter={e => e.currentTarget.style.background = "#f0f5fc"}
                onMouseLeave={e => e.currentTarget.style.background = "none"}
              >{sz}</button>
            ))}
          </div>
        )}
      </div>

      <Sep />

      {/* Bold, Italic, Underline, Strike */}
      <ToolBtn cmd="bold" title="Bold (Ctrl+B)" active={activeFormats.bold}><b style={{ fontSize: "0.9rem" }}>B</b></ToolBtn>
      <ToolBtn cmd="italic" title="Italic (Ctrl+I)" active={activeFormats.italic}><i style={{ fontSize: "0.9rem" }}>I</i></ToolBtn>
      <ToolBtn cmd="underline" title="Underline (Ctrl+U)" active={activeFormats.underline}><u style={{ fontSize: "0.9rem" }}>U</u></ToolBtn>
      <ToolBtn cmd="strikeThrough" title="Strikethrough" active={activeFormats.strikeThrough}><s style={{ fontSize: "0.9rem" }}>S</s></ToolBtn>
      <ToolBtn cmd="superscript" title="Superscript" active={activeFormats.superscript}>x<sup style={{ fontSize: "0.6rem" }}>2</sup></ToolBtn>
      <ToolBtn cmd="subscript" title="Subscript" active={activeFormats.subscript}>x<sub style={{ fontSize: "0.6rem" }}>2</sub></ToolBtn>

      <Sep />

      {/* Text Color */}
      <div style={{ position: "relative" }}>
        <button
          onMouseDown={e => { e.preventDefault(); setShowTextColors(v => !v); setShowHighlight(false); setShowFontSize(false); }}
          title="Text Color"
          style={{
            background: showTextColors ? "rgba(0,132,206,0.1)" : "transparent",
            border: "1px solid transparent", borderRadius: 5,
            padding: "3px 6px", cursor: "pointer", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 1, height: 28, justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#333", lineHeight: 1 }}>A</span>
          <div style={{ width: 14, height: 3, background: C.lightOrange, borderRadius: 2 }} />
        </button>
        {showTextColors && (
          <ColorPicker colors={TEXT_COLORS} onSelect={color => { exec("foreColor", color || "#111"); setShowTextColors(false); }} onClose={() => setShowTextColors(false)} label="Text Color" />
        )}
      </div>

      {/* Highlight */}
      <div style={{ position: "relative" }}>
        <button
          onMouseDown={e => { e.preventDefault(); setShowHighlight(v => !v); setShowTextColors(false); setShowFontSize(false); }}
          title="Highlight"
          style={{
            background: showHighlight ? "rgba(0,132,206,0.1)" : "transparent",
            border: "1px solid transparent", borderRadius: 5,
            padding: "3px 6px", cursor: "pointer", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 1, height: 28, justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "0.75rem", lineHeight: 1 }}>🖊</span>
          <div style={{ width: 14, height: 3, background: "#fff9c4", border: "1px solid #e0c800", borderRadius: 2 }} />
        </button>
        {showHighlight && (
          <ColorPicker colors={HIGHLIGHT_COLORS} onSelect={color => { if (color) exec("hiliteColor", color); else exec("hiliteColor", "transparent"); setShowHighlight(false); }} onClose={() => setShowHighlight(false)} label="Highlight" />
        )}
      </div>

      <Sep />

      {/* Alignment */}
      <ToolBtn cmd="justifyLeft" title="Align Left" active={activeFormats.justifyLeft}>
        <AlignLeftIcon />
      </ToolBtn>
      <ToolBtn cmd="justifyCenter" title="Align Center" active={activeFormats.justifyCenter}>
        <AlignCenterIcon />
      </ToolBtn>
      <ToolBtn cmd="justifyRight" title="Align Right" active={activeFormats.justifyRight}>
        <AlignRightIcon />
      </ToolBtn>
      <ToolBtn cmd="justifyFull" title="Justify" active={activeFormats.justifyFull}>
        <AlignJustifyIcon />
      </ToolBtn>

      <Sep />

      {/* Lists */}
      <ToolBtn cmd="insertUnorderedList" title="Bullet List" active={activeFormats.insertUnorderedList}>
        <ListBulletIcon />
      </ToolBtn>
      <ToolBtn cmd="insertOrderedList" title="Numbered List" active={activeFormats.insertOrderedList}>
        <ListNumberIcon />
      </ToolBtn>

      <Sep />

      {/* Indent */}
      <ToolBtn cmd="indent" title="Indent">
        <IndentIcon />
      </ToolBtn>
      <ToolBtn cmd="outdent" title="Outdent">
        <OutdentIcon />
      </ToolBtn>

      <Sep />

      {/* Insert Link */}
      <button
        onMouseDown={e => {
          e.preventDefault();
          const url = prompt("Enter URL:", "https://");
          if (url) exec("createLink", url);
        }}
        title="Insert Link"
        style={{ background: "transparent", border: "1px solid transparent", borderRadius: 5, padding: "4px 7px", cursor: "pointer", color: "#333", height: 28, display: "flex", alignItems: "center" }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.06)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      ><LinkIcon /></button>
      <ToolBtn cmd="unlink" title="Remove Link"><UnlinkIcon /></ToolBtn>

      <Sep />

      {/* Clear formatting */}
      <button
        onMouseDown={e => { e.preventDefault(); exec("removeFormat"); }}
        title="Clear Formatting"
        style={{ background: "transparent", border: "1px solid transparent", borderRadius: 5, padding: "4px 7px", cursor: "pointer", color: "#888", fontSize: "0.72rem", fontWeight: 700, height: 28, display: "flex", alignItems: "center", gap: 3 }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.06)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        <ClearIcon /> <span style={{ fontSize: "0.7rem" }}>Clear</span>
      </button>

      {/* Undo/Redo */}
      <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
        <ToolBtn cmd="undo" title="Undo (Ctrl+Z)"><UndoIcon /></ToolBtn>
        <ToolBtn cmd="redo" title="Redo (Ctrl+Y)"><RedoIcon /></ToolBtn>
      </div>
    </div>
  );
};

const ColorPicker = ({ colors, onSelect, label }) => (
  <div style={{
    position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 200,
    background: "#fff", border: "1px solid #d0e4f5", borderRadius: 10,
    boxShadow: "0 8px 28px rgba(0,0,0,0.14)", padding: "10px 12px", minWidth: 160,
  }}>
    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#888", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {colors.map(c => (
        <button key={c.value} onMouseDown={e => { e.preventDefault(); onSelect(c.value); }} title={c.label}
          style={{
            width: 24, height: 24, borderRadius: 5, cursor: "pointer",
            background: c.value || "linear-gradient(135deg, #f0f0f0, #e0e0e0)",
            border: c.value ? "1px solid rgba(0,0,0,0.12)" : "1px dashed #bbb",
            position: "relative",
          }}
        >
          {!c.value && <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#888" }}>✕</span>}
        </button>
      ))}
    </div>
  </div>
);

// ── Rich Content Block ────────────────────────────────────────────────────────
const ContentBlock = ({ block, index, onChange, onRemove }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== block.text) {
      editorRef.current.innerHTML = block.text || "";
    }
  }, []);

  const handleUpdate = () => {
    if (editorRef.current) {
      onChange(index, "text", editorRef.current.innerHTML);
    }
  };

  return (
    <div style={{
      background: "#fff", border: `1.5px solid ${isFocused ? C.lightBlue : "#dce8f5"}`,
      borderRadius: 10, marginBottom: 14, overflow: "hidden",
      boxShadow: isFocused ? `0 0 0 3px rgba(0,132,206,0.10)` : "0 2px 8px rgba(0,132,206,0.04)",
      transition: "border-color 0.2s, box-shadow 0.2s",
    }}>
      {/* Block header */}
      <div style={{
        display: "flex", gap: 10, padding: "10px 14px",
        alignItems: "center", background: "#f5f9fd",
        borderBottom: "1px solid #dce8f5",
      }}>
        <span style={{
          color: C.darkBlue, fontSize: "0.68rem", fontWeight: 800,
          background: `rgba(0,2,109,0.07)`, padding: "3px 10px", borderRadius: 20,
          border: `1px solid rgba(0,2,109,0.15)`, flexShrink: 0,
        }}>Block {index + 1}</span>
        <select value={block.type} onChange={e => onChange(index, "type", e.target.value)} style={{
          background: "#fff", border: "1px solid #d0e4f5", borderRadius: 6,
          color: "#333", padding: "4px 10px", fontSize: "0.8rem", cursor: "pointer", outline: "none",
        }}>
          {CONTENT_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
        </select>
        <button onClick={() => onRemove(index)} style={{
          marginLeft: "auto", background: "rgba(253,48,5,0.07)",
          border: "1px solid rgba(253,48,5,0.2)", color: C.darkOrange,
          borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
        }}>✕ Remove</button>
      </div>

      {/* Toolbar */}
      <RichToolbar editorRef={editorRef} onUpdate={handleUpdate} />

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleUpdate}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        data-placeholder={`Enter ${block.type} content here...`}
        style={{
          padding: "14px 16px", minHeight: block.type === "paragraph" ? 100 : 56,
          outline: "none", color: "#222", fontSize: "0.92rem", lineHeight: 1.8,
          fontFamily: "inherit", cursor: "text",
        }}
      />

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #bbb;
          pointer-events: none;
        }
        [contenteditable] ul { padding-left: 20px; margin: 6px 0; }
        [contenteditable] ol { padding-left: 20px; margin: 6px 0; }
        [contenteditable] a { color: #0084ce; text-decoration: underline; }
        [contenteditable] blockquote { border-left: 3px solid #0084ce; margin: 8px 0; padding-left: 12px; color: #555; }
      `}</style>
    </div>
  );
};

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

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.includes("-") && dateStr.length === 10) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  return dateStr;
};

// ── PREVIEW MODAL ─────────────────────────────────────────────────────────────
const PreviewModal = ({ form, onClose }) => {
  const imageUrl = form.image ? URL.createObjectURL(form.image) : null;
  const categories = form.categories
    ? form.categories.split(",").map(c => c.trim()).filter(Boolean)
    : [];

  const renderBlock = (block, i) => {
    if (!block || !block.type) return null;
    const html = block.text || "";
    if (block.type === "intro") return (
      <p key={i} className="sb-post-intro-text" dangerouslySetInnerHTML={{ __html: html }} />
    );
    if (block.type === "heading") return (
      <h2 key={i} className="sb-post-section-heading">
        <span className="sb-heading-accent" />
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </h2>
    );
    if (block.type === "paragraph") return (
      <p key={i} className="sb-post-paragraph" dangerouslySetInnerHTML={{ __html: html }} />
    );
    if (block.type === "quote") return (
      <blockquote key={i} className="sb-post-quote">
        <span className="sb-quote-mark">"</span>
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </blockquote>
    );
    if (block.type === "list") return (
      <div key={i} className="sb-post-keypoints">
        <p className="sb-post-paragraph" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
    return <p key={i} className="sb-post-paragraph" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(4px)",
      overflowY: "auto",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: `linear-gradient(135deg, ${C.darkBlue} 0%, ${C.lightBlue} 100%)`,
        padding: "12px 24px",
        display: "flex", alignItems: "center", gap: 14,
        boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
      }}>
        <div style={{ background: C.lightOrange, color: "#fff", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "1.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase" }}>
          👁 Live Preview
        </div>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>This is exactly how readers will see your post</span>
        <button onClick={onClose} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 700, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 7 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          Back to editing
        </button>
      </div>

      <div style={{ background: "#f5f9ff", minHeight: "100vh" }}>
        <div style={{ background: `linear-gradient(135deg, ${C.darkBlue} 0%, rgba(0,132,206,0.85) 100%)`, padding: "50px 40px 40px", borderBottom: `3px solid ${C.lightOrange}` }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 800, margin: "0 0 14px", lineHeight: 1.3 }}>
              {form.title || <span style={{ opacity: 0.4 }}>No title yet...</span>}
            </h1>
          </div>
        </div>

        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "50px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 330px", gap: 32, alignItems: "flex-start" }}>
            <div>
              <div style={{
                borderRadius: 16, marginBottom: 40, position: "relative", overflow: "hidden", minHeight: 320,
                display: "flex", alignItems: "flex-end", boxShadow: "0 8px 40px rgba(0,2,109,0.15)",
                ...(imageUrl
                  ? { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
                  : { background: `linear-gradient(135deg, ${form.color || C.lightBlue} 0%, #0a0a0a 100%)` }
                ),
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,2,109,0.88) 0%, rgba(0,2,109,0.4) 55%, rgba(0,0,0,0.1) 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, padding: "44px 40px", width: "100%" }}>
                  {categories.length > 0 && (
                    <span style={{ display: "inline-block", background: "linear-gradient(135deg, #fa5a04, #fd3005)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>{categories[0]}</span>
                  )}
                  <h1 style={{ color: "#fff", fontSize: "1.9rem", fontWeight: 800, lineHeight: 1.4, marginBottom: 20, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>{form.title || "No title yet..."}</h1>
                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap", color: "rgba(255,255,255,0.85)", fontSize: "0.82rem" }}>
                    {form.date && <span>{formatDate(form.date)}</span>}
                    {form.readTime && <span>{form.readTime}</span>}
                    {form.author && <span>{form.author}</span>}
                  </div>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: "32px", marginBottom: 24, boxShadow: "0 2px 16px rgba(0,132,206,0.07)" }}>
                {form.content.length === 0 && form.excerpt && <p className="sb-post-intro-text">{form.excerpt}</p>}
                {form.content.length > 0
                  ? form.content.map((block, i) => renderBlock(block, i))
                  : !form.excerpt && <div style={{ textAlign: "center", padding: "40px 20px", border: "1px dashed #cce0f5", borderRadius: 10, color: "#aaa" }}>No content blocks added yet</div>
                }
              </div>
            </div>

            <div style={{ position: "sticky", top: 72 }}>
              <div style={{ background: "linear-gradient(135deg, #00026d 0%, #0084ce 100%)", borderRadius: 14, padding: "30px 24px", marginBottom: 24, textAlign: "center", boxShadow: "0 8px 32px rgba(0,2,109,0.2)" }}>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>Ready to Get Started?</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginBottom: 20, lineHeight: 1.65 }}>Get expert consultation from our team on any energy project.</p>
                <div style={{ background: "linear-gradient(135deg, #fa5a04, #fd3005)", color: "#fff", padding: "12px 20px", borderRadius: 8, fontWeight: 700, fontSize: "0.9rem" }}>Get Free Quote</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sb-post-intro-text { color: #1a2a4a; font-size: 1.05rem; line-height: 1.9; margin-bottom: 28px; padding: 22px 24px; background: linear-gradient(135deg, #eef6ff, #f5f9ff); border-left: 4px solid #0084ce; border-radius: 0 10px 10px 0; font-style: italic; }
        .sb-post-section-heading { color: #00026d; font-size: 1.3rem; font-weight: 800; margin: 36px 0 14px; display: flex; align-items: center; gap: 12px; }
        .sb-heading-accent { display: inline-block; width: 4px; height: 26px; background: linear-gradient(to bottom, #0084ce, #00026d); border-radius: 2px; flex-shrink: 0; }
        .sb-post-paragraph { color: #334466; font-size: 0.97rem; line-height: 1.9; margin-bottom: 20px; }
        .sb-post-keypoints { background: linear-gradient(135deg, #eef6ff, #f5f9ff); border: 1px solid #cce0f5; border-left: 4px solid #0084ce; border-radius: 0 12px 12px 0; padding: 24px 28px; margin: 28px 0; }
        .sb-post-quote { background: linear-gradient(135deg, rgba(0,132,206,0.06), rgba(0,2,109,0.04)); border-left: 4px solid #0084ce; border-radius: 0 10px 10px 0; padding: 22px 26px; margin: 24px 0; color: #1a2a4a; font-size: 1rem; line-height: 1.8; font-style: italic; position: relative; }
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
      <div style={{ background: `linear-gradient(135deg, ${C.darkBlue} 0%, ${C.lightBlue} 100%)`, padding: "0 32px", display: "flex", alignItems: "center", height: 62, gap: 20, boxShadow: "0 2px 20px rgba(0,2,109,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 16 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" /><path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" /></svg>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem" }}>Clarion <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>CMS</span></span>
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>New Blog Post</h1>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.83rem", margin: "4px 0 0" }}>Publish a new article to the Clarion Global Energy blog</p>
            </div>
            <button onClick={() => setShowPreview(true)} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 10, padding: "10px 20px", cursor: "pointer", fontSize: "0.84rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" /></svg>
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
              <button key={c.value} onClick={() => set("color", c.value)} title={c.label} style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${c.value} 0%, #050505 100%)`, border: form.color === c.value ? `3px solid ${C.lightOrange}` : "2px solid #dde", cursor: "pointer", boxShadow: form.color === c.value ? `0 0 0 2px rgba(250,90,4,0.25)` : "0 2px 6px rgba(0,0,0,0.1)", transition: "all 0.2s", transform: form.color === c.value ? "scale(1.18)" : "scale(1)" }} />
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
            Build your article using rich content blocks. Each block has a full editing toolbar — bold, italic, colors, alignment, lists, links, and more.
          </p>
          {form.content.length === 0 && (
            <div style={{ textAlign: "center", padding: "30px 20px", border: `1px dashed #c8dff0`, borderRadius: 10, color: "#aaa", fontSize: "0.85rem", marginBottom: 14, background: "#f5f9fd" }}>
              No content blocks yet. Add one below.
            </div>
          )}
          {form.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} onChange={updateBlock} onRemove={removeBlock} />
          ))}
          <button onClick={addBlock} style={{ display: "flex", alignItems: "center", gap: 8, background: `rgba(0,132,206,0.07)`, border: `1px solid rgba(0,132,206,0.25)`, color: C.lightBlue, borderRadius: 8, padding: "11px 18px", cursor: "pointer", fontSize: "0.84rem", fontWeight: 700, width: "100%", justifyContent: "center" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,132,206,0.13)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,132,206,0.07)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke={C.lightBlue} strokeWidth="2.5" strokeLinecap="round" /></svg>
            Add Content Block
          </button>
        </Section>

        <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center" }}>
          <button onClick={() => setShowPreview(true)} style={{ background: "#fff", color: C.darkBlue, border: `1.5px solid ${C.lightBlue}`, borderRadius: 10, padding: "15px 22px", fontSize: "0.88rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.background = `rgba(0,132,206,0.06)`}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.lightBlue} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.lightBlue} strokeWidth="2" /></svg>
            Preview
          </button>
          <button onClick={handleSubmit} disabled={status === "loading"} style={{ flex: 1, background: status === "loading" ? "#aaa" : `linear-gradient(135deg, ${C.lightOrange} 0%, ${C.darkOrange} 100%)`, color: "#fff", border: "none", borderRadius: 10, padding: "15px 24px", fontSize: "1rem", fontWeight: 800, cursor: status === "loading" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: status === "loading" ? "none" : `0 6px 20px rgba(253,48,5,0.35)` }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            {status === "loading" ? <><SpinnerIcon /> Publishing...</> : <><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" /><path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" /></svg>Publish Blog Post</>}
          </button>
          <button onClick={() => { setForm(initialForm); setStatus(null); }} style={{ background: "#fff", color: "#666", border: `1px solid #d0e4f5`, borderRadius: 10, padding: "15px 22px", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer" }}
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

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const AlignLeftIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M3 12H15M3 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const AlignCenterIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M6 12H18M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const AlignRightIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M9 12H21M6 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const AlignJustifyIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const ListBulletIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="7" r="1.5" fill="currentColor" /><circle cx="5" cy="12" r="1.5" fill="currentColor" /><circle cx="5" cy="17" r="1.5" fill="currentColor" /><path d="M9 7H21M9 12H21M9 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const ListNumberIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 7H21M9 12H21M9 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M4 7V4L3 5M4 12H3L4 10.5C4 10.5 3 10.5 3 11.5M3 17H4V15H3V17Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const IndentIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M3 18H21M7 12H21M3 9L6 12L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const OutdentIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M3 18H21M7 12H21M6 9L3 12L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const LinkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const UnlinkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.07-7.07l-1.72 1.71M5.17 11.75l-1.72 1.71a5 5 0 0 0 7.07 7.07l1.71-1.71M8 16l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const ClearIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const UndoIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 7v6h6M3 13A9 9 0 1 0 5.7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const RedoIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 7v6h-6M21 13A9 9 0 1 1 18.3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default UploadBlog;
